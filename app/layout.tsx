import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harry Ju',
  description: 'Personal website of Harry Ju, Embedded Software Engineer.',
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
