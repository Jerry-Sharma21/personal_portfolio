import React from 'react';
import { Poppins } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeContextProvider from '@/context/ThemeContext';
import ThemeSwitch from '@/components/ThemeSwitch';
import { ActiveSectionContextProvider } from '@/context/ActiveSectionContext';

import './globals.css';

const inter = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Abhijeet | Personal Portfolio',
  description:
    'Abhijeet is a MERN-stack developer with 2.5+ years of experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`
          ${inter.className} relative bg-gray-50 text-gray-950
          pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90
        `}
      >
        <div
          className={`
            absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem]
            w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]
            dark:bg-[#946263]
          `}
        ></div>
        <div
          className={`
            absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem]
            rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]
            lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]
          `}
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
