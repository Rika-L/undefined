import { auth } from '@/lib/auth'

export async function isLogin() {
  const session = await auth()
  return !!session
}
