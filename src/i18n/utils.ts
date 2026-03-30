import { ui, defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as any)[key] || (ui[defaultLang] as any)[key] || key;
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

export function switchLang(currentUrl: URL, newLang: Lang): string {
  const [, , ...rest] = currentUrl.pathname.split("/");
  return `/${newLang}/${rest.join("/")}`;
}

export const supportedLangs: Lang[] = ["en", "th", "zh"];
