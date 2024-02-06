import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import './globals.css'

import AuthContext from '@/contexts/AuthContext'
import { SignUpModal } from '@/components/modal/SignUpModal';
import { SignInModal } from '@/components/modal/SignInModal';
import ToasterContext from '@/contexts/ToasterContext'


const font = Poppins({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MangaFlix',
  description: 'This website can be looked for manga!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={font.className}>
        <AuthContext>
          <ToasterContext />
          <SignUpModal/>
          <SignInModal/>
          <div>{children}</div>
        </AuthContext>
        
      </body>

    </html>
  )
}
