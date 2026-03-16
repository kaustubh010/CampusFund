'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MinecraftCard } from './minecraft/card'
import { MinecraftProgressBar } from './minecraft/progress-bar'
import type { Campaign } from '@/lib/types'

interface CampaignCardProps {
  campaign: Campaign
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const progress = (campaign.deposited / campaign.target) * 100
  const daysLeft = campaign.deadline 
    ? Math.ceil((new Date(campaign.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : 0
  
  const categoryEmojis: Record<string, string> = {
    clubs: '🎭',
    campus: '🏫',
    events: '🎪',
    arts: '🎨',
    tech: '💻',
    sports: '⚽',
  }

  return (
    <Link href={`/goals/${campaign.id}`}>
      <div className="bg-[#2d3d2b] border-2 border-[#3d5a3b] p-4 hover:border-[#6cd946] transition-colors cursor-pointer h-full flex flex-col">
        <div className="relative w-full h-48 mb-4 overflow-hidden border border-[#3d5a3b] bg-[#1a2818]">
          <Image
            src={campaign.imageUrl || campaign.image || '/placeholder.svg'}
            alt={campaign.name || 'Campaign'}
            fill
            className="object-cover transition-transform hover:scale-105 duration-500"
          />
          <div className="absolute top-2 left-2 bg-[#6cd946] text-[#1a2818] px-2 py-0.5 text-xs font-bold uppercase tracking-wider">
            {campaign.category || 'General'}
          </div>
          <div className="absolute top-2 right-2 text-2xl drop-shadow-md">
            {campaign.category ? (categoryEmojis[campaign.category.toLowerCase()] || '🎯') : '🎯'}
          </div>
        </div>
        
        <div className="space-y-3 flex-1 flex flex-col">
          <div>
            <h3 className="font-bold text-sm text-[#a8d5a8]">
              {campaign.name}
            </h3>
            <p className="text-xs text-[#7aa878] line-clamp-1">
              by {campaign.creatorName || 'Anonymous'} • {campaign.category ? (campaign.category.charAt(0).toUpperCase() + campaign.category.slice(1)) : 'General'}
            </p>
          </div>
          
          <p className="text-xs text-[#8ab080] line-clamp-2 flex-1">
            {campaign.description}
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-[#1a2818] h-6 border border-[#3d5a3b]">
            <div 
              className="bg-[#f4d135] h-full flex items-center justify-center text-[#1a2818] font-bold text-xs"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              {progress > 10 && `${Math.round(progress)}%`}
            </div>
          </div>

          <div className="pt-2 grid grid-cols-3 gap-2 text-xs border-t border-[#3d5a3b]">
            <div>
              <p className="text-[#7aa878]">Raised</p>
              <p className="font-bold text-[#6cd946]">{campaign.deposited.toLocaleString()} ALGO</p>
            </div>
            <div className="text-center">
              <p className="text-[#7aa878]">{(campaign as any).deposits?.length || 0} Backers</p>
              <p className="font-bold text-[#f4d135]">{Math.round(progress)}% funded</p>
            </div>
            <div className="text-right">
              <p className="text-[#7aa878]">{daysLeft > 0 ? `${daysLeft} days` : 'Ended'} left</p>
              <p className="font-bold text-[#f4d135]">{campaign.target.toLocaleString()} ALGO</p>
            </div>
          </div>

          {/* Transaction Log */}
          {(campaign as any).deposits && (campaign as any).deposits.length > 0 && (
            <button className="text-xs text-[#6cd946] hover:text-[#f4d135] mt-2 flex items-center gap-1">
              ▸ Transaction Log ({(campaign as any).deposits.length})
            </button>
          )}
        </div>
      </div>
    </Link>
  )
}
