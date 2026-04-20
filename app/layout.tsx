import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ihinseiri-navi.com"),
  title: "遺品整理ナビ｜遺品整理・特殊清掃の業者比較【2026年最新】",
  description:
    "遺品整理・特殊清掃・生前整理・ゴミ屋敷清掃の優良業者を比較。全国対応・無料見積もり。大切な方を亡くされたご遺族に寄り添い、信頼できる業者選びをサポートします。",
  keywords: [
    "遺品整理",
    "特殊清掃",
    "生前整理",
    "ゴミ屋敷",
    "業者比較",
    "費用相場",
    "おすすめ",
  ],
  openGraph: {
    title: "遺品整理ナビ｜遺品整理・特殊清掃の業者比較【2026年最新】",
    description:
      "遺品整理・特殊清掃・生前整理・ゴミ屋敷清掃の優良業者を比較。信頼できる業者選びをサポートします。",
    type: "website",
    locale: "ja_JP",
    siteName: "遺品整理ナビ",
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
