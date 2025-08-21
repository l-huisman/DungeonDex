import './globals.css'
import Provider from './provider'
import { CreatureContextProvider } from '@/components/context/CreatureContext'

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
      <body className="font-sans">
        <Provider>
          {children}
        </Provider>
      </body>
    </html >
  )
}
