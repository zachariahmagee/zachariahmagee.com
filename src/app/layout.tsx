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
        <header className={'h-150 bg-slate-500 flex flex-row w-screen align-middle'}>
          <div className={'h-150 flex flex-row w-screen align-middle'}>
            <h1 className={'h-150 text-lg align-middle p-0 pl-4 pt-2 m-0 w-screen'}>
              <Link href={'/'} className={'hover:underline'}>Zachariah Angus Magee</Link>
            </h1>
            <nav>
              <ul  className='flex flex-row list-none justify-end align-middle m-0 p-0 gap-x-12 pt-3 pr-8'>
                <li>
                  <Link href={'/code'} className={'mr-4 hover:underline md:mr-6'}>code</Link>
                </li>
                <li>
                  <Link href={'/blog'}  className={'mr-4 hover:underline md:mr-6'}>blog</Link>
                </li>
                <li>
                  <Link href={'/etc'}  className={'mr-4 hover:underline md:mr-6'}>etc</Link>
                </li>
              </ul>
            </nav>  
          </div>
        </header>
        {children}

      </body>
    </html>
  )
}
