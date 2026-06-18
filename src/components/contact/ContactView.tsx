"use client";

/**
 * ContactView — 联系我们页面内容。
 * 左侧：演示用联系表单（提交后只显示成功提示，不会真的发送）。
 * 右侧：其他联系方式 + 地图占位。
 */
import { useState } from "react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import { useTranslation } from "@/lib/i18n";

type InfoItem = { label: string; value: string };

export default function ContactView() {
  const { t } = useTranslation();
  const info = t("contact.info.items") as InfoItem[];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 阻止真实提交，这是演示表单
    setSubmitted(true);
  };

  const fieldClass =
    "mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200";

  return (
    <>
      <PageHeader
        title={t("contact.header.title")}
        subtitle={t("contact.header.subtitle")}
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          {/* 表单 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t("contact.form.title")}
            </h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("contact.form.namePlaceholder")}
                  className={fieldClass}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t("contact.form.emailPlaceholder")}
                  className={fieldClass}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  {t("contact.form.company")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.form.companyPlaceholder")}
                  className={fieldClass}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  {t("contact.form.message")}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={t("contact.form.messagePlaceholder")}
                  className={fieldClass}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                {t("contact.form.submit")}
              </button>
              {submitted ? (
                <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                  {t("contact.form.success")}
                </p>
              ) : null}
            </form>
          </div>

          {/* 联系信息 + 地图占位 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t("contact.info.title")}
            </h2>
            <dl className="mt-6 space-y-5">
              {info.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm font-medium text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-lg text-slate-900">{item.value}</dd>
                </div>
              ))}
            </dl>
            <Placeholder
              label="Map"
              className="mt-8 aspect-[16/9] w-full"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
