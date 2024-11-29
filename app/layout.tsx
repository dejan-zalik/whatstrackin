import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Providers } from '@/context/Providers';
import AuthProvider from '@/components/AuthProvider';

export const metadata: Metadata = {
  title: 'whatstrackin',
  description: "track yo' shit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="max-w-3xl m-auto">
          <Providers>
            <Navbar />
            <main>{children}</main>
          </Providers>
        </body>
      </html>
    </AuthProvider>
  );
}
