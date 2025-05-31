import React from 'react'
import ProductImages from '../components/ProductImages'
import CustomizeProduct from '../components/CustomizeProduct'
import Add from '../components/Add'
import { WixClientServer } from '@/app/lib/WixClientServer'
import { notFound } from 'next/navigation'

export default async function SinglePage({ params }) {
   const WixClient = await WixClientServer();
   const products = await WixClient.products.queryProducts().eq("slug" , params.slug).find();
   
   if (!products.items[0]){
    return notFound();
   }

   const product = products.items[0];

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 mt-10'>
        <div className='w-full lg:w-1/2 lg:sticky h-max top-20'>
           <ProductImages items={product.media?.items}/>
        </div>
        {/* text */}
        <div className='w-full lg:w-1/2 flex flex-col gap-5'>
           <h1 className='text-4xl font-medium'>{product.name}</h1>
           <p className='text-gray-400'>{product.description}</p>
           <div className='h-[2px] bg-gray-100'/>
           <div className='flex items-center gap-4'>
             {product.price?.price === product.price?.discountedPrice ? (
              <h2 className='text-2xl font-medium'>${product.price?.price}</h2>
             ):(
             <><h2 className='text-xl text-gray-400 line-through'>${product.price?.price}</h2>
               <h3 className='font-medium tex-2xl'>${product.price?.discountedPrice}</h3>
             </>
            )}
             </div>
           <div className='h-[2px] bg-gray-100'/>
           { product.productOptions && product.variants ?
           <CustomizeProduct productID={product._id} productoptions={product.productOptions} productvarriant = {product.variants}/> :
           <Add productID= {product._id} varriantID = {"00000000-0000-0000-000000000000"} stockNumber={product.stock?.quantity || 0}/>
          }
           <div className='h-[2px] bg-gray-100'/>
           {product.additionalInfoSections?.map((section)=> (
             <div className='text-sm' key={section.title}>
             <h4 className=' mb-4 font-bold'>{section.title}</h4>
             <p>{section.description}</p>
           </div>
           ))}
           
           
        </div>
    </div>
  )
}
