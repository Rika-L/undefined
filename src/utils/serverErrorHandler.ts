import { error } from '@/lib/server'
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library'
import { ZodError } from 'zod'

function serverErrorHandler(e: any) {
  if (e instanceof ZodError) {
    return error('字段校验错误')
  }
  if (e instanceof PrismaClientKnownRequestError) {
    return error('数据库错误')
  }
  if (e instanceof PrismaClientRustPanicError) {
    return error('数据库错误')
  }
  if (e instanceof PrismaClientValidationError) {
    return error('数据库错误')
  }
  if (e instanceof PrismaClientInitializationError) {
    return error('数据库错误')
  }
  if (e instanceof PrismaClientUnknownRequestError) {
    return error('数据库错误')
  }
  return error('服务器错误')
}

export { serverErrorHandler }
