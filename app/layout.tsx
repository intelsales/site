
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IntelSales - Análise de Dados para PMEs | Data Science Consultoria',
  description: 'Transforme seus dados em vantagem competitiva. Consultoria especializada em análise de dados, data science e geomarketing para pequenas e médias empresas.',
  keywords: 'análise de dados, data science, geomarketing, consultoria dados, PME, dashboard, business intelligence, localização inteligente',
  authors: [{ name: 'IntelSales' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'IntelSales - Transformamos dados em decisões inteligentes',
    description: 'Democratizamos o acesso à análise de dados e inteligência geográfica para PMEs',
    type: 'website',
    locale: 'pt_BR',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
