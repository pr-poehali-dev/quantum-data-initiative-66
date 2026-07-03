const DIAGNOSES = [
  "Аднексит", "Низкий эстроген", "Нерегулярные месячные", "Кисты", "Поликистоз",
  "Эндометриоз", "Бесплодие", "Проблемы с трубами", "Утолщение эндометрия", "Полипы",
  "Эндометрит", "Выделения", "Миома", "Цервицит", "Кровотечения", "Эрозия",
  "Токсикоз", "Вульвит", "Вагинит", "Молочница", "Бартолинит", "Цистит", "Болезни груди",
]

export default function ProblemSection() {
  return (
    <section className="relative bg-[#1a0510] py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight">
          <span className="font-medium italic">20+ женских диагнозов.</span>
          <br />
          1 курс. Реальные причины и работающие инструменты.
        </h2>

        <div className="flex flex-wrap justify-center gap-2 my-8">
          {DIAGNOSES.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-light"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 space-y-2">
          <p className="text-xl md:text-2xl text-white font-light">
            Врачи ставят диагнозы. А тело продолжает болеть.
          </p>
          <p className="text-lg md:text-xl text-[#d6669a] font-medium italic">
            Потому что таблетки не лечат душу.
          </p>
        </div>
      </div>
    </section>
  )
}