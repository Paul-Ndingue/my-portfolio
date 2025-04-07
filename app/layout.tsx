// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer' // Assure-toi que le chemin est correct
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Acceuil | P.Ndingue',
  description: 'Portfolio personnel',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* Contenu principal */}
        <Header />
        <main>
          {children}
        </main>
        {/* Footer toujours en bas */}
      <Footer />
      </body>
    </html>
  )
}
