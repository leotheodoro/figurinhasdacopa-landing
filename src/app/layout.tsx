import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Figurinhas da Copa | Landing Page',
  description:
    'Organize sua coleção, marque repetidas e descubra com quem trocar figurinhas da Copa com ranking inteligente.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
