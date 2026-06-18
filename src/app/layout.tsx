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
const siteUrl = "https://nimbus-tech.example.com";

// 全站默认 metadata，子页面会各自覆盖 title/description
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nimbus Tech — Cloud infrastructure that scales with you",
    template: "%s | Nimbus Tech",
  },
  description:
    "Nimbus Tech gives engineering teams the cloud infrastructure, automation, and insight to build, ship, and scale faster.",
  keywords: ["cloud", "infrastructure", "devops", "hosting", "platform"],
  openGraph: {
    type: "website",
    siteName: "Nimbus Tech",
    title: "Nimbus Tech — Cloud infrastructure that scales with you",
    description:
      "Build, ship, and scale on a cloud that just works. Infrastructure, automation, and insight for modern teams.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimbus Tech",
    description: "Cloud infrastructure that scales with your ambition.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
