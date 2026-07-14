<p align="center">
  <img src="public/brand/eidos-mark.svg" width="104" alt="Eidos Logo" />
</p>

<h1 align="center">Eidos 官网</h1>

<p align="center">
  Eidos 编程语言的中英文公共入口。
</p>

<p align="center">
  <a href="README.md">English</a> ·
  <a href="https://rdququ.top/eidos-website/zh-CN/">官网</a> ·
  <a href="https://github.com/dlqw/Eidosc">编译器</a> ·
  <a href="https://github.com/dlqw/eidos-tutorial">教程</a>
</p>

## 项目介绍

本仓库包含 Eidos 编程语言官网及其公共品牌资产。网站集中介绍语言、
编译器流水线、第一方工具链、学习资源、安装路径、项目成熟度和参与方式。
英文与简体中文使用可以直接访问和分享的独立页面。

网站保持静态部署：React 只负责主题选择、支持键盘操作的代码标签页、
移动端导航和复制反馈等必要交互，Vite 负责生成可部署到 GitHub Pages 的产物。

## 文件结构

```text
.
├── public/
│   ├── brand/              # SVG 源文件与生成的 PNG 品牌资产
│   ├── site.webmanifest    # 可安装网站元数据
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── generate-brand-assets.mjs
├── src/
│   ├── components/         # 无障碍交互组件
│   ├── test/               # 测试公共配置
│   ├── App.tsx             # 页面结构
│   ├── content.ts          # 英文和简体中文内容
│   ├── main.tsx            # 浏览器入口
│   └── styles.css          # 响应式品牌样式与布局
├── zh-CN/index.html        # 简体中文页面元数据与入口
├── index.html              # 英文页面元数据与入口
├── 404.html                # GitHub Pages 回退页
└── BRAND.md                # Logo 公共使用指南
```

## 本地开发

### 环境要求

- Node.js 22.12 或更高版本；
- npm 10 或更高版本。

### 启动开发服务器

```bash
npm install
npm run brand
npm run dev
```

Vite 会输出本地地址。英文页面位于 `/`，简体中文页面位于 `/zh-CN/`。

### 验证改动

```bash
npm run brand
npm run check
```

`npm run check` 会依次执行代码检查、TypeScript 检查、交互与无障碍测试，
并完成生产构建。生成的品牌 PNG 会提交到仓库，使网站元数据和社交分享预览
不依赖 SVG 渲染器。

## 部署

Pages 工作流从 `main` 构建网站，使用
`VITE_BASE_PATH=/eidos-website/` 生成静态 `dist/` 目录，再通过 GitHub Pages
完成部署。Pull request 会执行相同的质量门禁，但不会发布网站。

如需部署到其他基础路径，请在构建前设置 `VITE_BASE_PATH`：

```bash
VITE_BASE_PATH=/your-base/ npm run build
```

## 参与贡献

欢迎提交范围明确的内容、无障碍体验、响应式布局、测试和公共品牌资产改进。
提交 pull request 前请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。语言和编译器
本身的修改应提交到 [Eidosc 仓库](https://github.com/dlqw/Eidosc)。

安全问题请按照 [SECURITY.md](SECURITY.md) 报告。

## 许可证

网站源码和品牌资产使用 [MIT License](LICENSE) 开源。
