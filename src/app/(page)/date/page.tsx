'use client'

import CountdownCard from '@/components/countdownCard'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useDate } from '@/hooks/useDate'
import { Terminal } from 'lucide-react'

function Page() {
  const { data, error, isLoading } = useDate()
  if (isLoading)
    return <div>Loading...</div>
  if (error)
    return <div>Error...</div>
  return (
    <>
      <div className="border-grid">
        <Alert className="w-fit">
          <Terminal className="h-4 w-4" />
          <AlertTitle>這趟旅行若算開心 亦是無負這一生</AlertTitle>
          <AlertDescription>
            《落花流水》
          </AlertDescription>
        </Alert>
      </div>
      <div className="border-grid border-b" />
      <div className="h-64 flex items-center">
        占位, 写按年算的生日之类的
      </div>
      <div className="border-grid border-b" />
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 w-[400px]">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="future">Future</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {data?.data.filter(item => item.type === 1).map(({ timestamp, id, description }, index) => {
              return (
                <CountdownCard timestamp={timestamp.valueOf()} key={id} index={index} description={description} />
              )
            })}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {data?.data.filter(item => item.type === 1).map(({ timestamp, id, description }, index) => {
              return (
                <CountdownCard timestamp={timestamp.valueOf()} key={id} index={index} description={description} />
              )
            })}
          </div>
        </TabsContent>
        <TabsContent value="future">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {data?.data.filter(item => item.type === 1).map(({ timestamp, id, description }, index) => {
              return (
                <CountdownCard timestamp={timestamp.valueOf()} key={id} index={index} description={description} />
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </>

  )
}

export default Page
