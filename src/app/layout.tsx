import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Roboto_Mono } from "next/font/google";
import './globals.css'
import Header from "@/components/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Banner from "@/components/banner";

const font = Roboto_Mono({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: "Donal Noye's Portfolio",
  description: 'Portfolio Frontend Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-full text-black dark:bg-black dark:text-white tracking-[-0.08px] leading-6">
            <Banner />
            <Header />
            <main className="h-full dark:bg-black">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
