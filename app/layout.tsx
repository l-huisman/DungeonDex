import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dungeon Dex',
  description: 'A place to find all your favorite D&D Creatures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
