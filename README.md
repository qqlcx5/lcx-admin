# LCX Admin 🖥️

> 基于 Vue 2 + Vue CLI + Vue Router + Vuex 打造的开箱即用响应式企业后台管理系统。

[![Vue 2](https://img.shields.io/badge/Vue-2.x-brightgreen?style=flat-square&logo=vuedotjs)](https://vuejs.org/)
[![Vue CLI](https://img.shields.io/badge/Build-Vue%20CLI-blue?style=flat-square)](https://cli.vuejs.org/)
[![Jest](https://img.shields.io/badge/Test-Jest-C21325?style=flat-square&logo=jest)](https://jestjs.io/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

---

## 📖 项目简介

**LCX Admin** 是一套功能完备、开箱即用的前端通用后台管理系统框架模版。封装了动态路由权限匹配、菜单侧边栏收起、全局面包屑导航、表格分页与表单快速生成等常用业务场景。

---

## ✨ 核心特性

- 🔐 **全流程鉴权**：基于 Token 的接口拦截器与基于角色的前端动态权限路由过滤。
- 📑 **常用业务骨架**：用户管理、角色权限分配、仪表盘数据大屏、日志审计等。
- 🧪 **自动化测试**：集成 Jest 单元测试环境，保障核心业务逻辑稳健。
- 📐 **工程化规范**：ESLint + Prettier 代码风格自动校验。

---

## 🚀 快速启动

```bash
# 1. 克隆代码并安装依赖
git clone https://github.com/qqlcx5/lcx-admin.git
cd lcx-admin
yarn install

# 2. 启动本地开发服务
yarn serve

# 3. 运行单元测试
yarn test:unit

# 4. 生产打包
yarn build
```

---

## 📄 开源协议

本项目基于 [MIT 协议](LICENSE) 开源。
