import { jsonLdOrganization, siteMeta } from '@/lib/site'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: "Gosset合同会社 | 公式サイト",
  description: "Gosset合同会社は、東京都渋谷区に本店を置く広告代理業およびオンライン・マンツーマンのプログラミング教育事業を公式に提供しています。戦略立案から運用・レポーティングまでの一貫支援と、実務直結カリキュラムで成果にこだわります。",
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: "Gosset合同会社 | 公式サイト",
    description: "Gosset合同会社は、東京都渋谷区に本店を置く広告代理業およびオンライン・マンツーマンのプログラミング教育事業を公式に提供しています。戦略立案から運用・レポーティングまでの一貫支援と、実務直結カリキュラムで成果にこだわります。",
    url: "http://localhost:3000",
    siteName: "Gosset合同会社 | 公式サイト",
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: "Gosset合同会社 | 公式サイト",
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gosset合同会社 | 公式サイト",
    description: "Gosset合同会社は、東京都渋谷区に本店を置く広告代理業およびオンライン・マンツーマンのプログラミング教育事業を公式に提供しています。戦略立案から運用・レポーティングまでの一貫支援と、実務直結カリキュラムで成果にこだわります。",
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
