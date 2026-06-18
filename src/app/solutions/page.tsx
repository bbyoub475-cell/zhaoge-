import type { Metadata } from "next";
import SolutionsView from "@/components/solutions/SolutionsView";

/** 解决方案页面 (/solutions)。 */
export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Purpose-built solutions for startups, e-commerce, fintech, and AI & data teams — all on infrastructure that scales.",
  openGraph: {
    title: "Nimbus Tech Solutions",
    description: "Purpose-built solutions for the industries shaping tomorrow.",
  },
};

export default function SolutionsPage() {
  return <SolutionsView />;
}
