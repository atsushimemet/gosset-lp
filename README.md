# gosset-lp

# コーディングエージェントへの依頼書（Next.js/React LP実装：Gosset合同会社）
目的:
Gosset合同会社の公式ランディングページ（LP）を Next.js（App Router）+ React + TypeScript + Tailwind CSS で実装する。トーンは「オフィシャルで信頼感」。会社概要・事業内容（広告代理業／オンライン・マンツーマンのプログラミング教育）の明示と、お問い合わせ導線の最適化を行う。

--- 成果物（Deliverables）
・/app 配下のプロダクション品質LP（TypeScript）
・Hero / Services / Strengths / Company / Contact / Footer のセクション別コンポーネント
・SEO/OG/構造化データ（JSON-LD）設定
・アクセシビリティ考慮（キーボード操作/コントラスト/代替テキスト）
・Lighthouse 90+ を目標（Performance/Accessibility/Best Practices/SEO）
・最低限のE2E/ビジュアルチェック観点（手動でも可）

--- 技術要件
Framework: Next.js 14+（App Router）
Language: TypeScript
UI: React + Tailwind CSS（next/font で Noto Sans JP など）
UI Lib: 必要に応じて shadcn/ui、アイコンは lucide-react
Analytics: 未導入（将来用に <Script> プレースホルダ）
フォーム送信: まずはフロントのみ（成功トースト表示）。外部送信は TODO コメント（Resend/Netlify Forms 等）

--- 情報アーキテクチャ / ルーティング
/ : LP 本体（下記セクションを縦並び）
  1) Hero（ファーストビュー）
  2) Services（事業内容：広告代理／プログラミング教育）
  3) Strengths（私たちの強み）
  4) Company（会社概要）
  5) Contact（お問い合わせフォーム）
  6) Footer（サイト情報）
/privacy と /terms はプレースホルダを用意し Footer からリンク

--- ディレクトリ構成（例）
app/
  layout.tsx
  page.tsx
  privacy/page.tsx
  terms/page.tsx
components/
  Hero.tsx
  Services.tsx
  Strengths.tsx
  Company.tsx
  Contact.tsx
  Footer.tsx
lib/
  site.ts   // サイト定数・会社情報
  seo.ts    // メタ/OG/JSON-LD 生成
public/
  favicon.ico
  og.jpg
styles/
  globals.css

--- 定数（lib/site.ts の内容）
TypeScript:
export const COMPANY = {
  name: "Gosset合同会社",
  address: "東京都渋谷区渋谷2丁目19-15 宮益坂ビルディング609",
  addressKana: "トウキョウト シブヤク シブヤ 2-19-15 ミヤマスザカビルディング 609",
  email: "info@example.com", // 後日差し替え
  tel: "",                   // 後日差し替え
  areaServed: "JP",
};

--- SEO / メタ（lib/seo.ts の要点）
・html lang="ja"
・meta description は 110〜140 文字を目安
・OG/Twitter カード設定
・JSON-LD：Organization（additionalType に AdvertisingAgency を付与）

TypeScript（値だけ利用・実装は自由）:
export const siteMeta = {
  title: "Gosset合同会社 | 公式サイト",
  description: "Gosset合同会社は、東京都渋谷区に本店を置く広告代理業およびオンライン・マンツーマンのプログラミング教育事業を公式に提供しています。戦略立案から運用・レポーティングまでの一貫支援と、実務直結カリキュラムで成果にこだわります。",
  url: "https://www.example.com" // 後日差し替え
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
    "postalCode": "",
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

実装メモ:
・app/layout.tsx の metadata でタイトル/ディスクリプションを設定
・JSON-LD は <script type="application/ld+json"> で埋め込み
・OG 画像（public/og.jpg）は仮でOK

--- セクション別コピー（そのまま UI に反映）
1) Hero
・見出し: 信頼と実績で、事業成長を支える。
・サブ: Gosset合同会社は、広告代理業とオンライン・マンツーマンのプログラミング教育を公式に提供しています。戦略立案から運用・学習支援まで、一気通貫で伴走します。
・CTA: 「お問い合わせ」（#contact にスクロール）、「会社概要」（#company にスクロール）

