import Image from 'next/image';

export default function Sources() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-stone-200">
      <div className={'items-center'}>
          <Image 
            width={1500}
            height={500}
            src="/bellingham_sketch.jpeg"
            alt="Sketch of Bellingham"
            className={'p-1 hover:border-black'}
          />
        </div> 
    </main>
  )
}
