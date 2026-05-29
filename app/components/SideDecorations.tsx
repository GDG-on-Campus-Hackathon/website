export default function SideDecorations() {
  const dots = (count: number) =>
    Array.from({ length: count }).map((_, i) => (
      <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#8FCFC3]" />
    ));

  return (
    <>
      {/* LEFT */}
      <div className="pointer-events-none fixed left-0 top-24 z-0 hidden h-[80vh] w-[320px] overflow-hidden xl:block 2xl:w-[460px]">
        {/* top dots */}
        <div className="absolute left-4 top-3 grid grid-cols-7 gap-3 opacity-45">
          {dots(49)}
        </div>

        {/* plus */}
        <div className="absolute left-32 top-16 text-6xl font-light text-[#8FCFC3]/45">
          +
        </div>

        <div className="absolute left-72 top-40 text-5xl font-light text-[#8FCFC3]/35">
          +
        </div>

        {/* brackets */}
        <div className="absolute left-20 top-40 text-[128px] font-bold text-[#62C28A]/25">
          {"{ }"}
        </div>

        {/* circuits */}
        <div className="absolute left-[-15px] top-[210px] opacity-45">
          <svg width="390" height="620" viewBox="0 0 390 620" fill="none">
            <path d="M20 30V190H170V520" stroke="#8FCFC3" strokeWidth="2" />
            <path d="M20 190H100V400" stroke="#8FCFC3" strokeWidth="2" />
            <path d="M0 320H80V590" stroke="#8FCFC3" strokeWidth="2" />
            <path d="M70 80H230V150H330" stroke="#8FCFC3" strokeWidth="2" />

            <circle cx="20" cy="30" r="5" fill="#8FCFC3" />
            <circle cx="170" cy="190" r="5" fill="#8FCFC3" />
            <circle cx="170" cy="520" r="5" fill="#8FCFC3" />
            <circle cx="100" cy="400" r="5" fill="#8FCFC3" />
            <circle cx="80" cy="590" r="5" fill="#8FCFC3" />
            <circle cx="330" cy="150" r="5" fill="#8FCFC3" />
          </svg>
        </div>

        {/* circles */}
        <div className="absolute left-8 bottom-36 h-64 w-64 rounded-full border border-[#8FCFC3]/45" />
        <div className="absolute left-14 bottom-44 h-48 w-48 rounded-full border border-[#8FCFC3]/30" />

        {/* scattered triangles */}
        <div className="absolute left-6 bottom-60 h-0 w-0 border-x-[10px] border-b-[18px] border-x-transparent border-b-[#4285F4] opacity-50" />

        <div className="absolute left-36 top-32 h-0 w-0 border-x-[8px] border-b-[14px] border-x-transparent border-b-[#EA4335] opacity-50" />

        <div className="absolute left-50 top-85 h-0 w-0 border-x-[8px] border-b-[14px] border-x-transparent border-b-[#34A853] opacity-50" />

        <div className="absolute left-62 bottom-40 h-0 w-0 border-x-[9px] border-b-[16px] border-x-transparent border-b-[#FBBC05] opacity-50" />

        {/* vertical triangles */}
        <div className="absolute left-[200px] top-[60px] flex flex-col gap-3 opacity-50">
          <div className="h-0 w-0 border-x-[10px] border-t-[18px] border-x-transparent border-t-[#4285F4]" />
          <div className="h-0 w-0 border-x-[10px] border-t-[18px] border-x-transparent border-t-[#EA4335]" />
          <div className="h-0 w-0 border-x-[10px] border-t-[18px] border-x-transparent border-t-[#FBBC05]" />
          <div className="h-0 w-0 border-x-[10px] border-t-[18px] border-x-transparent border-t-[#34A853]" />
        </div>

        {/* floating tiny dots */}
        <div className="absolute left-65 top-[520px] grid grid-cols-4 gap-2 opacity-40">
          {dots(16)}
        </div>

        {/* code window */}
        <div className="absolute left-28 bottom-5 h-32 w-48 rounded-2xl border border-[#8FCFC3]/45 bg-white/25 backdrop-blur-[2px] opacity-60">
          <div className="flex gap-2 p-3">
            <div className="h-3 w-3 rounded-full bg-[#EA4335]" />
            <div className="h-3 w-3 rounded-full bg-[#FBBC05]" />
            <div className="h-3 w-3 rounded-full bg-[#34A853]" />
          </div>

          <div className="mx-auto mt-2 text-center text-6xl font-bold text-[#8FCFC3]/50">
            {"<>"}
          </div>
        </div>

        {/* bottom dots */}
        <div className="absolute left-2 bottom-0 grid grid-cols-7 gap-3 opacity-35">
          {dots(49)}
        </div>
      </div>

      {/* RIGHT */}
      <div className="pointer-events-none fixed right-4 top-24 z-0 hidden h-[80vh] w-[340px] overflow-hidden xl:block">
        {/* top dots */}
        <div className="absolute right-5 top-0 grid grid-cols-7 gap-3 opacity-35">
          {dots(49)}
        </div>
        <div className="absolute right-38 top-28 grid grid-cols-5 gap-2 opacity-40">
          {dots(25)}
        </div>

        {/* top triangles */}
        <div className="absolute right-40 top-15 flex items-center gap-4 opacity-50">
          <div className="h-0 w-0 border-x-[13px] border-b-[24px] border-x-transparent border-b-[#4285F4]" />
          <div className="h-0 w-0 border-x-[13px] border-b-[24px] border-x-transparent border-b-[#EA4335]" />
          <div className="h-0 w-0 border-x-[13px] border-b-[24px] border-x-transparent border-b-[#34A853]" />
        </div>

        {/* floating triangles */}
        <div className="absolute right-5 top-65 h-0 w-0 border-x-[8px] border-t-[14px] border-x-transparent border-t-[#4285F4] opacity-50" />

        <div className="absolute right-30 top-40 h-0 w-0 border-x-[7px] border-t-[12px] border-x-transparent border-t-[#34A853] opacity-50" />

        <div className="absolute right-20 bottom-44 h-0 w-0 border-x-[9px] border-t-[16px] border-x-transparent border-t-[#FBBC05] opacity-50" />

        <div className="absolute right-56 bottom-60 h-0 w-0 border-x-[8px] border-t-[14px] border-x-transparent border-t-[#EA4335] opacity-50" />

        {/* cloud */}
        <div className="absolute right-36 top-120 text-[110px] text-[#8FCFC3]/35">
          
        </div>

        {/* binary */}
        <div className="absolute right-18 top-48 text-5xl font-bold tracking-widest text-[#8FCFC3]/25">
          1010101
        </div>

        {/* circuits */}
        <div className="absolute right-4 top-[210px] opacity-45">
          <svg width="360" height="620" viewBox="0 0 360 620" fill="none">
            <path d="M330 20V170H170V530" stroke="#8FCFC3" strokeWidth="2" />
            <path d="M330 170H250V390" stroke="#8FCFC3" strokeWidth="2" />
            <path d="M360 320H270V600" stroke="#8FCFC3" strokeWidth="2" />

            <circle cx="330" cy="20" r="5" fill="#8FCFC3" />
            <circle cx="170" cy="170" r="5" fill="#8FCFC3" />
            <circle cx="170" cy="530" r="5" fill="#8FCFC3" />
            <circle cx="250" cy="390" r="5" fill="#8FCFC3" />
            <circle cx="270" cy="600" r="5" fill="#8FCFC3" />
          </svg>
        </div>

        {/* code symbol */}
        <div className="absolute right-20 top-[330px] text-7xl font-bold text-[#4285F4]/55">
          {"<>"}
        </div>

        {/* radar */}
        <div className="absolute right-0 top-[500px] opacity-35">
          <svg width="270" height="270" viewBox="0 0 270 270">
            <circle cx="135" cy="135" r="105" stroke="#8FCFC3" strokeWidth="2" fill="none" />
            <circle cx="135" cy="135" r="72" stroke="#8FCFC3" strokeWidth="2" fill="none" />
            <circle cx="135" cy="135" r="34" stroke="#8FCFC3" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* floating crosses */}
        <div className="absolute right-75 top-[330px] text-5xl font-light text-[#8FCFC3]/35">
          +
        </div>

        <div className="absolute right-65 top-[450px] text-4xl font-light text-[#8FCFC3]/30">
          +
        </div>

        <div className="absolute right-40 bottom-[180px] text-5xl font-light text-[#8FCFC3]/35">
          +
        </div>

        {/* code window */}
        <div className="absolute right-15 bottom-0 h-40 w-60 rounded-2xl border border-[#8FCFC3]/45 bg-white/25 backdrop-blur-[2px] opacity-60">
          <div className="flex gap-2 p-3">
            <div className="h-3 w-3 rounded-full bg-[#EA4335]" />
            <div className="h-3 w-3 rounded-full bg-[#FBBC05]" />
            <div className="h-3 w-3 rounded-full bg-[#34A853]" />
          </div>

          <div className="space-y-3 px-6 pt-4">
            <div className="h-2 w-32 rounded bg-[#4285F4]/70" />
            <div className="h-2 w-40 rounded bg-[#34A853]/70" />
            <div className="h-2 w-28 rounded bg-[#FBBC05]/70" />
            <div className="h-2 w-36 rounded bg-[#EA4335]/70" />
          </div>
        </div>

        {/* circles above window */}
        <div className="absolute right-25 bottom-[375px] flex gap-4 opacity-50">
          <div className="h-4 w-4 rounded-full bg-[#4285F4]" />
          <div className="h-4 w-4 rounded-full bg-[#EA4335]" />
          <div className="h-4 w-4 rounded-full bg-[#FBBC05]" />
          <div className="h-4 w-4 rounded-full bg-[#34A853]" />
        </div>

        {/* bottom dots */}
        <div className="absolute right-4 bottom-32 grid grid-cols-7 gap-3 opacity-30">
          {dots(49)}
        </div>
      </div>
    </>
  );
}