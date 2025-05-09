import React from 'react'
import Slider from './components/Slider'
import ProductList from './components/ProductList'
import Categories from './components/Categories'

export default function page() {
  return (
    <>
    <div><Slider/></div>
    <div className=' mt-18 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
       <span className='text-2xl font-semibold'> Featured Products</span>
      <ProductList/>
    </div>
    <div className=' mt-18 '>
      <span className='text-2xl font-semibold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'> Categories</span>
      <Categories/>
    </div>
    <div className=' mt-18 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12'>
       <span className='text-2xl font-semibold'> New Products</span>
      <ProductList/>
    </div>
      
    </>
  )
}
