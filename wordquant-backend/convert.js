import * as XLSX from 'xlsx/xlsx.mjs';
import fs from 'fs';

// 绑定 Node.js 所需的 `readFile` 方法（必须手动挂载）
XLSX.set_fs(fs);

const inputFile = 'coca.xlsx';
const outputFile = 'data/words.json';

const workbook = XLSX.readFile(inputFile);  // ✅ 现在不会报错了
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const jsonData = XLSX.utils.sheet_to_json(sheet);

const formatted = jsonData.map(row => ({
  rank: Number(row.Rank),
  word: String(row.Word).trim(),      // ✅ 强制转为字符串
  pos: row.PoS,
  collins: Number(row.Collins),
  tag: row.Tag || null,
  definition: row.Definition
}));

fs.writeFileSync(outputFile, JSON.stringify(formatted, null, 2));
console.log('✅ Excel 转换完成：', outputFile);
