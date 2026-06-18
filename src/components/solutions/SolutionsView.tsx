"use client";

/**
 * SolutionsView — 解决方案页面内容。
 * 用左右交替的「图文行」展示每个行业方案，含要点列表。
 */
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import CTASection from "@/components/CTASection";
import { useTranslation } from "@/lib/i18n";

type SolutionItem = { title: string; desc: string; points: string[] };

export default function SolutionsView() {
  const { t } = useTranslation();
  const items = t("solutions.items") as SolutionItem[];

  return (
    <>
      <PageHeader
        title={t("solutions.header.title")}
        subtitle={t("solutions.header.subtitle")}
      />

      <section className="py-20">
        <Container className="space-y-20">
          {items.map((item, i) => {
            const reverse = i % 2 === 1; // 奇数行左右交换，形成交替布局
            return (
              <div
                key={item.title}
                className="grid items-center gap-10 lg:grid-cols-2"
              >
                {/* 文字 */}
                <div className={reverse ? "lg:order-2" : ""}>
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                    0{i + 1}
                  </span>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {item.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-3 text-slate-700"
                      >
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                          <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* 占位图 */}
                <div className={reverse ? "lg:order-1" : ""}>
                  <Placeholder
                    label={item.title}
                    className="aspect-[4/3] w-full"
                  />
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
