import { Button } from '@/components/ui/button'
import { auth, signOut } from '@/lib/auth'
import Link from 'next/link'

async function SignInButton() {
  const isLogin = !!(await auth())
  if (isLogin) {
    return (
      <>
        <form
          action={async () => {
            'use server'
            await signOut()
          }}
        >
          <Button type="submit">Sign Out</Button>
        </form>
        <Button variant="secondary"><Link href="/manage">Manage</Link></Button>
      </>
    )
  }
  else {
    return <Button><Link href="/login">Sign In</Link></Button>
  }
}

export default SignInButton
