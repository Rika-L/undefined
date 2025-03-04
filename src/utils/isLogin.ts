import { auth } from '@/lib/auth'
import { useSession } from 'next-auth/react'

export async function isLogin() {
  const session = await auth()
  return !!session
}

export function isLogin_Client() {
  const { data: session } = useSession()
  return !!session
}
