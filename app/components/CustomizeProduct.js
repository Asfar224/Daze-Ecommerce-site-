import React from 'react'

export default function CustomizeProduct() {
  return (
    <div className='flex flex-col gap-6'>
        <h4 className='font-medium'>Choose a Color</h4>
        <ul className='flex item-center gap-3'>
            <li className='h-8 w-8 ring-1 rounded-full ring-gray-300 cursor-pointer relative bg-red-500'>
                <div className='absolute w-10 h-10 ring-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                </div>
            </li>
            <li className='h-8 w-8 ring-1 rounded-full ring-gray-300 cursor-pointer relative bg-blue-500'></li>
            <li className='h-8 w-8 ring-1 rounded-full ring-gray-300  relative bg-green-500 cursor-not-allowed'>
                <div className=' absolute w-10 h-[2px] bg-red-400 left-1/2 top-1/2 rotate-45 transform -translate-x-1/2 -translate-y-1/2 '/>
            </li>
        </ul>
        
        <h4 className='font-medium'> Choose a Size</h4>
        <ul className='flex items-center gap-3'>
            <li className='ring-1 rounded-md py-1.5 px-4 cursor-pointer  ring-pink-400 text-pink-500 text-sm'>Small</li>
            <li className='ring-1 rounded-md py-1.5 px-4 cursor-pointer  ring-pink-500 bg-pink-500 text-white text-sm'>Medium</li>
            <li className='ring-1 rounded-md py-1.5 px-4 ring-pink-200 text-white bg-pink-200 text-sm cursor-not-allowed'>Large</li>
        </ul>


    </div>
  )
}