2) Services（事業内容）
・見出し: 事業内容
・カードA タイトル: 広告代理業務
・カードA テキスト: デジタル広告の戦略設計、クリエイティブ方針、媒体運用（Google/Meta/X/LINE 等）、計測設計（GA4/タグ）、レポーティング、改善サイクルを一貫して支援。成果に直結する運用体制で投資対効果の最大化を図ります。
・カードB タイトル: プログラミング教育事業（オンライン・マンツーマン）
・カードB テキスト: 現場で使える実務直結カリキュラムを、オンライン完結の個別レッスンとして公式に提供。Web フロントエンド（Next.js/React）を中心に、基礎からデプロイ、運用の初歩までを丁寧にサポートします。

3) Strengths（私たちの強み）
・項目1: 成果志向の運用体制 — 仮説検証を高速に回し、改善を継続。
・項目2: 透明性の高いレポート — 指標定義を明確化し、意思決定を支援。
・項目3: 実務直結の教育 — 課題ベースのレッスンで習得を定着。
・項目4: コンプライアンス遵守 — 個人情報・広告表現のガイドラインに準拠。
・項目5: 迅速なコミュニケーション — 相談から提案までのリードタイム短縮。

4) Company（会社概要）
・見出し: 会社概要
・本文（箇条書き表示で可）:
  商号: Gosset合同会社
  所在地: 東京都渋谷区渋谷2丁目19-15 宮益坂ビルディング609
  事業内容: 広告代理業／プログラミング教育事業（オンライン・マンツーマン）
  備考: 来社の際は事前予約をお願いします。
・地図は静的プレースホルダ（Google Map 埋め込みは別チケット）

5) Contact（お問い合わせ）
・見出し: お問い合わせ
・リード: 広告運用やレッスンのご相談は、以下フォームよりお寄せください。
・フォーム項目:
  会社名（任意）
  ご担当者名（必須）
  メールアドレス（必須）
  電話番号（任意）
  ご相談種別（必須）: 広告代理／プログラミング教育
  ご相談内容（必須）: テキストエリア
  連絡希望方法（任意）: メール／電話
  プライバシー同意（必須）: チェックボックス
・送信後: 成功トースト表示（送信は未実装、TODO コメントを残す）

6) Footer
・表記: © {year} Gosset合同会社
・リンク: 会社概要（#company）、プライバシーポリシー（/privacy）、利用規約（/terms）

--- スタイル指針
・トーン: オフィシャル／信頼性（余白広め、落ち着いた配色、過剰な演出は避ける）
・配色例: 背景 #ffffff、本文 #111827、サブ #4b5563、アクセント #0ea5e9（Tailwind デフォルト）
・フォント: Noto Sans JP（next/font）
・角丸: 控えめ、影: ごく薄く、アニメーション: フェード程度

--- 実装メモ
・画像は next/image、loading="lazy"
・各セクションに id（hero/services/strengths/company/contact）
・CTA は scrollIntoView でスムーズスクロール
・フォーム: react-hook-form + zod でバリデーション
・送信は未実装（// TODO: integrate Resend/Netlify Forms）
・a11y: ラベル、aria-*、フォーカスリング、コントラスト比 4.5:1 以上

--- 受け入れ基準（Acceptance Criteria）
1) Lighthouse（Performance/Accessibility/Best Practices/SEO）各 90 以上
2) メタ/OG/JSON-LD が正しく出力され検証エラーがない
3) 360px〜1280px で主要要素が崩れない
4) Hero の CTA から Contact/Company にスムーズに移動できる
5) フォーム必須項目未入力時に適切なエラー表示が出る
6) 本書のセクション別コピーがそのまま反映されている
7) 住所表記が「東京都渋谷区渋谷2丁目19-15 宮益坂ビルディング609」と正確

--- 実装優先順位（タスク）
1) Next.js プロジェクト雛形（App Router, Tailwind, ESLint/Prettier）
2) lib/site.ts / lib/seo.ts 定義、app/layout.tsx でメタ設定と JSON-LD 埋め込み
3) コンポーネント実装（Hero → Services → Strengths → Company → Contact → Footer）
4) レスポンシブ/a11y/パフォーマンス調整
5) /privacy /terms プレースホルダ作成
6) 主要ビューポートでの手動チェックとフォームバリデーション確認
7) OGP 仮画像設置と最終通し

--- 注意事項
・連絡先メール/電話はプレースホルダにし、後日差し替え可能にすること
・地図埋め込みは実装せず静的プレースホルダ（別チケットで対応）
・外部トラッキングや実送信はスコープ外。TODO コメントで明示

