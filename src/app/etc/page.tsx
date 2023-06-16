import Link from 'next/link';

export default function Etc() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-stone-200">
      <ul>
        <li>
          <Link 
            href='/etc/cv'
            alt='professional resume/ cv'
            className={'mr-4 hover:bg-slate-500 hover:text-stone-200 hover:rounded p-3 md:mr-6'}
          >cv
          </Link>
        </li>
      </ul> 
    </main>
  )
}
