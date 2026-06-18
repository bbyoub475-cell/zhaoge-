"use client";

/**
 * Navbar — 顶部导航栏。
 * - 左侧：文字 Logo（自制，不使用原网站 Logo）
 * - 中间：导航链接（Home / About / Services / Solutions / Contact）
 * - 右侧：语言切换 + 行动按钮
 * - 手机端：折叠成汉堡菜单
 * 所有文字都来自语言文件，并会随当前页面高亮。
 */
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "@/lib/i18n";

export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 导航项：href 是路由，labelKey 是语言文件里的 key
  const links = [
    { href: "/", labelKey: "nav.home" },
    { href: "/about", labelKey: "nav.about" },
    { href: "/services", labelKey: "nav.services" },
    { href: "/solutions", labelKey: "nav.solutions" },
    { href: "/contact", labelKey: "nav.contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
              N
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              {t("brand.name")}
            </span>
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-brand-600"
                    : "text-slate-600 hover:text-brand-600"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          {/* 右侧：语言切换 + CTA（桌面端） */}
          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              {t("nav.cta")}
            </Link>
          </div>

          {/* 手机端：汉堡按钮 */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {/* 手机端展开的菜单 */}
      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-base font-medium ${
                  isActive(link.href)
                    ? "bg-brand-50 text-brand-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between">
              <LanguageSwitcher />
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
              >
                {t("nav.cta")}
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
