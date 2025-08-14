# QuantWords

一个基于 **Fastify + Prisma**（后端）和 **Next.js + TailwindCSS**（前端）的单词记忆网站。  
本项目已内置数据库连接配置，任何人下载后按步骤安装依赖即可直接运行。  

---

## 项目结构
quantwords/  
├─ wordquant-backend/ # 后端服务（Fastify + Prisma）  
│ ├─ prisma/ # Prisma schema & migrations  
│ ├─ src/ # 后端源码  
│ ├─ .env # 数据库连接配置（已包含在仓库中）  
│ └─ package.json  
├─ wordquant-frontend/ # 前端网站（Next.js + TailwindCSS）  
│ ├─ app/ # 页面目录  
│ ├─ components/ # 公共组件  
│ ├─ .env.local # 前端环境配置（已包含在仓库中）  
│ └─ package.json  
└─ README.md  


---

## 环境要求
- Node.js **v18+**（建议 LTS）
- npm **v9+**

---

## 安装与运行

```bash
# 克隆项目
git clone https://github.com/你的用户名/quantwords.git
cd quantwords

# 安装后端依赖
cd wordquant-backend
npm install

# 安装前端依赖
cd ../wordquant-frontend
npm install
```

后端 .env（在 wordquant-backend/ 下新建 .env 文件）：  
```bash
DATABASE_URL="mysql://用户名:密码@数据库地址:3306/数据库名"
```

前端 .env.local（在 wordquant-frontend/ 下新建 .env.local 文件）：  
```bash
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

```bash
# 生成 Prisma 客户端
cd ../wordquant-backend
npx prisma generate

# 启动后端（默认端口 3001）
npm run dev

# 启动前端（新开终端）
cd ../wordquant-frontend
npm run dev

打开浏览器访问： 
http://localhost:3000/words  
即可看到单词列表页面。
```
