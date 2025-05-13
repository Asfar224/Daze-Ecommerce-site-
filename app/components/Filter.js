import React from 'react'

export default function Filter() {
  return (
    <div className='mt-12 flex justify-between '>
        <div className='flex gap-6 flex-wrap'>
           <select name='Type' className='rounded-3xl px-3 py-2 text-xs font-medium bg-gray-100'>
            <option>Type</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
           </select>
           <input type='text' name='min' placeholder='min price' className='rounded-2xl ring-1 ring-gray-400 w-24 text-xs placeholder:px-3 flex items-center'/>
           <input type='text' name='max' placeholder='max price' className='rounded-2xl ring-1 ring-gray-400 w-24 text-xs placeholder:px-3 flex items-center'/>

           <select name='size' className='rounded-3xl px-4 py-2 text-xs font-medium bg-gray-100'>
            <option>Size</option>
           </select>

           <select name='Color' className='rounded-3xl px-3 py-2 text-xs font-medium bg-gray-100'>
            <option>Color</option>
            <option value="">Test</option>
           </select>

           <select name='ribbon' className='rounded-3xl px-3 py-2 text-xs font-medium bg-gray-100'>
            <option>Category</option>
            <option value="">New Arrivals</option>
            <option value="">Popular</option>
           </select>

           <select name='' className='rounded-2xl px-3 py-2 text-xs font-medium bg-gray-100'>
            <option>All filters</option>
           </select>
        </div>
        <div className=''>
        <select name='' className='rounded-3xl px-6 py-2 text-xs font-medium bg-gray-100'>
            <option>Sort By</option>
            <option value="Price (high to low)">Price (high to low)</option>
            <option value="Price (low to high)">Price (low to high)</option>
            <option value="Oldest">Oldest</option>
            <option value="Newest">Newest</option>
           </select>
        </div>
    </div>
  )
}
