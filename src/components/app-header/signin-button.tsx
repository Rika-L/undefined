import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'
import Link from 'next/link'
import SignOutButton from './signout-button'

async function SignInButton() {
  const isLogin = !!(await auth())
  if (isLogin)
    return <SignOutButton />
  else
    return <Button><Link href="/login">Sign In</Link></Button>
}

export default SignInButton
