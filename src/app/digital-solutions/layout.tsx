import { Instrument_Sans } from 'next/font/google';
import type { Metadata } from 'next';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'NF Solutions | Digital Transformation Services | Cloud, AI & Data',
  description: 'We offer expert digital engineering, cloud, data, and AI solutions to help enterprises build modern platforms, enhance customer experiences, and accelerate growth.',
};

export default function DigitalSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${instrumentSans.variable} font-sans`}>
      {children}
    </div>
  );
}