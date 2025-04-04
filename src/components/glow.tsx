'use client'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { Fragment } from 'react'

function Glow() {
  const { theme } = useTheme()
  if (theme !== 'dark')
    return null
  return (
    <Fragment>
      <motion.div
        className="-z-10 fixed bottom-[-30%] left-[-5%] cursor-none pointer-events-none rounded-[100%] w-6xl aspect-[1.5] from-[#7a23a1] via-[#715ebde6] to-[#bd34fe00] bg-gradient-to-br blur-[15vh]"
        animate={{
          opacity: 0.6,
        }}
        transition={{
          duration: 0,
        }}
        initial={{
          opacity: 0,
        }}
      />
      <motion.div
        className="-z-10 opacity-60 fixed bottom-[-30%] right-[-5%] cursor-none pointer-events-none rounded-[100%] w-4xl aspect-[1.5] from-[#61d9ff] to-[#0000] bg-gradient-to-b blur-[15vh]"
        animate={{
          opacity: 0.6,
        }}
        transition={{
          duration: 0,
        }}
        initial={{
          opacity: 0,
        }}
      />
    </Fragment>
  )
}

export default Glow
