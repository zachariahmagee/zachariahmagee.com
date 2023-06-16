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
              I grew up in the forest-- at times struggling to adapt to personhood, asking questions, and trying too hard. 
              I am a software engineer by trade, based in Bellingham, WA. Curiosity drives my development.
              I enjoy simple solutions to complex problems. I often find myself over-engineering something until I get frustrated, 
              walking away for the evening only to come back in the morning and resolve the problem with a few key strokes.
            </p>
            <p></p>
          </section>
        </div>          
        

        {/* <section className='w-1/3 text-end'> */}
        {/*   <nav> */}
        {/*     <ul className={'flex flex-col list-none justify-evenly align-middle m-0 p-0 gap-y-12 pr-4'}> */}
        {/*       <li> */}
        {/*         <Link  */}
        {/*           href={'/etc/cv'}  */}
        {/*           alt='Resume and CV' */}
        {/*           className={'px-3 py-1 rounded hover:bg-stone-400'} */}
        {/*         >cv</Link> */}
        {/*       </li> */}
        {/*       <li> */}
        {/*         <Link  */}
        {/*           href={'/projects'}  */}
        {/*           alt='projects' */}
        {/*           className={'px-3 py-1 rounded hover:bg-stone-400'} */}
        {/*         >projects</Link> */}
        {/*       </li> */}
        {/*       <li></li> */}
        {/*     </ul> */}
        {/*   </nav> */}
        {/* </section> */}
      </article>
    </main>
  )
}
