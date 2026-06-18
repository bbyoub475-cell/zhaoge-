"use client";

/**
 * Footer — 全站页脚。
 * 包含：品牌简介、三组链接（产品/公司/法律）、版权与演示声明。
 * 所有文字均来自语言文件。
 */
import Link from "next/link";
import Container from "./Container";
import { useTranslation } from "@/lib/i18n";

type LinkItem = { label: string; href: string };

export default function Footer() {
  const { t } = useTranslation();

  // 从语言文件读取三组链接（它们是数组）
  const product = t("footer.product") as LinkItem[];
  const company = t("footer.company") as LinkItem[];
  const legal = t("footer.legal") as LinkItem[];

  const columns: { title: string; items: LinkItem[] }[] = [
    { title: t("footer.productTitle"), items: product },
    { title: t("footer.companyTitle"), items: company },
    { title: t("footer.legalTitle"), items: legal },
  ];

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* 品牌列 */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
                N
              </span>
              <span className="text-lg font-bold text-slate-900">
                {t("brand.name")}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              {t("footer.tagline")}
            </p>
          </div>

          {/* 链接列 */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-slate-900">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 transition-colors hover:text-brand-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}
          </p>
          <p className="text-xs">{t("footer.disclaimer")}</p>
        </div>
      </Container>
    </footer>
  );
}
