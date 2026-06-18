"use client";

/**
 * ServicesView — 服务页面内容。
 * 用卡片网格展示每项服务，含简介与若干特性标签。
 */
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { useTranslation } from "@/lib/i18n";

type ServiceItem = { title: string; desc: string; features: string[] };

export default function ServicesView() {
  const { t } = useTranslation();
  const items = t("services.items") as ServiceItem[];
  const icons = ["server", "database", "cog", "chart", "globe", "lock"];

  return (
    <>
      <PageHeader
        title={t("services.header.title")}
        subtitle={t("services.header.subtitle")}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={icons[i] ?? "cloud"} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {item.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-brand-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
