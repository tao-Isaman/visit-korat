import type { Lang } from "./ui";

/**
 * Extract slug from content collection id.
 * e.g. "en/phimai-historical-park" -> "phimai-historical-park"
 */
export function getSlug(id: string): string {
  return id.replace(/^(en|th|zh)\//, "");
}

/**
 * Filter collection entries by language.
 */
export function filterByLang<T extends { data: { lang: string } }>(
  entries: T[],
  lang: Lang
): T[] {
  return entries.filter((e) => e.data.lang === lang);
}
