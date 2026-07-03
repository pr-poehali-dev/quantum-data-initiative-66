export default function AuthorSection() {
  return (
    <section className="relative bg-[#1a0510] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 items-center">
        <div className="mx-auto md:mx-0">
          <img
            src="https://cdn.poehali.dev/projects/1e55c628-df72-4918-bf2b-410978c8d4eb/files/88492526-132d-4d1a-a887-c50740c190a1.jpg"
            alt="Марина Берг"
            className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border border-white/10 shadow-2xl"
          />
        </div>
        <div>
          <span className="text-[#d6669a] text-xs uppercase tracking-widest font-medium">
            Автор курса
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-white mt-3 mb-4">
            Я — <span className="font-medium italic">Марина Берг</span>
          </h2>
          <p className="text-white/70 font-light leading-relaxed text-sm md:text-base">
            Клинический психолог, практический психолог, онкопсихолог, эксперт по
            доказательной психосоматике, Прогрессор космоэнергетики с 15-летним стажем.
          </p>
        </div>
      </div>
    </section>
  )
}