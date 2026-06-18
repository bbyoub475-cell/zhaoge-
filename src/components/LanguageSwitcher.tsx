"use client";

/**
 * LanguageSwitcher — 右上角的「中文 | English」语言切换。
 * 点击对应语言即可实时切换（无需刷新页面）。
 */
import { useTranslation, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();

  const options: { code: Locale; label: string }[] = [
    { code: "zh", label: t("lang.zh") },
    { code: "en", label: t("lang.en") },
  ];

  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5 text-sm">
      {options.map((opt) => {
        const active = locale === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1 font-medium transition-colors ${
              active
                ? "bg-brand-600 text-white"
                : "text-slate-600 hover:text-brand-600"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
