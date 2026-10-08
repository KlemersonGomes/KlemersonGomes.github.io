export type Locale = "en" | "pt";

export function getTranslator(locale: Locale) {
  return (portuguese: string, english: string) =>
    locale === "pt" ? portuguese : english;
}

export function localeHome(locale: Locale) {
  return locale === "pt" ? "/pt/" : "/";
}
