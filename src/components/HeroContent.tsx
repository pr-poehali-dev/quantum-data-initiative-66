export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
          <span className="text-white text-xs font-medium relative z-10">
            Онлайн-курс · доступ 3 месяца
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4 drop-shadow-lg">
          <span className="font-medium italic text-[#8b0a3d]">Женские диагнозы:</span>
          <br />
          <span className="font-light tracking-tight text-white">исцеление через осознание</span>
        </h1>

        {/* Description */}
        <p className="text-sm font-normal text-white mb-6 leading-relaxed drop-shadow-md">
          20+ женских диагнозов. 1 курс. Реальные причины и работающие инструменты.
          Психосоматика, подкаст-проработка и сеансы космоэнергетики от Марины Берг —
          клинического психолога с 15-летним стажем. Уберите первопричину, а не симптомы.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Программа курса
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Приобрести
          </button>
        </div>
      </div>
    </main>
  )
}