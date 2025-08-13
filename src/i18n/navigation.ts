// src/i18n/navigation.ts
import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;

export const {Link, redirect, usePathname, useRouter} = createNavigation({
  locales
});