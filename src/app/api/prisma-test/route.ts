import db from '@/lib/db'
import { error, success } from '@/lib/server'

export async function GET() {
  try {
    // 尝试执行一个简单的查询来验证连接
    const users = await db.user.findMany({
      take: 1, // 只获取一条记录
    })

    return success({
      message: 'Prisma客户端连接成功',
      connectionTest: true,
      firstUser: users[0] || null,
    })
  }
  catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Prisma客户端连接失败'
    return error(errorMessage)
  }
}
