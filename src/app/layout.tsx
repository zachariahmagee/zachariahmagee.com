import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zachariah - dev, creative, etc..',
  description: 'Enjoy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={'h-100 bg-slate-500 flex flex-row w-screen align-middle'}>
          <h1 className={'text-lg align-middle p-0 pl-4 pt-3 m-0 w-screen'}>
            <Link href={'/'}>Zachariah Angus Magee</Link>
          </h1>
          <nav>
            <ul  className='flex flex-row justify-end align-middle m-0 p-0 gap-x-12 pt-3 pr-8'>
              <li>
                <Link href={'/code'}>code</Link>
              </li>
              <li>
                <Link href={'/blog'}>blog</Link>
              </li>
              <li>
                <Link href={'/etc'}>etc</Link>
              </li>
            </ul>
          </nav>  
        
        </header>
        {children}

      </body>
    </html>
  )
}
