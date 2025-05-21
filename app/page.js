// "use client"
import React, { Suspense } from 'react'
import Slider from './components/Slider'
import ProductList from './components/ProductList'
import Categories from './components/Categories'
// import { useWixClient } from '@/hooks/useWixClient'
// import { WixClientServer } from '@/app/lib/WixClientServer'

const FEATURED_PRODUCTS_CATEGORY_ID = process.env.FEATURED_PRODUCTS_CATEGORY_ID;
const HomePage = async () => {

  // const WixClient = useWixClient(); 

  // useEffect(()=>{
  //   const getProducts = async() =>{
  //     const res = await WixClient.products.queryProducts().find();
  //     console.log(res);
  //   }

  //   getProducts();

  // },[WixClient])

  // const WixClient = WixClientServer();

  // const res = await WixClient.products.queryProducts().find();
  // console.log(res);\

  return (
    <>
      <div><Slider /></div>
      <div className=' mt-18 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <span className='text-2xl font-semibold'> Featured Products</span>
        <Suspense fallback={"loading"}>
          {FEATURED_PRODUCTS_CATEGORY_ID && (
            <ProductList categoryId={FEATURED_PRODUCTS_CATEGORY_ID} limit={4} />
          )}
        </Suspense>
      </div>
      <div className=' mt-18 '>
        <span className='text-2xl font-semibold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'> Categories</span>
        <Categories />
      </div>
      <div className=' mt-18 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12'>
        <span className='text-2xl font-semibold'> New Products</span>
      </div>

    </>
  )
}

export default HomePage;
