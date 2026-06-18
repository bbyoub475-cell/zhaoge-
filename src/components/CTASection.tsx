"use client";

/**
 * CTASection — 页面底部统一的「行动号召」区块（Call To Action）。
 * 多个页面复用，引导用户去开始使用或联系我们。文字来自语言文件。
 */
import Link from "next/link";
import Container from "./Container";
import { useTranslation } from "@/lib/i18n";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-16 text-center shadow-xl sm:px-12">
          {/* 装饰光晕 */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("home.cta.title")}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-brand-100">
            {t("home.cta.subtitle")}
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition-transform hover:scale-105"
            >
              {t("home.cta.primary")}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t("home.cta.secondary")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
