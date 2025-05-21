import React from 'react'
import ProductImages from '../components/ProductImages'
import CustomizeProduct from '../components/CustomizeProduct'
import Add from '../components/Add'

export default function SinglePage() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 mt-10'>
        <div className='w-full lg:w-1/2 lg:sticky h-max top-20'>
           <ProductImages/>
        </div>
        {/* text */}
        <div className='w-full lg:w-1/2 flex flex-col gap-5'>
           <h1 className='text-4xl font-medium'>Product Name</h1>
           <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           <div className='h-[2px] bg-gray-100'/>
           <div className='flex items-center gap-4'>
             <h2 className='text-xl text-gray-400 line-through'>$59</h2>
             <h3 className='font-medium tex-2xl'>$ 49</h3>
           </div>
           <div className='h-[2px] bg-gray-100'/>
           <CustomizeProduct/>
           <Add/>
           <div className='h-[2px] bg-gray-100'/>
           <div className='text-sm'>
             <h4 className='font-medium mb-4'>Title</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
           <div className='text-sm'>
             <h4 className='font-medium mb-4'>Title</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
           <div className='text-sm'>
             <h4 className='font-medium mb-4'>Title</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
           <div className='text-sm'>
             <h4 className='font-medium mb-4'>Title</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
        </div>
    </div>
  )
}
