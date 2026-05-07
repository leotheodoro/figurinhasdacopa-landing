import Image from 'next/image'

const appUrl =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || process.env.APP_URL?.trim() || '#como-usar'
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || null

const hosts = ['Canadá', 'México', 'Estados Unidos']

const valueCards = [
  {
    eyebrow: 'Coleção organizada',
    title: 'Marque tudo o que já tem sem se perder no álbum físico.',
    description:
      'Pesquise por código, nome ou país, acompanhe repetidas e mantenha sua coleção na ordem oficial do álbum Panini.',
  },
  {
    eyebrow: 'Troca inteligente',
    title: 'Descubra com quem vale a pena falar primeiro.',
    description:
      'O app cruza suas repetidas com o que falta para outros usuários e retorna os melhores encaixes de troca em um ranking claro.',
  },
  {
    eyebrow: 'WhatsApp pronto',
    title: 'Saia da análise para a conversa em poucos cliques.',
    description:
      'Ao abrir um match, você vê os detalhes da troca e já envia uma mensagem pronta com o resumo do que cada lado precisa.',
  },
]

const featureList = [
  'Busca por figurinha usando código, nome ou país',
  'Controle de quantidade para distinguir figurinha normal e repetida',
  'Página “Com quem trocar?” com ranking por compatibilidade',
  'Separação correta entre figurinha foil e figurinha normal',
  'Contato imediato por WhatsApp com mensagem pré-montada',
  'Interface inspirada no visual da Copa do Mundo de 2026',
]

const howToUseSteps = [
  {
    step: '01',
    title: 'Crie sua conta',
    description:
      'Cadastre seu nome, email e telefone para entrar no app e já deixar pronto o canal de contato para as trocas.',
  },
  {
    step: '02',
    title: 'Preencha sua coleção',
    description:
      'Na página “Minha coleção”, marque quais figurinhas você já tem e ajuste a quantidade das que vieram repetidas.',
  },
  {
    step: '03',
    title: 'Revise suas repetidas',
    description:
      'Sempre que abrir mais pacotinhos, atualize as quantidades. O ranking fica melhor quanto mais fiel estiver sua coleção.',
  },
  {
    step: '04',
    title: 'Abra “Com quem trocar?”',
    description:
      'O sistema compara o que você pode oferecer com o que os outros usuários precisam, e também o caminho inverso.',
  },
  {
    step: '05',
    title: 'Analise os detalhes da troca',
    description:
      'Clique em um usuário para ver exatamente quais figurinhas ele pode te passar, quais você pode oferecer e onde existe encaixe real.',
  },
  {
    step: '06',
    title: 'Chame no WhatsApp',
    description:
      'Com o resumo já montado, basta abrir a conversa e combinar a troca sem precisar explicar tudo manualmente.',
  },
]

const faqItems = [
  {
    question: 'Preciso preencher o álbum inteiro para usar?',
    answer:
      'Não. Você já pode usar com parte da coleção preenchida, mas o ranking fica mais preciso quando suas faltantes e repetidas estão atualizadas.',
  },
  {
    question: 'Como o app identifica uma repetida?',
    answer:
      'Se a quantidade de uma figurinha for 2 ou mais, o sistema entende que você tem ao menos uma cópia disponível para troca.',
  },
  {
    question: 'Figurinha foil troca com figurinha normal?',
    answer:
      'Não. O app considera foil apenas com foil, para respeitar a lógica real da troca e evitar matches enganosos.',
  },
  {
    question: 'O ranking é aleatório?',
    answer:
      'Não. Ele prioriza usuários com mais chance de fechar uma troca útil agora, equilibrando o que você precisa receber e o que pode oferecer.',
  },
]

