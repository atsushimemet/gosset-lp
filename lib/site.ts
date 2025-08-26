export const COMPANY = {
  name: "Gosset合同会社",
  address: "東京都渋谷区渋谷2丁目19-15 宮益坂ビルディング609",
  addressKana: "トウキョウト シブヤク シブヤ 2-19-15 ミヤマスザカビルディング 609",
  email: "info@example.com", // 後日差し替え
  tel: "",                   // 後日差し替え
  areaServed: "JP",
};

export const siteMeta = {
  title: "Gosset合同会社 | 公式サイト",
  description: "Gosset合同会社は、東京都渋谷区に本店を置く広告代理業およびオンライン・マンツーマンのプログラミング教育事業を公式に提供しています。戦略立案から運用・レポーティングまでの一貫支援と、実務直結カリキュラムで成果にこだわります。",
  url: "http://localhost:3000" // 開発環境用、後日本番URLに差し替え
};

export const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": COMPANY.name,
  "url": siteMeta.url,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "渋谷2丁目19-15 宮益坂ビルディング609",
    "addressLocality": "渋谷区",
    "addressRegion": "東京都",
    "postalCode": "150-0002",
    "addressCountry": "JP"
  },
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": COMPANY.email,
    "areaServed": COMPANY.areaServed,
    "availableLanguage": ["ja"]
  }],
  "additionalType": ["https://schema.org/AdvertisingAgency"]
};
