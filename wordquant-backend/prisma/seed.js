// prisma/seed.js
import { PrismaClient } from '@prisma/client';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', 'data', 'words.json');
const raw = await readFile(filePath, 'utf-8');
const words = JSON.parse(raw);

console.log(`📦 共读取到 ${words.length} 条记录`);

let success = 0;
let failed = 0;

for (const word of words) {
  try {
    await prisma.coca.create({ data: word });
    success++;
    if (success % 1000 === 0) console.log(`✅ 已插入 ${success} 条...`);
  } catch (err) {
    console.error(`❌ 插入失败：${word.word}`, err.message);
    failed++;
  }
}

console.log(`🎉 插入完成：成功 ${success} 条，失败 ${failed} 条`);
await prisma.$disconnect();
