import PriceCard from "@/components/PriceCard"
import Chart from "@/components/Chart"

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 max-w-7xl mx-auto flex flex-col gap-10">
      
      {/* HEADER SECTION */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#00f0ff]/30 pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00ff66] uppercase tracking-tighter">
            The Final Trade
          </h1>
          <p className="text-[#ff0055] font-semibold tracking-widest mt-1 text-sm md:text-base">
            All Glory To God // Intel Matrix
          </p>
        </div>
        
        <nav className="flex gap-4 sm:gap-8 backdrop-blur p-4 rounded-xl glass-panel">
          <span className="text-white/80 hover:text-[#00f0ff] cursor-pointer font-bold tracking-widest uppercase transition-colors">Markets</span>
          <span className="text-white/80 hover:text-[#00ff66] cursor-pointer font-bold tracking-widest uppercase transition-colors">Futures</span>
          <span className="text-white/80 hover:text-[#ff0055] cursor-pointer font-bold tracking-widest uppercase transition-colors">News</span>
        </nav>
      </header>

      {/* LIVE PRICES GRID */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <PriceCard coin="bitcoin" />
        <PriceCard coin="ethereum" />
        <PriceCard coin="solana" />
        <PriceCard coin="binancecoin" />
        <PriceCard coin="terra-luna" />
        <PriceCard coin="terrausd" />
      </section>

      {/* CHART & INTEL SECTION */}
      <section className="grid md:grid-cols-3 gap-6">
        
        {/* CHART SPANNING 2 COLUMNS */}
        <div className="md:col-span-2">
          <Chart />
        </div>

        {/* ALERTS & NEWS SPANNING 1 COLUMN */}
        <div className="flex flex-col gap-6">
          <div className="glass-panel p-6 h-full flex flex-col gap-4">
            <h2 className="text-xl font-bold tracking-widest text-[#00ff66] uppercase border-b border-white/10 pb-2">
              🚨 Live Intel Feed
            </h2>
            
            <div className="flex flex-col gap-3 font-mono text-xs sm:text-sm">
              <div className="bg-black/40 p-3 rounded border-l-2 border-[#00f0ff]">
                <span className="text-white/50 block text-[10px] mb-1">CRYPTO</span>
                BTC Whale Transferred 1,000 BTC. Market impact low.
              </div>
              <div className="bg-black/40 p-3 rounded border-l-2 border-[#ff0055]">
                <span className="text-white/50 block text-[10px] mb-1">GEOPOLITICS</span>
                Energy crisis accelerates in Europe.
              </div>
              <div className="bg-black/40 p-3 rounded border-l-2 border-[#00ff66]">
                <span className="text-white/50 block text-[10px] mb-1">SYSTEM</span>
                APScheduler synced 42 sources. DB updated.
              </div>
            </div>
            
            <button className="mt-auto bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/50 py-3 rounded-md font-bold transition-all uppercase tracking-widest text-sm">
              View All intel
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}
