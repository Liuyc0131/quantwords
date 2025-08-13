export default function Topbar() {
  return (
    <header className="h-16 flex items-center border-b bg-white/70 backdrop-blur z-10 px-6">
      {/* 标题往右移，加较大左边距 */}
      <div className="text-3xl font-extrabold tracking-wide font-serif ml-24">
        量化扫词
      </div>
      {/* 占据弹性空间 */}
      <div className="flex-1"></div>
      {/* 登录往左缩，加右边距 */}
      <div className="mr-8">登录</div>
    </header>
  );
}
