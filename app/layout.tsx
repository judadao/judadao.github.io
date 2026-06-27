import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from './theme';

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
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
