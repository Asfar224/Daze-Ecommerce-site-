import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { WixClientServer } from '@/app/lib/WixClientServer'
import DOMPurify from 'isomorphic-dompurify';


const ProductList = async({categoryId , limit}) =>{
  const PRODUCT_PER_PAGE = 20;
  const WixClient = await WixClientServer();

  if (!categoryId || categoryId.trim() === "") {
    console.warn("Invalid or missing categoryId passed to ProductList");
  }

  const res = await WixClient.products.queryProducts().eq("collectionIds",categoryId).limit(limit || PRODUCT_PER_PAGE).find();
  
  return (
    <div className='flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap'>
      {res.items.map((product) => (
      <Link href={`/${product.slug}`}
      className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' key={product._id}>
        <div className='relative w-full h-80'>
            <Image src={product?.media?.mainMedia?.image?.url || "/product.png"} alt="" fill sizes="25vw" className="rounded-md object-cover absolute z-10  hover:opacity-0 transition-opacity ease-in-out duration-500"/>
            <Image src={product?.media?.items[1]?.image?.url || "/product.png"} alt="" fill sizes="25vw" className="rounded-md object-cover absolute"/>
        </div>
        <div className='flex flex-row justify-between'>
            <span className='font-medium'>{product.name}</span>
            <span className='font-semibold'>${product.price.price}</span>
        </div>
        <div className='text-sm text-gray-500 ' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(product.additionalInfoSections.find((section) => section.title === "product Desc")?.description || ""),}}></div>
        <button className='rounded-2xl ring-1 ring-black hover:text-white hover:bg-black px-4  py-2 w-max'>Add to cart</button>
      </Link>
      ))}
    </div>
  )
}

export default ProductList;