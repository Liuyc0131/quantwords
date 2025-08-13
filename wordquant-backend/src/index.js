// Fastify 主程序入口
import Fastify from 'fastify'
import cors from '@fastify/cors'
import wordRoutes from './routes/word.js'
import cocaRoutes from './routes/coca.js';
import dotenv from 'dotenv'

// 加载 .env 配置
dotenv.config()

const fastify = Fastify({ logger: true })

// 注册 CORS 插件（前端 fetch 时需要）
await fastify.register(cors, {
  origin: '*',
})

// 注册路由模块
await fastify.register(wordRoutes)
await fastify.register(cocaRoutes);

// 打印所有已注册的路由
console.log('\n📑 Registered Routes:')
console.log(fastify.printRoutes())

// 启动服务器
try {
  await fastify.listen({ port: 3001, host: '0.0.0.0' })
  console.log('🚀 Server ready at http://localhost:3000')
} catch (err) {
  fastify.log.error(err)
  process.exit(1);
}