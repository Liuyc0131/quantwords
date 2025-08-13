'use client';

import { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function WordsPage() {
  const [words, setWords] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 20;

  useEffect(() => {
    setLoading(true);

    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/coca?page=${page}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setWords(data.data || []);
        setTotal(data.total || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ 获取单词失败:', err);
        setLoading(false); // 不清空 words，保留旧数据避免闪动
      });
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardContent className="p-4 overflow-auto min-h-[500px]">
          <h2 className="text-xl font-bold mb-4">
            COCA 单词表 - 第 {page} 页（共 {totalPages} 页）
          </h2>

          <Table className="border border-gray-200">
            <TableHeader>
              <TableRow>
              <TableHead className="w-[80px] border-r border-gray-300">Rank</TableHead>
              <TableHead className="w-[200px] border-r border-gray-300">Word</TableHead>
              <TableHead className="w-[80px] border-r border-gray-300">POS</TableHead>
              <TableHead className="w-[50px] border-r border-gray-300">Collins</TableHead>
              <TableHead className="w-[240px] border-r border-gray-300">Tag</TableHead>
              <TableHead className="min-w-[300px]">Definition</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100">
              {words.length > 0 ? (
                words.map((item) => (
                  <TableRow key={item.id || item.rank}>
                    <TableCell className="w-[80px] border-r border-gray-200">{item.rank}</TableCell>
                    <TableCell className="w-[200px] border-r border-gray-200">{item.word}</TableCell>
                    <TableCell className="w-[80px] border-r border-gray-200">{item.pos}</TableCell>
                    <TableCell className="w-[50px] border-r border-gray-200">{item.collins}</TableCell>
                    <TableCell className="w-[240px] border-r border-gray-200">{item.tag}</TableCell>
                    <TableCell className="min-w-[300px]">{item.definition}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6}>
                    {loading ? '正在加载中…' : '暂无数据'}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4 items-center">
        <Button
          disabled={page <= 1 || loading}
          onClick={() => setPage((p) => p - 1)}
        >
          上一页
        </Button>

        <span className="text-sm text-muted-foreground">
          {loading
            ? `正在加载第 ${page} 页…`
            : `当前第 ${page} 页 / 共 ${totalPages} 页`}
        </span>

        <Button
          disabled={page >= totalPages || loading}
          onClick={() => setPage((p) => p + 1)}
        >
          下一页
        </Button>
      </div>
    </div>
  );
}
