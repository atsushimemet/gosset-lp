'use client'

import { MessageCircle } from 'lucide-react'

export default function Contact() {
  const handleLineContact = () => {
    window.open('https://lin.ee/jlYnS13V', '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            広告運用やレッスンのご相談は、以下フォームよりお寄せください。
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              LINEでお気軽にお問い合わせください
            </h3>
            <p className="text-gray-600 mb-6">
              広告運用やプログラミング教育について、LINEで直接ご相談いただけます。<br />
              お気軽にメッセージをお送りください。
            </p>
            <button
              onClick={handleLineContact}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg inline-flex items-center transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              LINEで友達追加
            </button>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>
              ※ LINEアプリがインストールされていない場合は、App StoreまたはGoogle Playからダウンロードしてください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
