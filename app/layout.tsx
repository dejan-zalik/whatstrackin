import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Providers } from '@/context/Providers';

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
    <Providers>
      <html lang="en">
        <body className="max-w-3xl m-auto">
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </Providers>
  );
}
