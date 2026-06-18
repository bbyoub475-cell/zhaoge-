/**
 * PageHeader — 内页（About/Services/Solutions/Contact）顶部的标题横幅。
 * 接收已翻译好的 title / subtitle 字符串，保持各内页头部风格统一。
 */
import Container from "./Container";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
      {/* 背景装饰光晕 */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
      <Container className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {subtitle}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
