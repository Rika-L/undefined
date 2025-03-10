import { NextResponse } from 'next/server'

export function success<T>(data: T, code = 200, msg = 'success') {
  return NextResponse.json({ code, msg, data }, { status: 200 })
}

export function error(error: string, status = 500) {
  return NextResponse.json({ error }, { status })
}

export function unAuth() {
  return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
}

export interface baseResponse<T> {
  code: number
  msg: string
  data: T
}
