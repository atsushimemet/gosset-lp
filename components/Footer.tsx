'use client'

import { COMPANY } from '@/lib/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-lg font-bold mb-4">{COMPANY.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {COMPANY.address}
            </p>
            {COMPANY.email && (
              <p className="text-gray-300 text-sm mt-2">
                メール: {COMPANY.email}
              </p>
            )}
          </div>
          
          {/* ナビゲーション */}
          <div>
            <h3 className="text-lg font-bold mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  ホーム
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  事業内容
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('strengths')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  私たちの強み
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('company')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  会社概要
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  お問い合わせ
                </button>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  利用規約
                </a>
              </li>
            </ul>
          </div>
          
          {/* 事業内容 */}
          <div>
            <h3 className="text-lg font-bold mb-4">事業内容</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>広告代理業</li>
              <li>プログラミング教育事業</li>
              <li>（オンライン・マンツーマン）</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
