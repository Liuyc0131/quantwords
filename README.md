quantwords/  
├─ wordquant-backend/ # 后端服务（Fastify + Prisma）  
│ ├─ prisma/ # Prisma schema & migrations  
│ ├─ src/ # 后端源码  
│ └─ package.json  
├─ wordquant-frontend/ # 前端网站（Next.js）  
│ ├─ app/ # 页面目录  
│ ├─ components/ # 公共组件  
│ └─ package.json  
└─ README.md  

安装依赖  
后端  
cd wordquant-backend  
npm install  

前端  
cd ../wordquant-frontend  
npm install  

生成 Prisma 客户端  
cd wordquant-backend  
npm run db:pull   # 从数据库读取表结构  
npm run db:gen    # 生成 Prisma Client  

启动后端  
cd wordquant-backend  
npm run dev  
启动前端  
cd ../wordquant-frontend  
npm run dev  

前端会运行在 http://localhost:3000  
