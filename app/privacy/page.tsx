import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              トップページに戻る
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              プライバシーポリシー
            </h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                このページは現在準備中です。プライバシーポリシーの詳細については、
                お問い合わせフォームよりご連絡ください。
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-lg font-bold text-blue-900 mb-2">
                  お問い合わせ
                </h2>
                <p className="text-blue-800">
                  プライバシーポリシーに関するご質問やご相談がございましたら、
                  <Link href="/#contact" className="text-blue-600 hover:underline">
                    お問い合わせフォーム
                  </Link>
                  よりお気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
