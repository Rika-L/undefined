'use client'

import DisplayCards from '@/components/ui/display-cards'
import { useDate } from '@/hooks/useDate'
import { getAnniversaryCard } from '@/utils/getAnniversaryCard'

function Page() {
  const { data, error, isLoading } = useDate()
  if (isLoading)
    return <div>Loading...</div>
  if (error)
    return <div>Error...</div>
  if (data === undefined)
    return <div>Error...</div>

  const anniversaryCard = getAnniversaryCard(data.data.filter(item => item.type === 2))

  console.log(anniversaryCard)
  return (
    <>
      <div className="flex min-h-[calc(100vh-160px)] w-full items-center justify-center py-20">
        <div className="w-full max-w-3xl">
          <DisplayCards cards={anniversaryCard} />
        </div>
      </div>
    </>
  )
}

export default Page
