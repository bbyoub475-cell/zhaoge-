import type { Metadata } from "next";
import AboutView from "@/components/about/AboutView";

/** 关于我们页面 (/about)。 */
export const metadata: Metadata = {
  title: "朝歌优势",
  description:
    "朝歌包装设计成立于 2009 年，专注包装与品牌全案设计，制造品牌稀缺感。About ZhaoGe Packaging Design — creating brand scarcity since 2009.",
  openGraph: {
    title: "朝歌优势 — 关于朝歌包装设计",
    description: "制造品牌稀缺感，为品牌保护利润空间。",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
