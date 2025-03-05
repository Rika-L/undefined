import type { baseResponse } from '@/lib/server'
import type { Countdown } from '@prisma/client'
import useSWR from 'swr'
import fetcher from './fetcher'

function useDate() {
  return useSWR<baseResponse<Countdown[]>>('/api/date', fetcher)
}

export { useDate }
