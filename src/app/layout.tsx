import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * layout.tsx — 根布局，包裹所有页面。
 * - 引入字体与全局样式
 * - 用 LanguageProvider 提供中英文切换能力
 * - 固定渲染顶部导航 Navbar 与底部 Footer
 * - 设置全站默认 SEO 元数据（含 Open Graph）
 */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 站点根地址（部署到 Vercel 后可改成真实域名）
const siteUrl = "https://zhaoge-eta.vercel.app";

// 全站默认 metadata，子页面会各自覆盖 title/description
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "朝歌包装设计 ZhaoGe Packaging Design — 大logo，成就大品牌",
    template: "%s | 朝歌包装设计 ZhaoGe",
  },
  description:
    "朝歌包装设计成立于 2009 年，专注包装设计与品牌全案设计，服务 200+ 客户。Founded in 2009, ZhaoGe Packaging Design specializes in packaging and full-service brand design.",
  keywords: ["包装设计", "品牌设计", "品牌全案", "packaging design", "brand design", "ZhaoGe"],
  openGraph: {
    type: "website",
    siteName: "朝歌包装设计 ZhaoGe Packaging Design",
    title: "朝歌包装设计 ZhaoGe Packaging Design — 大logo，成就大品牌",
    description:
      "专注品牌传播效率设计，让品牌成功少走弯路。Brand communication efficiency design that helps brands succeed with fewer detours.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "朝歌包装设计 ZhaoGe Packaging Design",
    description: "大logo，成就大品牌。A bigger logo builds a bigger brand.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
