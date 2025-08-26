import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { COMPANY } from '@/lib/site'

export default function TermsPage() {
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
              利用規約
            </h1>
            
            <div className="prose prose-gray max-w-none space-y-8">
              <div className="text-sm text-gray-500 mb-6">
                制定日：2024年1月1日<br />
                最終更新日：2024年1月1日
              </div>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第1条（適用範囲）</h2>
                <p className="text-gray-700 leading-relaxed">
                  本利用規約（以下「本規約」）は、{COMPANY.name}（以下「当社」）が提供する
                  広告代理業務及びオンライン・マンツーマンのプログラミング教育事業（以下「本サービス」）の
                  利用条件を定めるものです。本サービスをご利用になる方（以下「利用者」）には、本規約をご承諾いただいたものとみなします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第2条（サービス内容）</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">2.1 広告代理業務</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>デジタル広告の戦略設計・クリエイティブ方針策定</li>
                    <li>各種媒体での広告運用（Google広告、Meta広告、X広告、LINE広告等）</li>
                    <li>効果測定・分析・レポーティング</li>
                    <li>広告運用に関するコンサルティング</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mt-6">2.2 プログラミング教育事業</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>オンライン・マンツーマンでのプログラミング指導</li>
                    <li>Webフロントエンド開発（Next.js、React等）の教育</li>
                    <li>AI・機械学習・データサイエンス技術の指導</li>
                    <li>実務直結カリキュラムの提供</li>
                    <li>学習進捗管理・評価・フィードバック</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第3条（利用申込み）</h2>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>本サービスの利用を希望する方は、当社が定める方法により申込みを行うものとします。</li>
                  <li>当社は、申込者が以下のいずれかに該当する場合、申込みを承諾しないことがあります：
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>申込みにあたり虚偽の事項を届け出た場合</li>
                      <li>過去に本規約に違反したことがある場合</li>
                      <li>その他、当社が利用を適当でないと判断した場合</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第4条（料金・支払い）</h2>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>利用者は、本サービスの利用料金を、当社が指定する方法により支払うものとします。</li>
                  <li>料金の詳細は、別途当社が提示する見積書・契約書に記載するものとします。</li>
                  <li>支払期日を過ぎても料金の支払いがない場合、当社は本サービスの提供を停止することができます。</li>
                  <li>一度お支払いいただいた料金は、当社の責に帰すべき事由がある場合を除き、返金いたしません。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第5条（禁止事項）</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社や第三者の知的財産権を侵害する行為</li>
                  <li>当社や第三者の名誉・信用を毀損する行為</li>
                  <li>虚偽の情報を送信・掲載する行為</li>
                  <li>営業、宣伝、広告、勧誘、その他営利を目的とする行為（当社が認めたものを除く）</li>
                  <li>他の利用者や講師への嫌がらせ、誹謗中傷等</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第6条（知的財産権）</h2>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>本サービスに関する知的財産権は、当社または当社にライセンスを許諾している者に帰属します。</li>
                  <li>プログラミング教育で作成されたコード・成果物の著作権は利用者に帰属しますが、
                      教育目的での利用については当社も使用することができるものとします。</li>
                  <li>広告運用において作成されたクリエイティブ等の知的財産権の帰属については、
                      別途契約書で定めるものとします。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第7条（個人情報保護）</h2>
                <p className="text-gray-700 leading-relaxed">
                  当社は、利用者の個人情報を、当社の
                  <Link href="/privacy" className="text-blue-600 hover:underline">プライバシーポリシー</Link>
                  に従って適切に取り扱います。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第8条（サービスの変更・停止）</h2>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>当社は、事前の通知なく、本サービスの内容を変更することができます。</li>
                  <li>当社は、以下の場合には本サービスを一時的に停止することができます：
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>システムのメンテナンスを行う場合</li>
                      <li>地震、火災等の天災地変により本サービスの提供が困難な場合</li>
                      <li>その他、当社が本サービスの停止が必要と判断した場合</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第9条（契約の解除）</h2>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>当社は、利用者が本規約に違反した場合、事前の通知なく契約を解除することができます。</li>
                  <li>利用者は、当社が定める方法により、契約を解除することができます。</li>
                  <li>契約解除の場合でも、既に発生した料金の支払い義務は免除されません。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第10条（免責事項）</h2>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>当社は、本サービスの利用により利用者に生じた損害について、
                      当社の故意または重過失による場合を除き、一切の責任を負いません。</li>
                  <li>当社の責に帰すべき事由により利用者に損害が生じた場合でも、
                      当社の賠償責任は、直近12ヶ月間に利用者が当社に支払った料金額を上限とします。</li>
                  <li>広告運用の成果については、市場環境や競合状況等の外部要因に影響されるため、
                      特定の成果を保証するものではありません。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第11条（準拠法・裁判管轄）</h2>
                <p className="text-gray-700 leading-relaxed">
                  本規約の解釈にあたっては、日本法を準拠法とします。
                  本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄とします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第12条（規約の変更）</h2>
                <p className="text-gray-700 leading-relaxed">
                  当社は、必要に応じて本規約を変更することができます。
                  変更後の利用規約は、当社Webサイトに掲載した時点より効力を生じるものとします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">第13条（お問い合わせ）</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    本規約に関するお問い合わせは、以下までご連絡ください：
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>{COMPANY.name}</strong></p>
                    <p>メール：{COMPANY.email}</p>
                    <p>所在地：{COMPANY.address}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
