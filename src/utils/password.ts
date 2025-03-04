// 使用Web Crypto API进行密码哈希和验证

/**
 * 对密码进行PBKDF2哈希处理
 * @param password 原始密码
 * @returns 返回哈希后的密码（格式：salt.hash）
 */
export async function saltAndHashPassword(password: string): Promise<string> {
  // 生成随机盐值
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const encoder = new TextEncoder()
  const passwordBuffer = encoder.encode(password)

  // 使用PBKDF2进行密码哈希
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    passwordBuffer,
    'PBKDF2',
    false,
    ['deriveBits'],
  )

  const hash = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    256,
  )

  // 将salt和hash转换为Base64格式
  const saltBase64 = btoa(String.fromCharCode(...salt))
  const hashBase64 = btoa(String.fromCharCode(...new Uint8Array(hash)))

  // 返回格式：salt.hash
  return `${saltBase64}.${hashBase64}`
}

/**
 * 验证密码是否匹配
 * @param plainPassword 原始密码
 * @param storedHash 存储的哈希值（格式：salt.hash）
 * @returns 返回密码是否匹配
 */
export async function verifyPassword(plainPassword: string, storedHash: string): Promise<boolean> {
  try {
    const [saltBase64, hashBase64] = storedHash.split('.')
    if (!saltBase64 || !hashBase64)
      return false

    // 解码salt
    const salt = new Uint8Array(
      atob(saltBase64)
        .split('')
        .map(c => c.charCodeAt(0)),
    )

    const encoder = new TextEncoder()
    const passwordBuffer = encoder.encode(plainPassword)

    // 导入密码
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      passwordBuffer,
      'PBKDF2',
      false,
      ['deriveBits'],
    )

    // 使用相同的参数生成哈希
    const newHash = await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      keyMaterial,
      256,
    )

    // 将新生成的哈希转换为Base64格式
    const newHashBase64 = btoa(String.fromCharCode(...new Uint8Array(newHash)))

    // 比较哈希值
    return hashBase64 === newHashBase64
  }
  catch {
    return false
  }
}
