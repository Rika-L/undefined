import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import db from './db'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('请提供用户名和密码')
        }

        // 查询用户是否存在
        const user = await db.user.findUnique({
          where: { username: credentials.username },
        })

        if (!user) {
          throw new Error('用户名或密码错误')
        }

        // 验证密码
        const isValid = credentials.password === user.password

        if (!isValid) {
          throw new Error('用户名或密码错误')
        }

        // 返回用户信息（不包含密码）
        return {
          id: user.id.toString(),
          name: user.username,
        }
      },
    }),
  ],
} satisfies NextAuthConfig)
