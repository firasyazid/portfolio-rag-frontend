
const Card = () => {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            System Status
          </h2>
          <p className="text-zinc-500 text-sm mt-2 font-light">
            Real-time health monitoring of core services
          </p>
        </div>
        
        <aside className="bg-zinc-900/80 backdrop-blur-md text-white p-6 rounded-lg w-full max-w-lg font-mono border border-white/10 shadow-2xl">
          <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <p className="text-sm text-gray-400">bash</p>
          </div>
          <div className="space-y-2 text-sm md:text-base">
            <p className="text-green-400">
              <span className="text-blue-400">firas-ai</span>
              <span className="text-gray-400">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">$</span> docker-compose ps
            </p>
            <div className="grid grid-cols-3 gap-4 text-zinc-400 border-b border-white/5 pb-1 mb-1">
              <span>NAME</span>
              <span>STATUS</span>
              <span>PORT</span>
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-3 gap-4">
                <span className="text-white">firas-frontend</span>
                <span className="text-emerald-400">UP (HEALTHY)</span>
                <span className="text-zinc-500">3***</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <span className="text-white">ai-api-service</span>
                <span className="text-emerald-400">UP (HEALTHY)</span>
                <span className="text-zinc-500">8***</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <span className="text-white">vector-db</span>
                <span className="text-emerald-400">CONNECTED</span>
                <span className="text-zinc-500">6***</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <span className="text-white">knowledge-graph</span>
                <span className="text-emerald-400">SYNCED</span>
                <span className="text-zinc-500">-</span>
              </div>
            </div>
            <p className="flex items-center pt-2">
              <span className="text-blue-400">firas-ai</span>
              <span className="text-gray-400">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">$</span>
              <span className="w-2 h-5 bg-white ml-2 animate-pulse" />
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Card;
