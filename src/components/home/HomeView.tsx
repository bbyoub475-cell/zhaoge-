"use client";

/**
 * HomeView — 首页全部内容（客户端组件，因为要读取当前语言）。
 * 沿用「漏斗式」叙事顺序：
 *   Hero 吸引 → 优势 → 服务 → 方案 → 数据/案例 证明 → CTA 转化
 * 所有文字来自语言文件。
 */
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { useTranslation } from "@/lib/i18n";

// 语言文件里数组元素的形状
type TitleDesc = { title: string; desc: string };
type ValueLabel = { value: string; label: string };

export default function HomeView() {
  const { t } = useTranslation();

  const advantages = t("home.advantages.items") as TitleDesc[];
  const services = t("home.services.items") as TitleDesc[];
  const solutions = t("home.solutions.items") as TitleDesc[];
  const stats = t("home.stats.items") as ValueLabel[];

  // 给每个卡片配一个图标
  const advantageIcons = ["bolt", "shield", "globe", "support"];
  const serviceIcons = ["server", "database", "cog", "chart"];
  const solutionIcons = ["rocket", "cloud", "lock", "chart"];

  return (
    <>
      {/* ===== Hero 主视觉 ===== */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-brand-200/50 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-sm font-medium text-brand-700">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              {t("home.hero.badge")}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {t("home.hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {t("home.hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-brand-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
              >
                {t("home.hero.ctaPrimary")}
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600"
              >
                {t("home.hero.ctaSecondary")}
              </Link>
            </div>
          </div>
          {/* 右侧占位图 */}
          <div className="relative">
            <Placeholder label="Hero visual" className="aspect-[4/3] w-full" />
          </div>
        </Container>
      </section>

      {/* ===== 优势 ===== */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title={t("home.advantages.title")}
            subtitle={t("home.advantages.subtitle")}
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, i) => (
              <div key={item.title} className="text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 sm:mx-0">
                  <Icon name={advantageIcons[i] ?? "cloud"} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 服务预览 ===== */}
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading
            title={t("home.services.title")}
            subtitle={t("home.services.subtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon name={serviceIcons[i] ?? "cloud"} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              {t("home.services.cta")} <span aria-hidden>→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ===== 方案预览 ===== */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title={t("home.solutions.title")}
            subtitle={t("home.solutions.subtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item, i) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <Icon
                    name={solutionIcons[i] ?? "cloud"}
                    className="h-7 w-7 text-brand-600"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              {t("home.solutions.cta")} <span aria-hidden>→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ===== 数据指标 ===== */}
      <section className="bg-brand-700 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-white sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-brand-200">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 案例展示（占位 Logo 墙） ===== */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title={t("home.showcase.title")}
            subtitle={t("home.showcase.subtitle")}
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <Placeholder
                key={i}
                rounded="rounded-xl"
                className="flex aspect-[3/2] items-center justify-center"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 底部 CTA ===== */}
      <CTASection />
    </>
  );
}
