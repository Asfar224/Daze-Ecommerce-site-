import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

export default function ProductList() {
  return (
    <div className='flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link href={'/test'} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
            <Image src='' alt="" fill sizes="25vw" className="rounded-md object-cover absolute hover:opacity-0 transition easy duration-500"/>
            <Image src='' alt="" fill sizes="25vw" className="rounded-md object-cover absolute"/>
        </div>
        <div className='flex flex-row justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>98$</span>
        </div>
        <div className='text-sm text-gray-500 '>My description</div>
        <button className='rounded-2xl ring-1 ring-black hover:text-white hover:bg-black px-4  py-2 w-max'>Add to cart</button>
      </Link>
    </div>
  )
}
