// 创建并导出 Prisma 客户端实例，用于访问数据库
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()
