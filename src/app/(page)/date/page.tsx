'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card } from '@/components/ui/card'
import DisplayCards from '@/components/ui/display-cards'
import { useDate } from '@/hooks/useDate'
import { getAnniversaryCard } from '@/utils/getAnniversaryCard'
import { Terminal } from 'lucide-react'

function Page() {
  const { data, error, isLoading } = useDate()
  if (isLoading)
    return <div>Loading...</div>
  if (error)
    return <div>Error...</div>
  if (data === undefined)
    return <div>Error...</div>

  const anniversaryCard = getAnniversaryCard(data.data.filter(item => item.type === 2))

  const defaultDate = data.data.filter(item => item.type === 1)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-[calc(100vh-160px)] w-full items-center justify-center py-20">
        <div className="w-full max-w-3xl">
          <DisplayCards cards={anniversaryCard} />
        </div>
      </div>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>话说回来</AlertTitle>
        <AlertDescription>
          也许每个日子都值得纪念
        </AlertDescription>
      </Alert>
      <div className="text-2xl mt-8">所有纪念日</div>
      <div className="columns-3 gap-8 space-x-8 space-y-8">
        {defaultDate.map(item => {
          return (
            <Card key={item.id} className="overflow-hidden break-inside-avoid">{JSON.stringify(item)}</Card>)
        })}
      </div>
    </div>
  )
}

export default Page
