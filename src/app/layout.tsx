import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aircall Podcast',
  description: 'The Aircall Podcast - The power of conversation.',
};

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-quicksand',
  display: 'swap',
  style: 'normal',
  fallback: ['sans-serif'],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
