import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import { Headers } from '@/components/Headers'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'],weight: ['300', '700','500'] })

export const metadata = {
  title: 'Film Web',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        <Headers/>
        
        {children}
        
        
        </body>
    </html>
  )
}