import type { Metadata } from "next";
import HomeView from "@/components/home/HomeView";

/**
 * 首页 (/)。
 * 服务端组件：负责导出该页 SEO 元数据，再渲染客户端内容 HomeView。
 */
export const metadata: Metadata = {
  title: "大logo，成就大品牌",
  description:
    "朝歌包装设计专注品牌传播效率设计，提供产品包装、电商包装、品牌全案设计。ZhaoGe Packaging Design — brand communication efficiency design.",
  openGraph: {
    title: "朝歌包装设计 — 大logo，成就大品牌",
    description: "专注品牌传播效率设计，让品牌成功少走弯路。",
  },
};

export default function HomePage() {
  return <HomeView />;
}
