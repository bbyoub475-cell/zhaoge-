import type { Metadata } from "next";
import AboutView from "@/components/about/AboutView";

/** 关于我们页面 (/about)。 */
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nimbus Tech — our mission to make world-class cloud infrastructure accessible to every team.",
  openGraph: {
    title: "About Nimbus Tech",
    description:
      "Our mission to make world-class cloud infrastructure accessible to every team.",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
