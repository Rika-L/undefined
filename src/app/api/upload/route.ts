import type { NextRequest } from 'next/server'
import { error, success } from '@/lib/server'
import { Octokit } from '@octokit/rest'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    if (!file)
      throw new Error('文件不存在')
    // 检查文件类型
    if (!file.type.startsWith('image/'))
      throw new Error('只支持上传图片文件')
    // 检查文件大小（限制为5MB）
    if (file.size > 5 * 1024 * 1024)
      throw new Error('文件大小不能超过5MB')
    // 读取文件内容
    const buffer = await file.arrayBuffer()
    const content = Buffer.from(buffer).toString('base64')

    // 获取文件扩展名
    const fileExt = file.name.split('.').pop()
    // 生成唯一的文件名（纯时间戳）
    const fileName = `${Date.now()}.${fileExt}`

    // 配置 GitHub Octokit 客户端
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    })

    // 上传文件到GitHub
    await octokit.rest.repos.createOrUpdateFileContents({
      owner: 'Rika-L',
      repo: 'image',
      path: fileName,
      message: `Upload by Next.js`,
      content,
    })

    // 生成CDN URL
    const url = `https://cdn.jsdelivr.net/gh/Rika-L/image/${fileName}`

    return success({ url, fileName })
  }
  catch (err) {
    const errorMessage = err instanceof Error ? err.message : '上传失败'
    return error(errorMessage)
  }
}
