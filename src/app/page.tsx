import type { Metadata } from "next";
import HomeView from "@/components/home/HomeView";

/**
 * 首页 (/)。
 * 服务端组件：负责导出该页 SEO 元数据，再渲染客户端内容 HomeView。
 */
export const metadata: Metadata = {
  title: "Cloud infrastructure that scales with you",
  description:
    "Build, ship, and scale on a cloud that just works. Nimbus Tech delivers infrastructure, automation, and insight for modern engineering teams.",
  openGraph: {
    title: "Nimbus Tech — Cloud infrastructure that scales with you",
    description: "Build, ship, and scale on a cloud that just works.",
  },
};

export default function HomePage() {
  return <HomeView />;
}
