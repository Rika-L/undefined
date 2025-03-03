import type { NextRequest } from 'next/server'
import { success } from '@/lib/server'

export async function GET(request: NextRequest) {
  return success('test')
}
