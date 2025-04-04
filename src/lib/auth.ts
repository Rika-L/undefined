import { verifyPassword } from '@/utils/password'
import NextAuth, { CredentialsSignin } from 'next-auth'
// The `JWT` interface can be found in the `next-auth/jwt` submodule
import Credentials from 'next-auth/providers/credentials'

import db from './db'
import { signInSchema } from './zod/signIn'

class InvalidLoginError extends CredentialsSignin {
  code = '用户名或密码错误' // 这里可以自定义你想要显示的错误信息
}

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    username: string
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const { username, password } = await signInSchema.parseAsync(credentials)
          // 查询用户是否存在
          const user = await db.user.findUnique({
            where: { username },
          })

          if (!user) {
            throw new Error('用户名或密码错误')
          }

          // 验证密码
          const isValid = await verifyPassword(password, user.password)

          if (!isValid) {
            throw new Error('用户名或密码错误')
          }
          // 返回用户信息（不包含密码）
          return { username }
        }
        catch {
        // catch (error) {
          // if (error instanceof ZodError) {
          //   // Return `null` to indicate that the credentials are invalid
          //   return null
          // }
          throw new InvalidLoginError()
        }
      },
    }),
  ],

  session: {
    maxAge: 60 * 60 * 24, // 24 hours
  },
})
