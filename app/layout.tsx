import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CrowdfundProvider } from '@/lib/context'
import './globals.css'
import { WalletProvider } from '@/context/wallet-context'
import { Navbar } from '@/components/navbar'


export const metadata: Metadata = {
  title: 'Campus Crowdfunding - Minecraft Edition',
  description: 'Build your campus dreams with blockchain transparency',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        <CrowdfundProvider>
          <WalletProvider>
            <Navbar/>          {children}
          </WalletProvider>
        </CrowdfundProvider>
        <Analytics />
      </body>
    </html>
  )
}
