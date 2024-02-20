import type { Metadata } from 'next'
import { Roboto_Mono } from "next/font/google";
import './globals.css'
import Header from "@/components/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Banner from "@/components/banner";

const font = Roboto_Mono({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: "Donal Noye",
  description: 'Frontend Developer Portfolio',
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
          <Banner />
          <Header />
          <main className="py-32">
            <div className="max-w-[794px]	md:mx-auto">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
