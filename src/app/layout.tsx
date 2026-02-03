import type { Metadata } from 'next';
import { Inter, Shrikhand } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const shrikhand = Shrikhand({ weight: '400', subsets: ['latin'], variable: '--font-retro' });

export const metadata: Metadata = {
  title: 'AlgoForge ',
  description: 'Master your interviews with AlgoForge - your ultimate platform for coding interview preparation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${shrikhand.variable}`}>{children}</body>
    </html>
  );
}
