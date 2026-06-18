import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

/** 联系我们页面 (/contact)。 */
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Nimbus Tech team. Send us a message or reach us by email and phone.",
  openGraph: {
    title: "Contact Nimbus Tech",
    description: "Have a question or ready to get started? We'd love to hear from you.",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
