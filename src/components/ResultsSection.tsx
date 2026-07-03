import Icon from "@/components/ui/icon"

const RESULTS = [
  "Вы поймёте, о чём именно ваше тело пытается до вас достучаться",
  "Уберёте первопричину, а не просто симптомы",
  "Проживёте и отпустите старые обиды",
  "Получите энергетическую поддержку через сеансы космоэнергетики",
  "Вернёте женскую силу и радость жизни",
]

const AUDIENCE = [
  "У вас есть любой женский диагноз",
  "Болезни возвращаются после лечения",
  "Вы устали от гормонов и таблеток",
  "Готовы работать с телом, душой и энергией",
  "Хотите наконец исцелиться глубоко и навсегда",
]

export default function ResultsSection() {
  return (
    <section className="relative bg-[#3d1224] py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
            Результат <span className="font-medium italic">после курса</span>
          </h2>
          <ul className="space-y-4">
            {RESULTS.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <Icon name="Check" className="text-[#d6669a] shrink-0 mt-0.5" size={18} />
                <span className="text-white/80 font-light text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
            Для кого <span className="font-medium italic">этот курс</span>
          </h2>
          <ul className="space-y-4">
            {AUDIENCE.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <Icon name="Check" className="text-[#d6669a] shrink-0 mt-0.5" size={18} />
                <span className="text-white/80 font-light text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="max-w-3xl mx-auto text-center mt-16 text-lg md:text-xl text-white font-light leading-relaxed">
        Ваше тело не враг. Оно просто кричит о том, о чём вы молчали годами.
        <br />
        <span className="text-[#d6669a] font-medium italic">Пора услышать и исцелиться.</span>
      </p>
    </section>
  )
}