import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { COMPANY } from '@/lib/site'

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
            
            <div className="prose prose-gray max-w-none space-y-8">
              <div className="text-sm text-gray-500 mb-6">
                制定日：2024年1月1日<br />
                最終更新日：2024年1月1日
              </div>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. 基本方針</h2>
                <p className="text-gray-700 leading-relaxed">
                  {COMPANY.name}（以下「当社」）は、広告代理業及びオンライン・マンツーマンのプログラミング教育事業において、
                  お客様の個人情報の保護を重要な責務と認識し、個人情報の保護に関する法律及び関連法令を遵守し、
                  適切な取り扱いを行います。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. 個人情報の定義</h2>
                <p className="text-gray-700 leading-relaxed">
                  本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、
                  当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの
                  （他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む）をいいます。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. 個人情報の収集</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">3.1 収集する情報</h3>
                  <p className="text-gray-700 leading-relaxed">
                    当社では、以下の個人情報を収集する場合があります：
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>氏名、メールアドレス、電話番号</li>
                    <li>会社名、部署名、役職</li>
                    <li>LINEアカウント情報（LINE公式アカウントでのやり取り時）</li>
                    <li>プログラミング教育における学習履歴・進捗情報</li>
                    <li>広告配信効果測定のためのアクセス解析データ</li>
                    <li>お問い合わせ内容及び相談内容</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mt-6">3.2 収集方法</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>お問い合わせフォームへの入力</li>
                    <li>LINE公式アカウントでのメッセージ交換</li>
                    <li>オンラインレッスンの申し込み・受講</li>
                    <li>広告運用サービスのご契約・打ち合わせ</li>
                    <li>当社Webサイトの閲覧（Cookieなど）</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. 個人情報の利用目的</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">4.1 広告代理業務</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>広告運用サービスの提供</li>
                    <li>効果測定・レポーティング</li>
                    <li>戦略提案・コンサルティング</li>
                    <li>契約管理・請求業務</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mt-6">4.2 プログラミング教育事業</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>オンライン・マンツーマンレッスンの提供</li>
                    <li>学習進捗の管理・カリキュラム調整</li>
                    <li>レッスンスケジュールの調整</li>
                    <li>教育成果の評価・フィードバック</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mt-6">4.3 共通業務</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>お客様からのお問い合わせ対応</li>
                    <li>サービス改善のための分析</li>
                    <li>重要なお知らせの配信</li>
                    <li>法令に基づく業務</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">5. 個人情報の第三者提供</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供いたしません：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体又は財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合</li>
                  <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                  <li>広告配信プラットフォーム（Google、Meta、X、LINE等）への効果測定データの連携（個人を特定できない統計データに限る）</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">6. 個人情報の管理</h2>
                <p className="text-gray-700 leading-relaxed">
                  当社は、個人情報への不正アクセス、紛失、破壊、改ざん及び漏洩等を防止するため、
                  適切な安全管理措置を講じます。また、個人情報を取り扱う従業員に対して、
                  定期的な教育・研修を実施し、個人情報保護の徹底を図ります。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">7. Cookieの使用について</h2>
                <p className="text-gray-700 leading-relaxed">
                  当社Webサイトでは、サービス向上のためCookieを使用しています。
                  Cookieの設定は、ブラウザの設定により無効にすることが可能ですが、
                  一部機能が正常に動作しない場合があります。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">8. お客様の権利</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  お客様は、当社が保有する個人情報について、以下の権利を有します：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>開示請求権（個人情報の利用目的、取扱状況の開示を求める権利）</li>
                  <li>訂正・追加・削除請求権（個人情報の訂正、追加、削除を求める権利）</li>
                  <li>利用停止・消去請求権（個人情報の利用停止、消去を求める権利）</li>
                  <li>第三者提供停止請求権（第三者への提供の停止を求める権利）</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">9. お問い合わせ窓口</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>{COMPANY.name}</strong></p>
                    <p>メール：{COMPANY.email}</p>
                    <p>所在地：{COMPANY.address}</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">10. プライバシーポリシーの変更</h2>
                <p className="text-gray-700 leading-relaxed">
                  当社は、法令の変更や事業内容の変更等により、本プライバシーポリシーを変更する場合があります。
                  変更後のプライバシーポリシーは、当社Webサイトに掲載した時点より効力を生じるものとします。
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
