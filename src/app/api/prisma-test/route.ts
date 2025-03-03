import type { NextRequest } from 'next/server'
import { error, success } from '@/lib/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    // 尝试执行一个简单的查询来验证连接
    const users = await prisma.user.findMany({
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
