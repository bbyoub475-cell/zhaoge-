import type { Metadata } from "next";
import ServicesView from "@/components/services/ServicesView";

/** 服务页面 (/services)。 */
export const metadata: Metadata = {
  title: "朝歌方法",
  description:
    "四大服务与品牌方法论：产品包装乱象管理、ZG 数码包装体系、电商包装设计、终端促销体系化。The ZhaoGe Method — four core services and brand methodology.",
  openGraph: {
    title: "朝歌方法 — 四大服务与品牌方法论",
    description: "超级传播效率，积累品牌复利，构建利润护城河。",
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
