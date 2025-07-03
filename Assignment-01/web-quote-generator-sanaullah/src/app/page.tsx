'use client';


import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <h1 className="text-4xl font-bold"> Welcome to the World of Quotes</h1>   
        <Link href='/quotes' > <ButtonDemo/></Link>

      </main>  
    </div>
  );
}


function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>Start the Journy !</Button>
    </div>
  )
}