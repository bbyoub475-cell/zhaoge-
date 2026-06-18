# 朝歌包装设计 双语官网 — 项目交接手册

> 这是给「下次还要改」准备的说明书。即使过很久、换电脑，照着这份文档也能继续维护。

## 一、这个网站是什么

朝歌包装设计（ZhaoGe Packaging Design）的**中英双语官网**。

- **线上正式地址**：https://zhaoge-eta.vercel.app
- **GitHub 代码仓库**：https://github.com/bbyoub475-cell/zhaoge-
- **本地代码目录**：`/Users/xenderzhan/nimbus-tech`（文件夹名叫 nimbus-tech，是历史原因，没改）

## 二、用到的技术

| 类别 | 用的东西 |
|---|---|
| 框架 | Next.js 16（App Router） |
| 语言 | TypeScript |
| 样式 | Tailwind CSS v4 |
| 部署 | Vercel（连了 GitHub，自动部署） |
| 版本管理 | Git + GitHub |

## 三、最常用的三件事

### 1. 本地预览（在自己电脑看效果）
打开「终端」，依次输入：
```bash
cd /Users/xenderzhan/nimbus-tech
npm run dev
```
然后浏览器打开 http://localhost:3000 。改代码会自动刷新。看完按 `Ctrl + C` 停止。

### 2. 改完上线（同步到线上网站）
```bash
cd /Users/xenderzhan/nimbus-tech
git add -A
git commit -m "这次改了什么"
git push
```
推送后 Vercel 会**自动重新部署**，1–2 分钟后线上地址就更新了。

> 注意：`git push` 用的 GitHub 命令行工具 `gh` 装在 `~/.local/bin/gh`，已登录。若提示找不到，先运行：
> ```bash
> export PATH="$HOME/.local/bin:$PATH"
> ```

### 3. 改文字内容（最常改的）
所有文字都在这两个文件里，**不要在页面里直接写文字**：
- 中文：`locales/zh.json`
- 英文：`locales/en.json`

两个文件结构必须**一一对应**（同样的 key）。改完保存即可。

## 四、各部分在哪里改

| 想改什么 | 改哪个文件 |
|---|---|
| 网站文字（中文） | `locales/zh.json` |
| 网站文字（英文） | `locales/en.json` |
| 品牌名 | 两个 json 里的 `brand.name` |
| 导航栏菜单文字 | 两个 json 里的 `nav.*` |
| 联系方式 | 两个 json 里的 `contact.info.items` |
| 主色调（红色） | `src/app/globals.css` 里的 `--color-brand-*` |
| 默认语言 | `src/lib/i18n.tsx`（当前默认中文 zh） |
| 各页面 SEO 标题/描述 | `src/app/*/page.tsx` |
| 占位图（灰块） | `src/components/Placeholder.tsx` |

## 五、目录结构速查

```
nimbus-tech/
├─ locales/                 ← 所有文案（中/英）
│  ├─ zh.json
│  └─ en.json
├─ src/
│  ├─ app/                  ← 5 个页面（每个文件夹一个页面）
│  │  ├─ page.tsx           （首页 /）
│  │  ├─ about/page.tsx     （朝歌优势 /about）
│  │  ├─ services/page.tsx  （朝歌方法 /services）
│  │  ├─ solutions/page.tsx （朝歌案例 /solutions）
│  │  ├─ contact/page.tsx   （联系朝歌 /contact）
│  │  ├─ layout.tsx         （全站外壳：导航+页脚+SEO）
│  │  └─ globals.css        （全局样式、主色）
│  ├─ components/           ← 可复用组件
│  │  ├─ Navbar.tsx / Footer.tsx / LanguageSwitcher.tsx
│  │  ├─ home/HomeView.tsx
│  │  ├─ about/AboutView.tsx
│  │  ├─ services/ServicesView.tsx
│  │  ├─ solutions/SolutionsView.tsx
│  │  └─ contact/ContactView.tsx
│  └─ lib/i18n.tsx          ← 中英文切换的核心逻辑
└─ HANDOFF.md               ← 本文档
```

## 六、目前已知的待办

1. **样式只是"神似"原站**：拿不到原站的精确 CSS，目前是一套贴合品牌设计公司的红色版式。要更接近，需要提供原站截图来对照调整。
2. **图片仍是灰色占位块**：真实图片放进 `public/` 目录后即可替换。

## 七、重要信息（来自客户站）

- 免费咨询热线：4008 927 828
- 电话：0512-68602422 / 13913154556（微信同号）
- 邮箱：ftera@qq.com
- 地址：苏州市吴中区石湖西路137号上美大厦 4F—V01
- 备案：苏ICP备12032329号-2

---

*维护提示：每次让 AI 助手继续改时，告诉它"看一下仓库里的 HANDOFF.md"，它就能快速接上。*
