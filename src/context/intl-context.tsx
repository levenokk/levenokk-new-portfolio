import { useRouter } from 'next/router';
import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

type Locales = 'en-US';

const languages = {
  'en-US': require('../locale/en_US.json'),
};

type Props = {
  children: React.ReactNode;
};

export function IntlProvider({ children }: Props) {
  const { locale = 'en', defaultLocale } = useRouter();

  const messages = languages[locale as Locales];

  return (
    <ReactIntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      {children}
    </ReactIntlProvider>
  );
}
