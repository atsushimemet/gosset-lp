import { COMPANY } from '@/lib/site'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'

export default function Company() {
  return (
    <section id="company" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            会社概要
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <div className="grid md:grid-cols-1 gap-8">
              {/* 会社情報 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-6 h-6 mr-2 text-blue-600" />
                  基本情報
                </h3>
                
                <dl className="space-y-4">
                  <div>
                    <dt className="font-medium text-gray-900">商号</dt>
                    <dd className="text-gray-600 mt-1">{COMPANY.name}</dd>
                  </div>
                  
                  <div>
                    <dt className="font-medium text-gray-900">所在地</dt>
                    <dd className="text-gray-600 mt-1">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                        <div className="flex flex-col">
                          <span>〒150-0002</span>
                          <span>{COMPANY.address}</span>
                        </div>
                      </div>
                    </dd>
                  </div>
                  
                  <div>
                    <dt className="font-medium text-gray-900">事業内容</dt>
                    <dd className="text-gray-600 mt-1">
                      広告代理業／プログラミング教育事業（オンライン・マンツーマン）
                    </dd>
                  </div>
                  

                </dl>
              </div>
              
              {/* 地図プレースホルダー */}

            </div>
            
            {/* 連絡先情報 */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">お問い合わせ</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-gray-600">{COMPANY.email}</span>
                </div>
                {COMPANY.tel && (
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-gray-400" />
                    <span className="text-gray-600">{COMPANY.tel}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
