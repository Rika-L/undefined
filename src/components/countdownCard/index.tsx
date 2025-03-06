import { useTimeAgo } from '@/hooks/useTimeAgo'
import { Card, CardContent, CardHeader } from '../ui/card'
import colorList from './color.json'

interface Props {
  timestamp: number
  index: number
  description: string
}

function CountdownCard({ timestamp, index, description }: Props) {
  const { days, hours, minutes, seconds, isFuture } = useTimeAgo(timestamp)
  const color = colorList[index]
  return (
    <Card className="break-words whitespace-pre-wrap pt-0 overflow-hidden">
      <CardHeader className="h-20 justify-center text-white text-2xl" style={{ background: `linear-gradient(135deg, ${color[0]} 0%, ${color[1]} 100%)` }}>
        <div className="flex justify-between items-center gap-6">
          <div className="font-bold">
            {description}
          </div>
          <div className="flex-none font-thin">{isFuture ? '还有' : '已经'}</div>
        </div>
      </CardHeader>
      <CardContent>
        <p>
          {days}
          {' '}
          天
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
        </p>
      </CardContent>
    </Card>
  )
}

export default CountdownCard
