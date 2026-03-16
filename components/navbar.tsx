'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useWallet } from '@/context/wallet-context'
import { WalletConnectButton } from './wallet-connect-button'

export function Navbar() {
  const pathname = usePathname()
  const { wallet, connectWallet, disconnectWallet } = useWallet()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: '/discover', label: 'Discover', icon: '⊞' },
    { href: '/goals/new', label: 'Launch', icon: '⊕' },
    { href: '/dashboard', label: 'My Campaigns', icon: '⋮' },
  ]

  return (
    <nav className="bg-[#1f3018] border-b-2 border-[#3d5a3b] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#6cd946] flex items-center justify-center text-[#1a2818] font-bold text-sm">
            🏠
          </div>
          <span className="text-xl font-bold text-[#6cd946] tracking-wide">CampusFund</span>
        </Link>

        {/* Nav Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium border border-[#3d5a3b] transition-colors ${
                isActive(item.href)
                  ? 'bg-[#6cd946] text-[#1a2818] border-[#6cd946]'
                  : 'bg-[#2d3d2b] text-[#a8d5a8] hover:bg-[#354a32]'
              }`}
            >
              <span className="mr-1">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Wallet Info */}
        <div className="text-right text-xs">
          <p className="text-[#7aa878]">Status: {wallet.isConnected ? 'Connected' : 'Disconnected'}</p>
          <WalletConnectButton />
        </div>
      </div>
    </nav>
  )
}
