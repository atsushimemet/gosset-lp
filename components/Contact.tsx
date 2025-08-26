'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactSchema = z.object({
  companyName: z.string().optional(),
  name: z.string().min(1, 'ご担当者名は必須です'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().optional(),
  inquiryType: z.enum(['advertising', 'programming']).refine(val => val !== undefined, {
    message: 'ご相談種別を選択してください'
  }),
  message: z.string().min(1, 'ご相談内容は必須です'),
  contactMethod: z.enum(['email', 'phone']).optional(),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: 'プライバシーポリシーに同意してください'
  })
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data)
    // TODO: integrate Resend/Netlify Forms
    setIsSubmitted(true)
    reset()
    
    // 3秒後に成功メッセージを非表示
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
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
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* 会社名 */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                会社名 <span className="text-gray-400">（任意）</span>
              </label>
              <input
                type="text"
                id="companyName"
                {...register('companyName')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="会社名を入力してください"
              />
            </div>
            
            {/* ご担当者名 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                ご担当者名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="担当者名を入力してください"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>
            
            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="example@company.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            
            {/* 電話番号 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                電話番号 <span className="text-gray-400">（任意）</span>
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="03-1234-5678"
              />
            </div>
            
            {/* ご相談種別 */}
            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                ご相談種別 <span className="text-red-500">*</span>
              </label>
              <select
                id="inquiryType"
                {...register('inquiryType')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.inquiryType ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">選択してください</option>
                <option value="advertising">広告代理</option>
                <option value="programming">プログラミング教育</option>
              </select>
              {errors.inquiryType && (
                <p className="mt-1 text-sm text-red-600">{errors.inquiryType.message}</p>
              )}
            </div>
            
            {/* ご相談内容 */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                ご相談内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="ご相談内容を詳しくお聞かせください"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>
            
            {/* 連絡希望方法 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                連絡希望方法 <span className="text-gray-400">（任意）</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="email"
                    {...register('contactMethod')}
                    className="mr-2"
                  />
                  <span className="text-gray-700">メール</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="phone"
                    {...register('contactMethod')}
                    className="mr-2"
                  />
                  <span className="text-gray-700">電話</span>
                </label>
              </div>
            </div>
            
            {/* プライバシー同意 */}
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  {...register('privacyConsent')}
                  className="mr-3 mt-1"
                />
                <span className="text-sm text-gray-700">
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    プライバシーポリシー
                  </a>
                  に同意します <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.privacyConsent && (
                <p className="mt-1 text-sm text-red-600">{errors.privacyConsent.message}</p>
              )}
            </div>
            
            {/* 送信ボタン */}
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              送信する
            </button>
          </form>
          
          {/* 成功メッセージ */}
          {isSubmitted && (
            <div className="fixed top-4 right-4 bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg z-50">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800 font-medium">
                  お問い合わせを受け付けました
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
