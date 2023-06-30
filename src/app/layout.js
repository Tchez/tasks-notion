import '@/styles/globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tasks App',
  description: 'A simple tasks app built with Next.js integrated with Notion API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex p-6 bg-slate-100">
          <div className='flex items-center gap-7'>
            <Link href="/"
              className="text-2xl font-bold text-gray-900"
            >Home</Link>
            <Link href="/api"
              className="text-2xl font-bold text-gray-900"
            >API</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
