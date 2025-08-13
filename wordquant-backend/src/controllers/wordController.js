// 控制器：处理与单词相关的业务逻辑
import { prisma } from '../utils/prisma.js'

// ✅  获取全部单词列表
export async function getAllWords(request, reply) {
  try {
    const words = await prisma.coca.findMany()
    reply.send(words)
  } catch (error) {
    reply.status(500).send({ error: '获取单词失败', detail: error.message })
  }
}

// ✅ 添加一个新单词
export async function createWord(request, reply) {
    const { rank, word, pos, collins, tag, definition } = request.body
  
    if (!rank || !word) {
      return reply.status(400).send({ error: 'rank 和 word 是必填字段' })
    }
  
    try {
      const newWord = await prisma.coca.create({
        data: {
          rank,
          word,
          pos,
          collins,
          tag,
          definition,
        },
      })
  
      reply.status(201).send(newWord)
    } catch (error) {
      reply.status(500).send({ error: '添加失败', detail: error.message })
    }
}

// ✅ 更新指定 ID 的单词
export async function updateWord(request, reply) {
    const { id } = request.params
    const { rank, word, pos, collins, tag, definition } = request.body
  
    try {
      const updated = await prisma.coca.update({
        where: { id: parseInt(id) },
        data: { rank, word, pos, collins, tag, definition },
      })
      reply.send(updated)
    } catch (error) {
      reply.status(500).send({ error: '更新失败', detail: error.message })
    }
  }
  
  // ✅ 删除指定 ID 的单词
  export async function deleteWord(request, reply) {
    const { id } = request.params
  
    try {
      await prisma.coca.delete({
        where: { id: parseInt(id) },
      })
      reply.send({ message: `已删除 ID 为 ${id} 的单词` })
    } catch (error) {
      reply.status(500).send({ error: '删除失败', detail: error.message })
    }
  }