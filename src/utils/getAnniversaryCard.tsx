import type { Countdown } from '@prisma/client'
import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'
import moment from 'moment'

const baseCls = '[grid-area:stack] before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[\'\'] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0'

const translateCls = [
  '-translate-x-24 -translate-y-20 hover:-translate-y-30',
  '-translate-x-12 -translate-y-10 hover:-translate-y-20',
  'hover:-translate-y-10',
  'translate-x-12 translate-y-10 hover:translate-y-0',
  'translate-x-24 translate-y-20 hover:translate-y-10',
]

function getDate(date: Date): [number, number] {
  const now = moment().startOf('day')
  const targetDate = moment(date).startOf('day')

  // 获取目标日期在今年的日期
  const thisYearDate = moment([now.year(), targetDate.month(), targetDate.date()])

  // 计算周年数 - 修正逻辑
  // 只有当前日期已经过了或等于纪念日对应的月日时，才计算为完整的一年
  let years = now.year() - targetDate.year()
  // 如果今年的纪念日还没到，则周年数减1
  if (now.month() < targetDate.month()
    || (now.month() === targetDate.month() && now.date() < targetDate.date())) {
    years--
  }

  // 如果今年的日期已经过了，则计算到明年的日期
  if (thisYearDate.isBefore(now)) {
    thisYearDate.add(1, 'year')
  }

  // 计算天数差
  const daysDiff = thisYearDate.diff(now, 'days')

  // 如果是当天，返回0
  if (daysDiff === 0) {
    return [0, years]
  }

  return [daysDiff, years]
}

function getOrdinalSuffix(number: number) {
  const num = Math.abs(number)
  const lastTwoDigits = num % 100
  const lastDigit = num % 10

  // 处理11、12、13等特殊情况
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return 'th'
  }

  // 根据最后一位数字确定后缀
  switch (lastDigit) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

function getAnniversaryCard(date: Countdown[]) {
  const len = date.length // 长度

  return date
    .map((item) => {
      const diff = getDate(item.timestamp)
      const ordinalNumber = diff[1]
      return {
        icon: <Sparkles className="size-4 text-blue-300" />,
        iconClassName: 'text-blue-500',
        titleClassName: 'text-blue-500',
        title: item.title,
        description: item.description,
        date: diff[0],
        ordinal: ordinalNumber + getOrdinalSuffix(ordinalNumber),
      }
    })
    .sort((a, b) => b.date - a.date)
    .filter((_, index) => index >= len - 5) // 只要最后的5个
    .map((item, index) => {
      return {
        ...item,
        className: cn(index + 1 === len ? '[grid-area:stack]' : baseCls, translateCls[index],
        ),
      }
    })
}

export { getAnniversaryCard }
