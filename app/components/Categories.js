import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

export default function Categories() {
  return (
    <div className='overflow-x-scroll px-4 mt-12'>
       <div className='flex gap-4 md:gap-8'>
        <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='w-full h-80 relative bg-slate-100'>
                <Image src= '' alt="" fill className='object-cover' />
            </div>
            <h1 className='mt-8 font-light tracking-wide text-cl'>Category name</h1>
        </Link>
        <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='w-full h-80 relative bg-slate-100'>
                <Image src= '' alt="" fill className='object-cover' />
            </div>
            <h1 className='mt-8 font-light tracking-wide text-cl'>Category name</h1>
        </Link>
        <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='w-full h-80 relative bg-slate-100'>
                <Image src= '' alt="" fill className='object-cover' />
            </div>
            <h1 className='mt-8 font-light tracking-wide text-cl'>Category name</h1>
        </Link>
        <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='w-full h-80 relative bg-slate-100'>
                <Image src= '' alt="" fill className='object-cover' />
            </div>
            <h1 className='mt-8 font-light tracking-wide text-cl'>Category name</h1>
        </Link>
        <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='w-full h-80 relative bg-slate-100'>
                <Image src= '' alt="" fill className='object-cover' />
            </div>
            <h1 className='mt-8 font-light tracking-wide text-cl'>Category name</h1>
        </Link>
        <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='w-full h-80 relative bg-slate-100'>
                <Image src= '' alt="" fill className='object-cover' />
            </div>
            <h1 className='mt-8 font-light tracking-wide text-cl'>Category name</h1>
        </Link>
       </div> 
       
    </div>
  )
}
