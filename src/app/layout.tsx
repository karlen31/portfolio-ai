import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Karl Eñano - Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
