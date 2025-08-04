import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Revolutionary AI Marketing Tools",
  description:
    "Transform your marketing with our comprehensive AI suite. Generate content, analyze data, and optimize campaigns with cutting-edge artificial intelligence.",
  keywords: "AI marketing, content generation, data analysis, marketing automation, artificial intelligence",
  openGraph: {
    title: "ADmyBRAND AI Suite",
    description: "Revolutionary AI Marketing Tools",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
