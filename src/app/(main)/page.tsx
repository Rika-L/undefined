import SignOutButton from '@/components/signout-button'
import { auth } from '@/lib/auth'

async function Page() {
  const session = await auth()
  return (
    <div className="indent-8 text-xl">
      {JSON.stringify(session)}
      <SignOutButton />
      <p>
        <code>Undefined</code>
        {' '}
        在编程语言
        <code>JavaScript</code>
        {' '}
        中表示一个未定义的值，自动赋给刚刚声明的变量，或那些没有提供实际参数的形参。
      </p>
    </div>
  )
}

export default Page
