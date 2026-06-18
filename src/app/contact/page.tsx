import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

/** 联系我们页面 (/contact)。 */
export const metadata: Metadata = {
  title: "联系朝歌",
  description:
    "免费咨询热线 4008 927 828，电话 0512-68602422，地址：苏州市吴中区石湖西路137号上美大厦。Contact ZhaoGe Packaging Design.",
  openGraph: {
    title: "联系朝歌包装设计",
    description: "扫码或致电，与朝歌沟通你的品牌与包装需求。",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
