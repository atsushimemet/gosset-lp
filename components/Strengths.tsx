import { BarChart3, BookOpen, MessageSquare, Shield, Target } from 'lucide-react'

const strengths = [
  {
    icon: Target,
    title: "成果志向の運用体制",
    description: "仮説検証を高速に回し、改善を継続。",
    color: "blue"
  },
  {
    icon: BarChart3,
    title: "透明性の高いレポート",
    description: "指標定義を明確化し、意思決定を支援。",
    color: "green"
  },
  {
    icon: BookOpen,
    title: "実務直結の教育",
    description: "課題ベースのレッスンで習得を定着。",
    color: "purple"
  },
  {
    icon: Shield,
    title: "コンプライアンス遵守",
    description: "個人情報・広告表現のガイドラインに準拠。",
    color: "orange"
  },
  {
    icon: MessageSquare,
    title: "迅速なコミュニケーション",
    description: "相談から提案までのリードタイム短縮。",
    color: "red"
  }
]

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600"
  }
  return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600"
}

export default function Strengths() {
  return (
    <section id="strengths" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            私たちの強み
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon
            return (
              <div key={index} className="text-center">
                <div className={`inline-flex p-4 rounded-lg mb-4 ${getColorClasses(strength.color)}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {strength.title}
                </h3>
                <p className="text-gray-600">
                  {strength.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
