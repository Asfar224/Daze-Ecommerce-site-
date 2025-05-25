import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { WixClientServer } from '@/app/lib/WixClientServer'

const Categories = async()=> {
  
  const WixClient = await WixClientServer();
  const cat = await WixClient.collections.queryCollections().find();

  return (
    <div className='overflow-x-scroll whitespace-nowrap scroll-smooth px-4 mt-12'>
       <div className='flex gap-4 md:gap-8'>
        {cat.items.map((category)=>(
        <Link href={`/list?cat=${category.slug}`} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6' key={category._id}>
            <div className='w-full h-80 relative bg-slate-100'>
                <Image src= {category.media?.mainMedia?.image?.url || "/product.png"}  alt="" fill className='object-cover' />
            </div>
            <h1 className='mt-8 font-light tracking-wide text-cl'>{category.name}</h1>
        </Link>
        ))}
       </div> 
       
    </div>
  )
}

export default Categories;
