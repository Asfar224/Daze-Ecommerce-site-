import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { WixClientServer } from '@/app/lib/WixClientServer'
import DOMPurify from 'isomorphic-dompurify';
import Pagination from './pagination';


const ProductList = async({categoryId , limit , searchparmas}) =>{

  const searchprms = await searchparmas;
  const page = parseInt(searchprms?.page || "1");
  const PRODUCT_PER_PAGE = limit || 8;
  const WixClient = await WixClientServer();

  const offset = (page - 1) * PRODUCT_PER_PAGE

  if (!categoryId || categoryId.trim() === "") {
    console.warn("Invalid or missing categoryId passed to ProductList");
  }

  const productQuery =  WixClient.products.queryProducts().startsWith("name",searchprms?.name || "").
  hasSome("productType" , [searchprms?.Type || "digital" , "physical"] ).
  gt("priceData.price" , searchprms?.min || 0).
  lt("priceData.price" , searchprms?.max || 99999).eq("collectionIds",categoryId).
  limit(PRODUCT_PER_PAGE).skip(offset)

  if(searchprms?.sort){
    const [sortType , sortBy] = searchprms?.sort.split(" ");

    if(sortType === "asc"){
      productQuery.ascending(sortBy)
    }
    if(sortType === "desc"){
      productQuery.descending(sortBy)
    }
  }

  const res = await productQuery.find();

  const total = res._totalCount;
  const limitUsed = res._limit || PRODUCT_PER_PAGE;

  const currentPage = Math.floor(offset / limitUsed) + 1;
  const hasNext = offset + limitUsed < total;
  const hasPrev = offset > 0;


  
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
      <Pagination currentPage={currentPage || 0} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}

export default ProductList;