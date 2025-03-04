'use client'

import { useTimeAgo } from '@/hooks/useTimeAgo'
import { Card } from '../ui/card'

function Timeout() {
  const { days, hours, minutes, seconds } = useTimeAgo(1739457368000)
  return (
    <div className="flex items-center justify-center">
      <Card className="indent-0 w-96 flex items-center justify-center text-center text-2xl">
        {days}
        {' '}
        日
        {' '}
        {hours}
        {' '}
        時
        {' '}
        {minutes}
        {' '}
        分
        {' '}
        {seconds}
        {' '}
        秒
      </Card>
    </div>

  )
}

export default Timeout
