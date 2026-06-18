"use client";

/**
 * i18n.tsx — 国际化（中英文切换）的核心。
 *
 * 思路：
 * 1. 把 zh.json / en.json 两个字典读进来。
 * 2. 用 React Context 在全站共享「当前语言」和「切换语言」的能力。
 * 3. 提供一个 useTranslation() 钩子，组件里用 t("home.hero.title") 即可取到对应语言的文字。
 * 4. 选择会存进 localStorage，刷新后仍然记得。
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import en from "../../locales/en.json";
import zh from "../../locales/zh.json";

// 支持的语言种类
export type Locale = "en" | "zh";

// 两本字典放在一起，按语言取用
const dictionaries: Record<Locale, unknown> = { en, zh };

// Context 里要共享的东西
type I18nContextValue = {
  locale: Locale; // 当前语言
  setLocale: (locale: Locale) => void; // 直接设定语言
  toggle: () => void; // 在中/英之间切换
  // t = translate，传入像 "home.hero.title" 这样的路径，返回对应文字（或数组/对象）
  t: (key: string) => any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

const I18nContext = createContext<I18nContextValue | null>(null);

// 根据 "a.b.c" 这样的路径，从字典对象里一层层取值
function resolve(dict: unknown, key: string): unknown {
  return key.split(".").reduce<unknown>((current, part) => {
    if (current && typeof current === "object") {
      return (current as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);
}

/**
 * LanguageProvider — 把语言能力提供给被它包住的所有组件。
 * 我们会在根布局 layout.tsx 里用它包住整个网站。
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  // 默认中文（主受众为中文用户，可一键切换英文）
  const [locale, setLocaleState] = useState<Locale>("zh");

  // 首次加载后，读取上次保存的语言选择
  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved === "en" || saved === "zh") {
      setLocaleState(saved);
    }
  }, []);

  // 语言变化时，更新 <html lang="..."> 以利于 SEO 和无障碍
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("locale", next);
  };

  const toggle = () => setLocale(locale === "en" ? "zh" : "en");

  const t = (key: string) => {
    const value = resolve(dictionaries[locale], key);
    // 找不到就把 key 原样返回，方便排查漏掉的文案
    return value ?? key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, toggle, t }}>
      {children}
    </I18nContext.Provider>
  );
}

/** 在任意客户端组件里调用，拿到 t / locale / toggle */
export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useTranslation 必须在 <LanguageProvider> 内部使用");
  }
  return ctx;
}
