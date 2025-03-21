import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import {Header} from '@/components/organizms/Header';
import {Footer} from '@/components/organizms/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Landing App",
  description: "Test App with placeholder data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased flex flex-col justify-between w-full min-h-dvh`}
      >
        <Header />
        <div className='max-w-7xl m-auto grow p-4 md:p-16'>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
