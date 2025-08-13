import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * 注册 COCA 单词分页 API 路由
 * @param {import('fastify').FastifyInstance} fastify Fastify 实例
 */
export default async function cocaRoutes(fastify) {
  /**
   * GET /api/coca
   * 分页获取 COCA 单词
   * @query {number} page 页码，默认 1
   * @query {number} limit 每页数量，默认 20
   * @returns {Object} 分页结果 { data, total, page, limit }
   */
  fastify.get('/api/coca', async (request, reply) => {
    const { page = 1, limit = 20 } = request.query;

    const words = await prisma.coca.findMany({
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy: { rank: 'asc' }
    });

    const total = await prisma.coca.count();

    return {
      data: words,
      total,
      page: Number(page),
      limit: Number(limit)
    };
  });
}
