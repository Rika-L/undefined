import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export default auth(async (req) => {
  const isLoggedIn = !!(await auth())
  const isLoginPage = req.nextUrl.pathname === '/login'
  const isManagePage = req.nextUrl.pathname.startsWith('/manage')

  if (isLoggedIn && isLoginPage) {
    // 已登录用户访问登录页面，重定向到管理页面
    return NextResponse.redirect(new URL('/manage', req.url))
  }

  if (!isLoggedIn && isManagePage) {
    // 未登录用户访问管理页面，重定向到登录页面
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
})
