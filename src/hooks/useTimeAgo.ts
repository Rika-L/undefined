import moment from 'moment'
import { useEffect, useState } from 'react'

interface TimeAgo {
  days: number
  hours: number
  minutes: number
  seconds: number
  isFuture: boolean
}

export function useTimeAgo(timestamp: number): TimeAgo {
  const [timeAgo, setTimeAgo] = useState<TimeAgo>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFuture: false,
  })

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = moment()
      const then = moment(timestamp)
      const isFuture = then.isAfter(now)
      const duration = moment.duration(Math.abs(now.diff(then)))

      setTimeAgo({
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
        isFuture,
      })
    }

    calculateTimeAgo()
    const timer = setInterval(calculateTimeAgo, 1000)

    return () => clearInterval(timer)
  }, [timestamp])

  return timeAgo
}
