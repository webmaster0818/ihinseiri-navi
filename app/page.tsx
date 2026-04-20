import companies from "@/data/companies.json";

const topCompanies = companies.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="bg-background-white border-b border-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">遺品整理ナビ</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-foreground-light">
            <a href="#services" className="hover:text-primary transition-colors">
              サービス一覧
            </a>
            <a href="#ranking" className="hover:text-primary transition-colors">
              おすすめ業者
            </a>
            <a href="#fee-guide" className="hover:text-primary transition-colors">
              費用相場
            </a>
            <a href="#how-to-choose" className="hover:text-primary transition-colors">
              選び方
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              よくある質問
            </a>
          </nav>
          <a
            href="#cta"
            className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            無料相談
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            遺品整理・特殊清掃
            <br />
            <span className="text-primary">信頼できる業者</span>を比較
          </h1>
          <p className="text-lg text-foreground-light max-w-2xl mx-auto mb-8 leading-relaxed">
            大切な方を亡くされた悲しみの中、遺品整理のことでお困りではありませんか。
            <br className="hidden md:block" />
            ご遺族の気持ちに寄り添い、安心して任せられる業者選びをお手伝いします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#ranking"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-md"
            >
              おすすめ業者を見る
            </a>
            <a
              href="#fee-guide"
              className="bg-background-white hover:bg-border-light text-foreground px-8 py-4 rounded-lg font-medium text-lg transition-colors border border-border"
            >
              費用相場を確認
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-background-white border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-foreground">信頼できる業者厳選</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-foreground">全国対応</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-foreground">無料見積もり</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-foreground">24時間受付</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            サービス一覧
          </h2>
          <p className="text-center text-foreground-muted mb-12">
            お困りの状況に合わせて、最適なサービスをお選びください
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "遺品整理",
                description: "故人のお部屋の片付け・整理・搬出をプロが対応。形見分けや供養のご相談も承ります。",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
              {
                title: "特殊清掃",
                description: "孤独死や事故現場の清掃・消臭・原状回復を専門スタッフが対応いたします。",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
              },
              {
                title: "生前整理",
                description: "ご自身やご家族のために、元気なうちに身の回りを整理。終活の第一歩をサポートします。",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "ゴミ屋敷清掃",
                description: "大量のゴミや不用品の撤去から清掃まで。近隣への配慮も含めて対応いたします。",
                icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
              },
              {
                title: "不用品回収",
                description: "家具・家電・日用品など、不用品の回収・買取・リサイクルを行います。",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-background-white rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-foreground-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 3 Recommended Companies */}
      <section id="ranking" className="py-16 bg-background-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            おすすめ業者ランキング
          </h2>
          <p className="text-center text-foreground-muted mb-12">
            実績・信頼性・口コミをもとに厳選した業者をご紹介します
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {topCompanies.map((company, index) => (
              <div
                key={company.id}
                className={`rounded-xl border p-6 relative ${
                  index === 0
                    ? "border-accent shadow-lg"
                    : "border-border"
                }`}
              >
                {index === 0 && (
                  <div className="absolute -top-3 left-6 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    おすすめ No.1
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    No.2
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute -top-3 left-6 bg-foreground-muted text-white text-xs font-bold px-3 py-1 rounded-full">
                    No.3
                  </div>
                )}
                <div className="mt-2">
                  <h3 className="text-xl font-bold text-foreground mb-1">{company.name}</h3>
                  <p className="text-sm text-foreground-muted mb-4">{company.tagline}</p>
                  <p className="text-sm text-foreground-light mb-4 leading-relaxed">
                    {company.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-primary mb-2">特徴</h4>
                    <ul className="space-y-1">
                      {company.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="text-sm text-foreground-light flex items-start gap-2">
                          <svg className="w-4 h-4 text-success mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-success mb-2">良い点</h4>
                    <ul className="space-y-1">
                      {company.pros.slice(0, 2).map((pro) => (
                        <li key={pro} className="text-sm text-foreground-light">+ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-foreground-muted mb-2">注意点</h4>
                    <ul className="space-y-1">
                      {company.cons.slice(0, 1).map((con) => (
                        <li key={con} className="text-sm text-foreground-muted">- {con}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between text-xs text-foreground-muted mb-4">
                    <span>{company.type}</span>
                    <span>{company.areas}</span>
                  </div>
                  <a
                    href={company.affiliateUrl}
                    className="block w-full text-center bg-accent hover:bg-accent-dark text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    無料で相談する
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scene-based Recommendations */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            お悩み別ガイド
          </h2>
          <p className="text-center text-foreground-muted mb-12">
            ご状況に合わせたご案内をいたします
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background-white rounded-xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">親を亡くされた方へ</h3>
              <p className="text-sm text-foreground-light leading-relaxed mb-4">
                突然のことで何から手をつけてよいか分からない方も多くいらっしゃいます。まずは落ち着いて、必要な手続きを一つずつ進めましょう。遺品整理は急ぐ必要はありません。
              </p>
              <ul className="text-sm text-foreground-light space-y-2">
                <li>・49日を目安に整理を開始される方が多いです</li>
                <li>・形見分けの相談も業者に依頼可能です</li>
                <li>・供養・お焚き上げの対応も確認しましょう</li>
              </ul>
            </div>
            <div className="bg-background-white rounded-xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">孤独死が発覚した方へ</h3>
              <p className="text-sm text-foreground-light leading-relaxed mb-4">
                大変つらい状況かと存じます。特殊清掃が必要な場合は、専門業者への早めのご相談をおすすめします。消臭・除菌・原状回復まで一括対応してくれる業者があります。
              </p>
              <ul className="text-sm text-foreground-light space-y-2">
                <li>・警察の現場検証完了後にご依頼ください</li>
                <li>・近隣への配慮も業者が対応します</li>
                <li>・保険適用が可能な場合もあります</li>
              </ul>
            </div>
            <div className="bg-background-white rounded-xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">生前整理を始めたい方へ</h3>
              <p className="text-sm text-foreground-light leading-relaxed mb-4">
                元気なうちに身の回りを整理することは、ご自身にとってもご家族にとっても大切なことです。無理のないペースで、少しずつ進めましょう。
              </p>
              <ul className="text-sm text-foreground-light space-y-2">
                <li>・まずは不用品の分別から始めましょう</li>
                <li>・貴重品・重要書類の整理も大切です</li>
                <li>・プロに相談すると効率的に進められます</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Guide */}
      <section id="how-to-choose" className="py-16 bg-background-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            業者選び5つのポイント
          </h2>
          <p className="text-center text-foreground-muted mb-12">
            後悔しない業者選びのために、必ず確認しておきたいポイントです
          </p>
          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "遺品整理士などの資格を持っているか",
                description: "遺品整理士認定協会の資格を持つスタッフが在籍しているかを確認しましょう。専門知識を持ったプロが対応することで、適切な整理・処分が行われます。",
              },
              {
                num: "2",
                title: "見積もりは明確か（追加料金の有無）",
                description: "事前見積もりの金額が明確で、作業後に追加料金が発生しないかを確認しましょう。「見積もり無料」「追加料金なし」を明記している業者が安心です。",
              },
              {
                num: "3",
                title: "損害賠償保険に加入しているか",
                description: "作業中に建物や遺品を破損してしまった場合に備え、損害賠償保険に加入している業者を選びましょう。万が一の際も補償を受けられます。",
              },
              {
                num: "4",
                title: "口コミ・実績を確認する",
                description: "過去の利用者の口コミや、実際の作業実績を確認しましょう。ホームページだけでなく、第三者サイトの評判も参考になります。",
              },
              {
                num: "5",
                title: "複数社から見積もりを取る",
                description: "1社だけでなく、必ず2〜3社から見積もりを取りましょう。料金やサービス内容を比較することで、適正な価格で信頼できる業者を見つけられます。",
              },
            ].map((point) => (
              <div key={point.num} className="flex gap-4 items-start bg-background rounded-xl p-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{point.num}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-foreground-light leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Guide */}
      <section id="fee-guide" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            遺品整理の費用相場
          </h2>
          <p className="text-center text-foreground-muted mb-12">
            間取り別の費用目安です。実際の金額は物量や状況により変動します。
          </p>
          <div className="bg-background-white rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/5">
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground">間取り</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground">費用相場</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground hidden md:table-cell">作業時間目安</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground hidden md:table-cell">作業人数</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { room: "1K", price: "3万円〜8万円", time: "1〜3時間", staff: "1〜2名" },
                  { room: "1LDK", price: "7万円〜20万円", time: "2〜6時間", staff: "2〜3名" },
                  { room: "2LDK", price: "12万円〜30万円", time: "3〜8時間", staff: "3〜5名" },
                  { room: "3LDK", price: "17万円〜50万円", time: "5〜12時間", staff: "4〜8名" },
                  { room: "一軒家", price: "20万円〜80万円", time: "1〜3日", staff: "5〜10名" },
                ].map((row, i) => (
                  <tr key={row.room} className={i % 2 === 0 ? "" : "bg-background"}>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{row.room}</td>
                    <td className="px-6 py-4 text-sm text-accent font-bold">{row.price}</td>
                    <td className="px-6 py-4 text-sm text-foreground-light hidden md:table-cell">{row.time}</td>
                    <td className="px-6 py-4 text-sm text-foreground-light hidden md:table-cell">{row.staff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-foreground-muted mt-4 text-center">
            ※ 上記は一般的な目安です。物量・階数・エレベーター有無・地域により変動します。正確な金額は必ず見積もりをお取りください。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-background-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            よくある質問
          </h2>
          <p className="text-center text-foreground-muted mb-12">
            遺品整理に関するよくあるご質問にお答えします
          </p>
          <div className="space-y-4">
            {[
              {
                q: "遺品整理はいつ頃から始めるのが良いですか？",
                a: "一般的には四十九日の法要を終えてから始められる方が多いです。ただし、賃貸物件の場合は退去期限があるため、早めにご相談されることをおすすめします。無理をせず、ご自身のペースで進めることが大切です。",
              },
              {
                q: "遺品整理の費用はどのくらいかかりますか？",
                a: "間取りや物量によって異なりますが、1Kで3〜8万円、3LDKで17〜50万円が目安です。買取可能な品物がある場合は費用から差し引かれることもあります。必ず複数社から見積もりを取ることをおすすめします。",
              },
              {
                q: "立ち会いは必要ですか？",
                a: "多くの業者は立ち会いなしでも作業可能です。遠方にお住まいの場合や、ご高齢で現地に行くのが難しい場合は、鍵の受け渡しのみで対応してくれる業者もあります。事前に相談してみてください。",
              },
              {
                q: "貴重品や思い出の品を見つけてもらえますか？",
                a: "はい。多くの遺品整理業者は、作業中に発見した貴重品（現金、通帳、宝飾品など）や写真・手紙などの思い出の品を丁寧に仕分けし、ご遺族にお渡しします。事前に探してほしいものを伝えておくとスムーズです。",
              },
              {
                q: "悪質な業者を見分けるにはどうしたら良いですか？",
                a: "電話での対応が雑、見積もりに来ない、契約を急かす、料金が極端に安い（または不明確）などは注意が必要です。遺品整理士の資格有無、損害保険の加入、口コミ評判を確認し、必ず書面で見積もりをもらいましょう。",
              },
            ].map((item) => (
              <div key={item.q} className="bg-background rounded-xl p-6">
                <h3 className="text-base font-bold text-foreground mb-3 flex items-start gap-2">
                  <span className="text-primary font-bold">Q.</span>
                  {item.q}
                </h3>
                <p className="text-sm text-foreground-light leading-relaxed pl-6">
                  <span className="text-accent font-bold">A.</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            お一人で悩まず、まずはご相談ください
          </h2>
          <p className="text-foreground-light mb-8 leading-relaxed">
            遺品整理は心身ともに大きな負担がかかる作業です。
            <br className="hidden md:block" />
            信頼できるプロに任せることで、少しでも心の負担を軽くしていただければ幸いです。
            <br className="hidden md:block" />
            まずは無料のお見積もりから、お気軽にご相談ください。
          </p>
          <a
            href="#ranking"
            className="inline-block bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-lg font-medium text-lg transition-colors shadow-md"
          >
            おすすめ業者に無料相談する
          </a>
          <p className="text-xs text-foreground-muted mt-4">
            ※ 相談・見積もりは完全無料です。ご納得いただけない場合はお断りいただけます。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">遺品整理ナビ</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                遺品整理・特殊清掃・生前整理の信頼できる業者比較サイト。ご遺族の気持ちに寄り添い、最適な業者選びをサポートします。
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">遺品整理</a></li>
                <li><a href="#" className="hover:text-white transition-colors">特殊清掃</a></li>
                <li><a href="#" className="hover:text-white transition-colors">生前整理</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ゴミ屋敷清掃</a></li>
                <li><a href="#" className="hover:text-white transition-colors">不用品回収</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-4">お役立ち情報</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#fee-guide" className="hover:text-white transition-colors">費用相場</a></li>
                <li><a href="#how-to-choose" className="hover:text-white transition-colors">業者の選び方</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">よくある質問</a></li>
                <li><a href="#ranking" className="hover:text-white transition-colors">おすすめ業者</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-4">運営情報</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>株式会社MediaX</li>
                <li>東京都渋谷区</li>
                <li><a href="#" className="hover:text-white transition-colors">運営者情報</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-xs text-gray-500">
              &copy; 2026 遺品整理ナビ（運営: 株式会社MediaX）All Rights Reserved.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              ※ 当サイトはアフィリエイトプログラムに参加しています。掲載している情報は2026年4月時点のものです。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
