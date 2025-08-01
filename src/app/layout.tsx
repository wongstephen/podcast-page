import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aircall Podcast',
  description: 'The Aircall Podcast - The power of conversation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
