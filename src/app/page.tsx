import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-start p-24 bg-stone-200">
      <article className={'flex flex-col'}>
        <div className={'flex flex-row'}>  
          <div className={'float-left items-center'}>
            <Image 
              width={500}
              height={500}
              src="/zach_sketch.png"
              alt="Sketch of zach"
              className={'p-1 hover:border-black'}
            />
          </div>
          <section className={'text-black pl-24 w-2/3'}>
            <h1><strong>My name is Zach. This is my site.</strong></h1> 
            <br/>
            <p> 
            I have built out this site to be a place where I can work on my web development skills. The time I've had to work on this site has been limited, but I am intending to continue adding to it over time.
            </p>
            <br/>
            <h2><strong>This site is very much a work in progress. September 13, 2023</strong></h2>
            <br/>
            <p>
              
            </p>
            <p></p>
          </section>
        </div>          
      </article>
    </main>
  )
}
