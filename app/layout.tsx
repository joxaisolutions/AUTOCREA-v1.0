import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AUTOCREA - De Idea a la Materialización',
  description: 'Transforma ideas en aplicaciones web completas con JoxCoder v1. Desarrollo autónomo, código limpio, deploy instantáneo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="es" className="dark">
        <body className={`${inter.className} bg-background text-white antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
