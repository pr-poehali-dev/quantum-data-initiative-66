export default function BuySection() {
  return (
    <section id="buy" className="relative bg-[#3d1224] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-[#d6669a] text-xs uppercase tracking-widest font-medium">
          Доступ 3 месяца
        </span>
        <h2 className="text-3xl md:text-4xl font-light text-white mt-4 mb-8">
          Начните исцеление <span className="font-medium italic">уже сегодня</span>
        </h2>
        <div className="text-white text-lg font-medium mb-6">
          <span className="line-through text-white/60 mr-2">15000 руб</span>
          9999 руб
        </div>
        <button className="px-12 py-4 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer">
          Приобрести
        </button>
      </div>
    </section>
  )
}