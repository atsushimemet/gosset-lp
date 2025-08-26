'use client'

import { ChevronDown, MessageCircle } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLineContact = () => {
    window.open('https://lin.ee/jlYnS13V', '_blank')
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            信頼と実績で、<br />
            事業成長を支える。
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Gosset合同会社は、広告代理業とオンライン・マンツーマンのプログラミング教育を公式に提供しています。
            戦略立案から運用・学習支援まで、一気通貫で伴走します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleLineContact}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg inline-flex items-center justify-center transition-colors duration-200 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              LINEでお問い合わせ
            </button>
            <button
              onClick={() => scrollToSection('company')}
              className="btn-secondary w-full sm:w-auto"
            >
              会社概要
            </button>
          </div>
        </div>
        
        <div className="mt-16">
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            aria-label="次のセクションへスクロール"
          >
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
