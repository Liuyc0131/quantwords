// 全局样式
import './globals.css'

// 侧边栏和顶栏组件
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

// 网站标题和描述（metadata，用于 SEO 和浏览器标签栏标题）
export const metadata = {
  title: "量化扫词",
  description: "一个高效的单词量化记忆网站"
};

// 根布局组件，负责网站的基本结构和全局样式
export default function RootLayout({ children }) {
  console.log("layout loaded"); // 调试用：每次布局加载时在控制台输出

  return (
    <html lang="zh-CN">
      <body className="bg-muted text-base">
        {/* 页面主结构：左侧菜单栏+右侧内容区 */}
        <div className="flex h-screen">
          {/* 左侧菜单栏 */}
          <Sidebar />
          {/* 右侧区域：顶栏+内容 */}
          <div className="flex flex-col flex-1 min-w-0">
            {/* 顶部导航栏 */}
            <Topbar />
            {/* 主内容区，动态渲染各页面内容 */}
            <main className="flex-1 overflow-auto p-6 bg-background">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
