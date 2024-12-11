import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Providers } from '@/context/Providers';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';

export const metadata: Metadata = {
  title: 'whatstrackin',
  description: "track yo' shit",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <AuthProvider session={session}>
      <html lang="en">
        <body className="max-w-3xl m-auto">
          <Providers>
            <Navbar />
            <main>{children}</main>
            <ToastContainer autoClose={3000} />
          </Providers>
        </body>
      </html>
    </AuthProvider>
  );
}
