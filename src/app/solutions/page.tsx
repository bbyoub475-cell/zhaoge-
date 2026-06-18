import type { Metadata } from "next";
import SolutionsView from "@/components/solutions/SolutionsView";

/** 解决方案页面 (/solutions)。 */
export const metadata: Metadata = {
  title: "朝歌案例",
  description:
    "服务领域涵盖食品饮料、日化快消、电商品牌、终端零售等大部分行业。ZhaoGe cases across food & beverage, FMCG, e-commerce, and retail.",
  openGraph: {
    title: "朝歌案例 — 服务领域",
    description: "设计涵盖大部分行业，拥有服务行业领先企业的经验。",
  },
};

export default function SolutionsPage() {
  return <SolutionsView />;
}
