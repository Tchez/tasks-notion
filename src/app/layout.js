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
        <div className="flex items-center justify-center w-full h-14 bg-red-500">
          <p className="text-2xl font-bold text-white">
            No momento o app apenas lista as tarefas. Em breve as funcionalidades de adicionar e remover tarefas serão implementadas!
          </p>
        </div>
        {children}
      </body>
    </html>
  )
}
