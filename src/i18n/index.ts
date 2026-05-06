import pt from './pt.json';
import en from './en.json';
import ja from './ja.json';

const translations = { pt, en, ja } as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof pt;

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  if (locale in translations) {
    return locale as Locale;
  }
  return 'pt';
}

export function getAlternateLocales(locale: Locale): Locale[] {
  return locales.filter(l => l !== locale);
}

export function getLocalePath(locale: Locale, path: string = '/'): string {
  return `/${locale}${path === '/' ? '' : path}`;
}

export const locales: Locale[] = ['pt', 'en', 'ja'];
export const defaultLocale: Locale = 'pt';
