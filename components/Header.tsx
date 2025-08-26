'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // セクションへのスムーズスクロール
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // モバイルメニューを閉じる
    }
  }

  // LINEお問い合わせ
  const handleLineContact = () => {
    window.open('https://lin.ee/jlYnS13V', '_blank')
    setIsMenuOpen(false)
  }

  // ナビゲーションメニュー項目
  const navItems = [
    { id: 'hero', label: 'ホーム' },
    { id: 'services', label: '事業内容' },
    { id: 'strengths', label: '私たちの強み' },
    { id: 'company', label: '会社概要' },
    { id: 'contact', label: 'お問い合わせ' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer flex items-center"
          >
            <h1 className="text-xl font-bold text-gray-900">
              Gosset合同会社
            </h1>
          </div>

          {/* デスクトップメニュー */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleLineContact}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center transition-colors duration-200 ml-4"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              LINE相談
            </button>
          </nav>

          {/* ハンバーガーメニューボタン（モバイル） */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            aria-label="メニュー"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
            <nav className="py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 py-3">
                <button
                  onClick={handleLineContact}
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg inline-flex items-center transition-colors duration-200 w-full justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  LINE相談
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}