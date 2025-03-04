'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function Page() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return <Skeleton className="w-full h-[50vh]" />

  return (
    <div className="indent-8 text-base *:leading-8 flex flex-col gap-4">
      <p>
        <code>Undefined</code>
        {' '}
        在编程语言
        {' '}
        <code>JavaScript</code>
        {' '}
        中表示一个未定义的值，自动赋给刚刚声明的变量，或那些没有提供实际参数的形参。
      </p>
      <p>
        换个角度看，
        {' '}
        <code>Undefined</code>
        {' '}
        类似于塔罗牌中的
        <span className="font-bold">愚者</span>
        ，即代表着一种未被定义、未被局限的状态，充满了无限的可能性。象征着一种纯粹的潜力，没有被过往的经验和既定的规则所束缚。每一次对
        {' '}
        <code>Undefined</code>
        {' '}
        的重新定义和赋值，都像是
        <span className="font-bold">愚者</span>
        在人生旅途中做出的一次次选择，这些选择将决定程序的走向和发展，这也是对
        {' '}
        <code>Undefined</code>
        {' '}
        无限可能的诠释。
      </p>
      <p>
        <code>Undefined</code>
        {' '}
        最后可以被定义为各种数据类型，
        {' '}
        <code>String</code>
        {' '}
        、
        {' '}
        <code>Number</code>
        {' '}
        、
        {' '}
        <code>Array</code>
        {' '}
        …… 我希望为这些类型赋予独特定义，即定义
        {' '}
        <code>Undefined</code>
        {' '}
        。
      </p>
      <div className="flex justify-center">
        {theme === 'dark'
          ? (
              <Image
                src="https://cdn.jsdelivr.net/gh/Rika-L/image/20250304150328828.png"
                alt="暗色流程图"
                width={850}
                height={230}
                priority
              />
            )
          : (
              <Image
                src="https://cdn.jsdelivr.net/gh/Rika-L/image/20250304150318377.png"
                alt="亮色流程图"
                width={850}
                height={230}
                priority
              />
            )}
      </div>
    </div>
  )
}

export default Page
