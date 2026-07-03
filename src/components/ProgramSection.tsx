import Icon from "@/components/ui/icon"

const BLOCKS = [
  {
    icon: "Brain",
    title: "Психосоматика каждого заболевания",
    subtitle: "Подробный разбор всех 20+ диагнозов (видео 1,5–2 часа)",
    points: [
      "Что именно ваше тело пытается сказать через эту болезнь",
      "Какая эмоция, обида, страх или блок стоит за каждым симптомом",
      "Связь с родом, с матерью, с партнером",
    ],
  },
  {
    icon: "Headphones",
    title: "Подкаст-проработка",
    subtitle: "Специальные аудио-сессии, которые вы включаете и просто слушаете",
    points: ["Без усилий, без напряжения — просто позволяете себе исцеляться"],
  },
  {
    icon: "Sparkles",
    title: "Сеансы космоэнергетики",
    subtitle: "Энергетическая чистка женских заболеваний через космоэнергетические каналы (в записи)",
    points: [
      "Очищение",
      "Снятие блоков",
      "Восстановление женской силы",
      "Каналы на лечение женских заболеваний",
    ],
  },
]

export default function ProgramSection() {
  return (
    <section id="program" className="relative bg-[#1a0510] py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-14">
          Что <span className="font-medium italic">внутри курса</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOCKS.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#d6669a]/20 flex items-center justify-center mb-5">
                <Icon name={block.icon} className="text-[#d6669a]" size={22} />
              </div>
              <h3 className="text-white text-lg font-medium mb-2">{block.title}</h3>
              <p className="text-white/50 text-xs font-light mb-4">{block.subtitle}</p>
              <ul className="space-y-2">
                {block.points.map((point) => (
                  <li key={point} className="flex gap-2 text-white/70 text-sm font-light">
                    <span className="text-[#d6669a] mt-1">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}