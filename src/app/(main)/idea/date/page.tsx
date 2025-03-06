import Timeout from '@/components/main/timeout'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

function Page() {
  return (
    <>
      <p>
        JavaScript 中
        {' '}
        <code>Date</code>
        {' '}
        对象实例用于呈现时间中的某个时刻。
      </p>
      <p>
        从某种意义上说，
        {' '}
        <code>Date</code>
        {' '}
        对象掌控着时间的流动，记录着过去、现在和未来的每一个瞬间。它象征着时间的连续性和不可逆性，提醒我们珍惜每一个当下，因为时间一旦流逝便无法挽回。它让时间成为程序的一部分。
      </p>
      <p>比如我们认识了</p>
      <Timeout />
      <p>
        {' '}
        <code>Date</code>
        {' '}
        会以计时器为主题，它不仅仅是一个简单的数字组合，而是时间的具象化表达。
      </p>
      <p>
        <Button>
          <Link href="/date" className="flex items-center">
            View All
            <ChevronRight />
          </Link>
        </Button>
      </p>
    </>
  )
}

export default Page
