// 定义和注册 `/words` 路由
import {
    getAllWords,
    createWord,
    updateWord,
    deleteWord,
  } from '../controllers/wordController.js'
  
  export default async function wordRoutes(fastify, options) {
    fastify.get('/words', getAllWords)        // 获取全部单词
    fastify.post('/words', createWord)        // 添加单词
    fastify.put('/words/:id', updateWord)     // ✅ 更新指定 ID
    fastify.delete('/words/:id', deleteWord)  // ✅ 删除指定 ID
  }