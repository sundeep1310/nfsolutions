import { Instrument_Sans } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'NF Solutions | Global EPC Technical and Commercial Advisory',
  description: 'NF Solutions: Expert technical and commercial advisory for the global EPC market. We drive international growth for clients in Oil & Gas, Power, and Renewables.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} font-sans`}>{children}</body>
    </html>
  );
}