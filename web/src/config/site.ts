import { getTranslations } from 'next-intl/server';

export type SiteConfig = typeof siteConfig;

export const basePath = 'https://personalidad.estudiemas.com';

export const supportEmail = 'info@estudiemas.com';

export type Language = {
  code: string;
  name: string;
  countryCode?: string;
  map?: string[];
};

export const languages: Language[] = [
  { code: 'en', name: 'English', countryCode: 'us', map: ['en-GB'] },
  { code: 'es', name: 'Spanish', countryCode: 'es', map: ['es-ES', 'es-US', 'es-MX', 'ca'] },
  { code: 'pt', name: 'Portuguese', countryCode: 'pt', map: ['pt-BR', 'pt-PT'] },
];

export const locales = languages.map((lang) => lang.code) as string[];

export const siteConfig = {
  name: 'Test de Personalidad — EstudieMás',
  creator: 'EstudieMás',
  description:
    'Conócete mejor con un test de personalidad gratuito y científico.',
  navItems: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'result',
      href: '/result'
    },
    {
      label: 'compare',
      href: '/compare'
    }
  ],
  navMenuItems: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'see_results',
      href: '/result'
    },
    {
      label: 'compare_with',
      href: '/compare'
    },
    {
      label: 'privacy',
      href: '/privacy'
    }
  ],
  footerLinks: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'privacy',
      href: '/privacy'
    }
  ],
    links: {
  linkedin: 'https://www.linkedin.com/company/fundaestudiemas/',
  facebook: 'https://www.facebook.com/fundaestudiemas/',
  instagram: 'https://www.instagram.com/estudiemas/',
  tiktok: 'https://www.tiktok.com/@estudiemas'
}
};

export const getNavItems = async ({
  locale,
  linkType
}: {
  locale: string;
  linkType: 'navItems' | 'navMenuItems' | 'footerLinks';
}) => {
  const t = await getTranslations({ locale, namespace: 'toolbar' });
  return siteConfig[linkType].map((link) => ({
    label: t(`${link.label}`),
    href: link.href
  }));
};
