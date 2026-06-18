"use client";

/**
 * AboutView — 关于我们页面内容。
 * 结构：简介 → 使命/愿景 → 核心价值观 → 发展历程 → 数据。
 */
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Placeholder from "@/components/Placeholder";
import CTASection from "@/components/CTASection";
import { useTranslation } from "@/lib/i18n";

type TitleDesc = { title: string; desc: string };
type ValueLabel = { value: string; label: string };
type TimelineItem = { year: string; title: string; desc: string };

export default function AboutView() {
  const { t } = useTranslation();

  const values = t("about.values.items") as TitleDesc[];
  const timeline = t("about.timeline.items") as TimelineItem[];
  const stats = t("about.stats.items") as ValueLabel[];

  return (
    <>
      <PageHeader
        title={t("about.header.title")}
        subtitle={t("about.header.subtitle")}
      />

      {/* 简介 + 配图 */}
      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              {t("about.intro.title")}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {t("about.intro.body")}
            </p>
          </div>
          <Placeholder label="Our team" className="aspect-[4/3] w-full" />
        </Container>
      </section>

      {/* 使命 / 愿景 */}
      <section className="bg-slate-50 py-20">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-semibold text-brand-600">
              {t("about.mission.title")}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              {t("about.mission.body")}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-semibold text-brand-600">
              {t("about.vision.title")}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              {t("about.vision.body")}
            </p>
          </div>
        </Container>
      </section>

      {/* 核心价值观 */}
      <section className="py-20">
        <Container>
          <SectionHeading title={t("about.values.title")} />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, i) => (
              <div key={item.title}>
                <span className="text-3xl font-bold text-brand-200">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
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

      {/* 发展历程 */}
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading title={t("about.timeline.title")} />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-2xl font-bold text-brand-600">{item.year}</p>
                <h3 className="mt-2 font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 数据 */}
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

      <CTASection />
    </>
  );
}
