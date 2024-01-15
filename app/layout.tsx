import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './(User)/user'


const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Tchivala',
  description: 'Generated by create next app',
}


 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${montserrat.className}`}>
      <AuthProvider>
      
      {children}

    </AuthProvider>
        
        
        </body>
    </html>
  );
}
