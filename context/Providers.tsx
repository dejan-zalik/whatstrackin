'use client';

import { LoadingContextProvider } from '@/context/LoadingContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return <LoadingContextProvider>{children}</LoadingContextProvider>;
}
