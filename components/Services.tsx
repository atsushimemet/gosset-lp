import { Code2, Megaphone } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            事業内容
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 広告代理業務 */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Megaphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">
                広告代理業務
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              デジタル広告の戦略設計、クリエイティブ方針、媒体運用（Google/Meta/X/LINE 等）、
              計測設計（GA4/タグ）、レポーティング、改善サイクルを一貫して支援。
              成果に直結する運用体制で投資対効果の最大化を図ります。
            </p>
          </div>
          
          {/* プログラミング教育事業 */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Code2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">
                プログラミング教育事業（オンライン・マンツーマン）
              </h3>
            </div>
            
                    <p className="text-gray-600 leading-relaxed">
          現場で使える実務直結カリキュラムを、オンライン完結の個別レッスンとして公式に提供。
          Web フロントエンド（Next.js/React）を中心に、AI・機械学習・データサイエンス機能を搭載した
          モダンなアプリケーション開発を、基礎からデプロイ、運用まで丁寧にサポートします。
        </p>
          </div>
        </div>
      </div>
    </section>
  )
}
