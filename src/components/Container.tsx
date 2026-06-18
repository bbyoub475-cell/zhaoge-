/**
 * Container — 统一页面左右留白与最大宽度的容器。
 * 全站每个区块都套上它，保证内容在大屏上居中、在小屏上有边距（响应式）。
 */
import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
