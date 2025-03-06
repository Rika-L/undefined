'use client'

import CountdownCard from '@/components/countdownCard'
import { useDate } from '@/hooks/useDate'
import generateRandomGradient from '@/utils/generateRandomGradient'
import { motion } from 'motion/react'

function Page() {
  const { data, error, isLoading } = useDate()
  if (isLoading)
    return <div>Loading...</div>
  if (error)
    return <div>Error...</div>
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {data?.data.map(i => {
        const gradient = generateRandomGradient()
        return (
          <motion.div
            key={i.id}
            transition={{ delay: 0.3, duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-lg p-6 shadow-lg text-white"
            style={{
              backgroundImage: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
            }}
          >
            <h2 className="text-xl font-semibold mb-2">
              {i.description}
            </h2>
            <p className="text-gray-200">
              <CountdownCard timestamp={i.timestamp.valueOf()} />
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}

export default Page
