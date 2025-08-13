"use client";

import {
  Library,
  ScanText,
  BrainCog,
  BarChartBig,
  UserCircle2
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { icon: <Library className="w-5 h-5" />, label: "单词表", href: "/words" },
  { icon: <ScanText className="w-5 h-5" />, label: "扫词", href: "/review" },
  { icon: <BrainCog className="w-5 h-5" />, label: "记忆", href: "/memory" },
  { icon: <BarChartBig className="w-5 h-5" />, label: "统计", href: "/stats" },
  { icon: <UserCircle2 className="w-5 h-5" />, label: "账户", href: "/account" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col min-h-screen">
      {/* Logo 区域，留白大一些更正式 */}
      <div className="flex items-center justify-center py-8 border-b border-gray-200">
        <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-lg shadow-sm" />
      </div>
      <nav className="flex-1 pt-6">
        <ul className="list-none p-0 m-0 space-y-2">
          {menu.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-lg transition
                  font-medium
                  ${
                    pathname.startsWith(item.href)
                      ? "bg-indigo-50 text-indigo-700 shadow-sm"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
                style={{
                  // 让选中项更突出
                  boxShadow: pathname.startsWith(item.href)
                    ? "0 2px 8px 0 rgba(99, 102, 241, 0.05)"
                    : undefined,
                }}
              >
                {item.icon}
                <span className="tracking-wide">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