function SectionHeader({
  eyebrow,
  title,
  description,
  tone = 'default',
}: {
  eyebrow: string
  title: string
  description: string
  tone?: 'default' | 'light'
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#bf0a30]">{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${
          tone === 'light' ? 'text-white' : 'text-[#06235b]'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-8 ${
          tone === 'light' ? 'text-white/[0.76]' : 'text-slate-600'
        }`}
      >
        {description}
      </p>
    </div>
  )
}

function ExternalLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}) {
  const classes = {
    primary:
      'bg-[linear-gradient(135deg,#bf0a30_0%,#d33b67_100%)] text-white shadow-[0_18px_36px_rgba(191,10,48,0.26)] hover:brightness-105',
    secondary:
      'bg-[linear-gradient(135deg,#06235b_0%,#0a3c88_100%)] text-white shadow-[0_18px_36px_rgba(6,35,91,0.24)] hover:brightness-105',
    ghost:
      'border border-[#d6e0ff] bg-white/82 text-[#06235b] shadow-[0_12px_24px_rgba(6,35,91,0.08)] hover:bg-white',
  }

  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all whitespace-nowrap ${classes[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

export default function Home() {
  const primaryCtaLabel = appUrl.startsWith('http') ? 'Abrir o app' : 'Ver como funciona'
  const secondaryCtaLabel = appUrl.startsWith('http') ? 'Acessar o app' : 'Ir para o guia'

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-white/12 bg-[#041437]/80 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#topo" className="flex items-center gap-3">
            <div className="rounded-[1.2rem] border border-white/12 bg-white/10 p-2.5 shadow-[0_14px_32px_rgba(0,0,0,0.18)]">
              <Image
                src="/brand/world-cup-2026-emblem.svg"
                alt="Emblema da Copa do Mundo FIFA 2026"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
                unoptimized
                priority
              />
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/60">FIFA World Cup 26</p>
              <p className="text-base font-semibold tracking-[0.12em] text-white sm:text-lg">
                Figurinhas da Copa
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {[
              ['#projeto', 'O projeto'],
              ['#como-usar', 'Como usar'],
              ['#ranking', 'Ranking'],
              ['#faq', 'FAQ'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.12]"
              >
                {label}
              </a>
            ))}
            <ExternalLink href={appUrl} variant="primary">
              {secondaryCtaLabel}
            </ExternalLink>
          </nav>

          <div className="md:hidden">
            <ExternalLink
              href={appUrl}
              variant="primary"
              className="px-4 py-2 text-xs shadow-[0_14px_28px_rgba(191,10,48,0.24)]"
            >
              Abrir app
            </ExternalLink>
          </div>
        </div>
      </header>

      <main id="topo">
        <section className="relative overflow-hidden bg-[#041437] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,197,24,0.18),transparent_22%),radial-gradient(circle_at_top_right,rgba(191,10,48,0.18),transparent_28%),linear-gradient(180deg,#041437_0%,#06235b_58%,#0b3d88_100%)]" />
          <div className="pointer-events-none absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute right-[-6rem] top-[-2rem] h-60 w-60 rounded-full bg-[#f5c518]/18 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-8rem] right-[12%] h-56 w-56 rounded-full bg-[#bf0a30]/16 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#f5c518]" />
                  Coleção, repetidas e trocas em um só lugar
                </div>

                <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  O seu álbum da Copa, agora com inteligência para trocar melhor.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.76] sm:text-lg">
                  Figurinhas da Copa 2026 é um app para organizar sua coleção, controlar repetidas
                  e descobrir com quem trocar usando um ranking que compara faltantes, ofertas e
                  compatibilidade real entre usuários.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ExternalLink href={appUrl} variant="primary">
                    {primaryCtaLabel}
                  </ExternalLink>
                  {githubUrl && (
                    <ExternalLink href={githubUrl} variant="ghost">
                      Ver no GitHub
                    </ExternalLink>
                  )}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {hosts.map((host) => (
                    <span
                      key={host}
                      className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white/[0.88]"
                    >
                      {host}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-x-12 top-12 h-48 rounded-full bg-[#f5c518]/20 blur-3xl" />
                <div className="relative rounded-[2rem] border border-white/14 bg-white/[0.08] p-4 shadow-[0_32px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-5">
                  <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/56">Minha coleção</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">Álbum em campo</h3>
                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {[
                          ['BRA1', 'foil'],
                          ['BRA2', 'x2'],
                          ['BRA3', 'tenho'],
                          ['ARG1', 'foil'],
                          ['MEX7', 'x3'],
                          ['USA4', 'falta'],
                        ].map(([code, tag]) => (
                          <div
                            key={code}
                            className="rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-3 text-center"
                          >
                            <p className="text-lg font-semibold text-white">{code}</p>
                            <p
                              className={`mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                                tag === 'foil'
                                  ? 'text-[#f5c518]'
                                  : tag === 'falta'
                                    ? 'text-white/45'
                                    : 'text-white/70'
                              }`}
                            >
                              {tag}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.7rem] border border-white/10 bg-white p-5 text-[#10213f] shadow-[0_24px_56px_rgba(4,20,55,0.18)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#bf0a30]">
                        Com quem trocar?
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-[#06235b]">Ranking ao vivo</h3>

                      <div className="mt-5 space-y-3">
                        {[
                          {
                            name: 'Carlos',
                            successRate: '91%',
                            receive: '8',
                            offer: '6',
                            accent: 'bg-[#fef2f2] text-[#bf0a30]',
                          },
                          {
                            name: 'Ana',
                            successRate: '84%',
                            receive: '5',
                            offer: '5',
                            accent: 'bg-[#eef4ff] text-[#06235b]',
                          },
                          {
                            name: 'Marina',
                            successRate: '63%',
                            receive: '4',
                            offer: '1',
                            accent: 'bg-[#fff8df] text-[#7a5a00]',
                          },
                        ].map((item) => (
                          <div
                            key={item.name}
                            className="rounded-[1.4rem] border border-[#dce4fb] bg-[linear-gradient(180deg,rgba(246,248,255,0.9),rgba(255,255,255,0.9))] p-4"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <p className="text-base font-semibold text-[#06235b]">{item.name}</p>
                                <p className="mt-1 text-sm text-slate-500">
                                  Você pega {item.receive} • Você oferece {item.offer}
                                </p>
                              </div>
                              <span className={`rounded-full px-3 py-1 text-sm font-semibold ${item.accent}`}>
                                {item.successRate}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 rounded-[1.4rem] border border-dashed border-[#d9e2ff] bg-[#f6f8ff] p-4">
                        <p className="text-sm font-medium text-[#06235b]">Foil só troca com foil</p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          O ranking respeita a raridade real das figurinhas especiais para evitar
                          combinações enganosas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projeto" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="O projeto"
            title="Feito para quem coleciona de verdade, e não quer perder tempo na hora da troca."
            description="O Figurinhas da Copa junta coleção, repetidas e descoberta de parceiros em uma experiência única. Em vez de anotar tudo em planilha, caderno ou memória, você passa a enxergar o seu álbum como um sistema vivo de trocas possíveis."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {valueCards.map((card) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-[2rem] border border-[#d9e2ff] bg-white/88 p-6 shadow-[0_22px_54px_rgba(6,35,91,0.08)] backdrop-blur"
              >
                <div className="pointer-events-none absolute right-[-3rem] top-[-3rem] h-24 w-24 rounded-full bg-[#f5c518]/16 blur-3xl" />
                <p className="relative text-sm font-semibold uppercase tracking-[0.22em] text-[#bf0a30]">
                  {card.eyebrow}
                </p>
                <h3 className="relative mt-4 text-2xl font-semibold leading-tight text-[#06235b]">
                  {card.title}
                </h3>
                <p className="relative mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f8fbff]">
          <div className="pointer-events-none absolute left-[-5rem] top-12 h-48 w-48 rounded-full bg-[#06235b]/8 blur-3xl" />
          <div className="pointer-events-none absolute right-[-4rem] bottom-0 h-52 w-52 rounded-full bg-[#bf0a30]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="rounded-[2rem] border border-[#d9e2ff] bg-white/92 p-7 shadow-[0_24px_60px_rgba(6,35,91,0.08)]">
                <SectionHeader
                  eyebrow="Por que usar"
                  title="Tudo o que você precisa para completar o álbum com menos atrito."
                  description="A proposta do app é simples: reduzir o tempo entre abrir um pacote e encontrar a pessoa certa para trocar."
                />

                <div className="mt-8 grid gap-3">
                  {featureList.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.4rem] border border-[#e4ebff] bg-[#f6f8ff] px-4 py-4"
                    >
                      <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#bf0a30]" />
                      <p className="text-sm leading-7 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    label: 'Coleção ordenada',
                    value: '1.012',
                    helper: 'Figurinhas rastreáveis no app',
                  },
                  {
                    label: 'Contato direto',
                    value: 'WhatsApp',
                    helper: 'Sem formulários longos ou mediação extra',
                  },
                  {
                    label: 'Lógica especial',
                    value: 'Foil ≠ normal',
                    helper: 'Regras realistas de troca no ranking',
                  },
                  {
                    label: 'Página-chave',
                    value: 'Match',
                    helper: 'Melhores trocas e quem pode te ajudar',
                  },
                ].map((stat) => (
                  <article
                    key={stat.label}
                    className="relative overflow-hidden rounded-[2rem] border border-[#d9e2ff] bg-white/92 p-6 shadow-[0_22px_54px_rgba(6,35,91,0.08)]"
                  >
                    <div className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-24 w-24 rounded-full bg-[#f5c518]/14 blur-3xl" />
                    <p className="relative text-xs font-semibold uppercase tracking-[0.24em] text-[#bf0a30]">
                      {stat.label}
                    </p>
                    <p className="relative mt-4 text-4xl font-semibold tracking-tight text-[#06235b]">
                      {stat.value}
                    </p>
                    <p className="relative mt-4 text-sm leading-7 text-slate-600">{stat.helper}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="como-usar" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Como usar"
            title="Uma jornada simples, do pacote aberto até a troca combinada."
            description="A ideia é deixar o processo intuitivo para qualquer colecionador, mesmo sem familiaridade com apps de organização."
          />

          <div className="mt-6 flex flex-wrap gap-3">
            <ExternalLink href={appUrl} variant="secondary">
              {secondaryCtaLabel}
            </ExternalLink>
            <ExternalLink href="#ranking" variant="ghost">
              Entender o ranking
            </ExternalLink>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {howToUseSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-[2rem] border border-[#d9e2ff] bg-white/90 p-6 shadow-[0_18px_46px_rgba(6,35,91,0.07)]"
              >
                <span className="inline-flex rounded-full bg-[#06235b] px-3 py-1 text-sm font-semibold text-white">
                  Passo {step.step}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-[#06235b]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ranking" className="relative overflow-hidden bg-[#041437] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,197,24,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(191,10,48,0.16),transparent_30%),linear-gradient(180deg,#041437_0%,#06235b_100%)]" />
          <div className="pointer-events-none absolute left-[-5rem] bottom-[-7rem] h-60 w-60 rounded-full bg-white/8 blur-3xl" />
          <div className="pointer-events-none absolute right-[-6rem] top-10 h-56 w-56 rounded-full bg-[#f5c518]/18 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
            <SectionHeader
              eyebrow="Ranking inteligente"
              title="A página “Com quem trocar?” mostra quem realmente vale abordar primeiro."
              description="O algoritmo compara o que você tem repetido, o que os outros usuários precisam, o que eles podem te oferecer e o que falta no seu álbum. Com isso, o app separa trocas de mão dupla de usuários que apenas podem te ajudar."
              tone="light"
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[2rem] border border-white/12 bg-white/[0.08] p-6 backdrop-blur-md">
                <h3 className="text-2xl font-semibold text-white">Como a compatibilidade aparece para você</h3>

                <div className="mt-4 flex flex-wrap gap-3">
                  <ExternalLink href={appUrl} variant="ghost">
                    {secondaryCtaLabel}
                  </ExternalLink>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: 'Melhores trocas',
                      text: 'Usuários com encaixe real agora, onde ambos os lados têm algo útil para oferecer.',
                    },
                    {
                      title: 'Pode te ajudar',
                      text: 'Usuários que possuem figurinhas que faltam para você, mesmo quando a troca ainda não é totalmente equilibrada.',
                    },
                    {
                      title: 'Percentual de compatibilidade',
                      text: 'Uma forma visual de mostrar o quão promissora é a conversa, sem expor um score técnico cru para o usuário final.',
                    },
                    {
                      title: 'Foil só com foil',
                      text: 'Figurinhas especiais são comparadas apenas com outras especiais, para manter a lógica justa da troca.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-4">
                      <p className="text-lg font-semibold text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-white/[0.72]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/12 bg-white p-6 text-[#10213f] shadow-[0_28px_72px_rgba(0,0,0,0.24)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#bf0a30]">
                  Exemplo de leitura
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-[#06235b]">Carlos • 91%</h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-[#d9e2ff] bg-[#f6f8ff] p-4">
                    <p className="text-sm font-semibold text-[#06235b]">Ele pode te passar</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['ARG1 Foil', 'ARG2', 'ARG5', 'ARG9'].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#06235b]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-[#d9e2ff] bg-[#fff8df] p-4">
                    <p className="text-sm font-semibold text-[#7a5a00]">Você pode oferecer</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['BRA1 Foil', 'BRA2', 'MEX7'].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#7a5a00]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-[#d9e2ff] bg-white p-4 shadow-[0_12px_28px_rgba(6,35,91,0.06)]">
                  <p className="text-sm leading-7 text-slate-600">
                    Em vez de adivinhar se a conversa vale a pena, você já entra no WhatsApp sabendo
                    exatamente o que pedir e o que oferecer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="FAQ"
            title="Perguntas rápidas para quem vai começar a usar."
            description="Tudo aqui foi pensado para deixar a experiência objetiva e útil desde o primeiro acesso."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[2rem] border border-[#d9e2ff] bg-white/92 p-6 shadow-[0_18px_46px_rgba(6,35,91,0.06)]"
              >
                <h3 className="text-xl font-semibold text-[#06235b]">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#d9e2ff] bg-white/92 p-8 shadow-[0_26px_64px_rgba(6,35,91,0.08)] backdrop-blur sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-[#f5c518]/16 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-5rem] left-[-3rem] h-44 w-44 rounded-full bg-[#bf0a30]/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#bf0a30]">
                  Pronto para começar?
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#06235b] sm:text-4xl">
                  Transforme seu álbum da Copa em uma rede real de trocas possíveis.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Organize sua coleção, atualize suas repetidas e deixe o app apontar os melhores
                  parceiros para completar o álbum com menos atrito.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <ExternalLink href={appUrl} variant="secondary">
                  {appUrl.startsWith('http') ? 'Entrar no app' : 'Ver passo a passo'}
                </ExternalLink>
                {githubUrl && <ExternalLink href={githubUrl}>Ver repositório</ExternalLink>}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dce4fb] bg-white/72">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Figurinhas da Copa 2026 • coleção, repetidas e trocas com ranking inteligente.</p>
          <div className="flex flex-wrap gap-3">
            <a href={appUrl} className="hover:text-[#06235b]">
              Acessar o app
            </a>
            <a href="#topo" className="hover:text-[#06235b]">
              Voltar ao topo
            </a>
            <a href="#como-usar" className="hover:text-[#06235b]">
              Como usar
            </a>
            <a href="#ranking" className="hover:text-[#06235b]">
              Ranking
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
