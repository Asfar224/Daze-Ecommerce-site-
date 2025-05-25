import React, { Suspense } from 'react'
import Image from 'next/image'
import Filter from '../components/Filter'
import { WixClientServer } from '@/app/lib/WixClientServer'
import ProductList from '../components/ProductList'



const ListPage = async({searchParams}) =>{

  const WixClient = await WixClientServer();
  const cat = await WixClient.collections.getCollectionBySlug(searchParams.cat || "all-products");

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative' >
      <div className= ' hidden md:flex px-4 justify-between gap-50 bg-pink-100 h-64'> 
         <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
           <h1 className='text-4xl font-semibold text-grey-700 leading-[48px]'>Get Upto 50% off on <br/>selected products</h1>
           <button className='rounded-3xl py-4 px-3 text-white bg-pink-500 w-max text-sm'>Buy Now</button>
         </div>
         <div className='w-1/3 relative'>
           <Image src="/woman.png"  alt="" fill className="object-contain" />
         </div>
      </div>
      <Filter/>
      <h1 className='mt-12 text-xl'>Shoes for you!</h1>
      <Suspense>
      <ProductList categoryId={cat.collection._id}  />
      </Suspense>
    </div>
  )
}

export default ListPage;