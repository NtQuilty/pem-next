'use client';

import { ReactNode } from 'react';
import { OrderFormProvider } from '../contexts/OrderFormContext';
import { OrderFormWrapper } from '../ui/OrderFormWrapper';
import { CookieConsent } from '../ui/CookieConsent/CookieConsent';
import { ScrollToTop } from '../ui/ScrollToTop/ScrollToTop';

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <OrderFormProvider>
      {children}
      <OrderFormWrapper />
      <CookieConsent />
      <ScrollToTop />
    </OrderFormProvider>
  );
}
