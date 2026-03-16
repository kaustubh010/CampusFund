'use client'

import Link from 'next/link'
import { MinecraftButton } from '@/components/minecraft/button'
import { MinecraftCard } from '@/components/minecraft/card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1a2818] relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }} />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 py-32 text-center relative z-10">
        <div className="inline-block mb-6 animate-bounce">
          <div className="w-20 h-20 bg-[#6cd946] border-4 border-[#3d5a3b] shadow-minecraft-lg flex items-center justify-center text-5xl">
            ⛏️
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-[#6cd946] mb-6 leading-tight drop-shadow-minecraft">
          CAMPUS CRAFT
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-[#f4d135] mb-8 tracking-wide">
          Fund Your Vision, Block by Block
        </h2>
        <p className="text-lg text-[#a8d5a8] mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate student crowdfunding platform where ideas become reality. Launch your campaign, join the community, and let's build something epic together.
        </p>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <Link href="/discover">
            <button className="px-10 py-4 bg-[#6cd946] text-[#1a2818] font-bold text-xl border-4 border-[#52af35] hover:bg-[#52af35] transition-all hover:-translate-y-1 shadow-minecraft-lg">
              Explore World
            </button>
          </Link>
          <Link href="/goals/new">
            <button className="px-10 py-4 bg-[#2d3d2b] text-[#6cd946] font-bold text-xl border-4 border-[#3d5a3b] hover:border-[#6cd946] transition-all hover:-translate-y-1 shadow-minecraft-lg">
              Start Mining
            </button>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#141d13] border-y-8 border-[#2d3d2b] py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#6cd946] mb-4">The Crafting Recipe</h2>
            <div className="h-1 w-24 bg-[#f4d135] mx-auto shadow-minecraft-sm" />
          </div>
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { icon: '💡', title: 'Gather Ideas', desc: 'Craft your campaign for events, tech, or any campus project. No idea is too small for our biome.' },
              { icon: '📢', title: 'Broadcast', desc: 'Share your vision with the campus. Build your party and gather the resources you need.' },
              { icon: '🎉', title: 'Level Up', desc: 'Hit your goal, claim your ALGO, and bring your project to life in the real world.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#2d3d2b] border-4 border-[#3d5a3b] p-8 text-center shadow-minecraft-md transition-transform hover:-translate-y-2">
                <div className="text-6xl mb-6 drop-shadow-minecraft">{icon}</div>
                <h3 className="font-bold text-2xl text-[#f4d135] mb-4">{title}</h3>
                <p className="text-[#a8d5a8] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="max-w-5xl mx-auto px-4 py-24 text-center relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Total Mined', val: '50K+ ALGO' },
            { label: 'Builders', val: '1.2K' },
            { label: 'Worlds Built', val: '120+' },
            { label: 'Success Rate', val: '94%' },
          ].map(({ label, val }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-[#6cd946] mb-1">{val}</p>
              <p className="text-xs font-bold text-[#7aa878] uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}