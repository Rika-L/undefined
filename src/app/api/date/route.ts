import type { NextRequest } from 'next/server'
import db from '@/lib/db'
import { error, success } from '@/lib/server'
import { countdownSchema, deleteCountdownSchema, updateCountdownSchema } from '@/lib/zod/date'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

// 创建新的倒计时
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { timestamp, description, type } = countdownSchema.parse(data)
    const countdown = await db.countdown.create({
      data: {
        timestamp: new Date(timestamp),
        description,
        type,
      },
    })
    return success(countdown)
  }
  catch (err) {
    const errorMessage = err instanceof Error ? err.message : '创建倒计时失败'
    return error(errorMessage)
  }
}

// 获取所有倒计时
export async function GET() {
  try {
    const countdowns = await db.countdown.findMany({
      orderBy: {
        timestamp: 'asc',
      },
    })
    return success(countdowns)
  }
  catch (err) {
    if (error instanceof PrismaClientKnownRequestError) {
      return error('数据库错误')
    }
    const errorMessage = err instanceof Error ? err.message : '获取倒计时列表失败'
    return error(errorMessage)
  }
}

// 更新倒计时
export async function PUT(req: NextRequest) {
  try {
    const data = await req.json()
    const { id, timestamp, description, type } = updateCountdownSchema.parse(data)
    const countdown = await db.countdown.update({
      where: {
        id,
      },
      data: {
        timestamp: new Date(timestamp),
        description,
        type,
      },
    })
    return success(countdown)
  }
  catch (err) {
    const errorMessage = err instanceof Error ? err.message : '更新倒计时失败'
    return error(errorMessage)
  }
}

// 删除倒计时
export async function DELETE(req: NextRequest) {
  try {
    const data = await req.json()
    const { id } = deleteCountdownSchema.parse(data)
    const countdown = await db.countdown.delete({
      where: {
        id,
      },
    })
    return success(countdown)
  }
  catch (err) {
    const errorMessage = err instanceof Error ? err.message : '删除倒计时失败'
    return error(errorMessage)
  }
}
