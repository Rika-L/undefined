import { useTimeAgo } from '@/hooks/useTimeAgo'

interface Props {
  timestamp: number
}

function CountdownCard({ timestamp }: Props) {
  const data = useTimeAgo(timestamp)
  return (<div>{JSON.stringify(data)}</div>)
}

export default CountdownCard
