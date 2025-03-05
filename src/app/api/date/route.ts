import { auth } from '@/lib/auth'
import db from '@/lib/db'
import { success, unAuth } from '@/lib/server'
import { countdownSchema, deleteCountdownSchema, updateCountdownSchema } from '@/lib/zod/date'
import { serverErrorHandler } from '@/utils/serverErrorHandler'

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
    return serverErrorHandler(err)
  }
}

// 创建新的倒计时
export const POST = auth(async (req) => {
  try {
    if (!req.auth)
      return unAuth()
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
    return serverErrorHandler(err)
  }
},
)

// 更新倒计时
export const PUT = auth(async (req) => {
  try {
    if (!req.auth)
      return unAuth()
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
    return serverErrorHandler(err)
  }
},
)

// 删除倒计时
export const DELETE = auth(async (req) => {
  try {
    if (!req.auth)
      return unAuth()
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
    serverErrorHandler(err)
  }
},
)
