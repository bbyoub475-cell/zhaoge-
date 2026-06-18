import type { Metadata } from "next";
import ServicesView from "@/components/services/ServicesView";

/** 服务页面 (/services)。 */
export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Nimbus Tech services: cloud hosting, managed databases, DevOps automation, observability, edge delivery, and identity.",
  openGraph: {
    title: "Nimbus Tech Services",
    description:
      "A full-stack platform with everything you need to build, run, and scale.",
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
