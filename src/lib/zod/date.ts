import { z } from 'zod'

// 倒计时类型枚举
enum CountdownType {
  NORMAL = 1, // 普通倒计时
  ANNIVERSARY = 2, // 纪念日
}

// 创建和更新倒计时的基础schema
export const countdownSchema = z.object({
  title: z.string().min(1, { message: '标题不能为空' }).max(50, { message: '标题不能超过50个字符' }),
  timestamp: z.string().datetime({ message: '请输入有效的日期时间' }),
  description: z.string().min(1, { message: '描述不能为空' }).max(100, { message: '描述不能超过100个字符' }),
  type: z.number().int().min(1).max(2).default(CountdownType.NORMAL),
})

// 更新倒计时的schema
export const updateCountdownSchema = countdownSchema.extend({
  id: z.number().int().positive({ message: '无效的ID' }),
})

// 删除倒计时的schema
export const deleteCountdownSchema = z.object({
  id: z.number().int().positive({ message: '无效的ID' }),
})
