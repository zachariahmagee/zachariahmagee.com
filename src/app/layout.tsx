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
      {/* <head> */}
      {/*   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"> */}
      {/* </head> */}
      <body className={inter.className}>
        <header className={'h-16 bg-slate-500 flex flex-row w-screen align-middle p-5'}>
          <div className={'flex flex-row w-screen align-middle text-stone-200'}>
            <h1 className={'text-lg align-middle p-0 pl-4 m-0 w-screen'}>
              <Link href={'/'} className={'hover:bg-slate-600 hover:rounded p-3'}>Zachariah Angus Magee</Link>
            </h1>
            <nav>
              <ul  className='flex flex-row list-none justify-end align-middle m-0 p-0 gap-x-12 pr-8'>
                <li>
                  <Link href={'/sources'} className={'mr-4 hover:bg-slate-600 hover:rounded p-3 md:mr-6'}>sources</Link>
                </li>
                <li>
                  <Link href={'/code'} className={'mr-4 hover:bg-slate-600 hover:rounded p-3 md:mr-6'}>code</Link>
                </li>
                <li>
                  <Link href={'/blog'}  className={'mr-4 hover:bg-slate-600 hover:rounded p-3 md:mr-6'}>blog</Link>
                </li>
                <li>
                  <Link href={'/etc'}  className={'mr-4 hover:bg-slate-600 hover:rounded p-3 md:mr-6'}>etc</Link>
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
