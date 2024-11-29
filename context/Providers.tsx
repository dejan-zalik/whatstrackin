'use client';

import { LoadingContextProvider } from '@/context/LoadingContext';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LoadingContextProvider>{children}</LoadingContextProvider>
    </SessionProvider>
  );
}
