import bcrypt from 'bcryptjs'

/**
 * 对密码进行加盐哈希处理
 * @param password 原始密码
 * @returns 返回哈希后的密码
 */
export async function saltAndHashPassword(password: string): Promise<string> {
  // 生成随机盐值，推荐使用 10 轮
  const salt = await bcrypt.genSalt(10)

  // 使用生成的盐值对密码进行哈希
  const hashedPassword = await bcrypt.hash(password, salt)

  return hashedPassword
}

/**
 * 验证密码是否匹配
 * @param plainPassword 原始密码
 * @param hashedPassword 哈希后的密码
 * @returns 返回密码是否匹配
 */
export async function verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword)
}
