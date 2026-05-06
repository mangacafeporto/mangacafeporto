import pt from './pt.json';
import en from './en.json';

const translations = { pt, en } as const;

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

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'pt' ? 'en' : 'pt';
}

export function getLocalePath(locale: Locale, path: string = '/'): string {
  return `/${locale}${path === '/' ? '' : path}`;
}

export const locales: Locale[] = ['pt', 'en'];
export const defaultLocale: Locale = 'pt';
