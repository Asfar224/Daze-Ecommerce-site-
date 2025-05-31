"use client"
import React from 'react'
import { usePathname, useSearchParams ,useRouter } from 'next/navigation'


export default function Filter() {
   
  const pathname = usePathname();
  const searchparmas = useSearchParams();
  const {replace} = useRouter();

  const handleFilterchange = (e)=>{
    const {name , value} = e.target;
    const parmas = new URLSearchParams(searchparmas);
    parmas.set(name , value);
    replace(`${pathname}?${parmas.toString()}`);

  }


  return (
    <div className='mt-12 flex justify-between '>
        <div className='flex gap-6 flex-wrap'>
           <select name='Type' className='rounded-3xl px-3 py-2 text-xs font-medium bg-gray-100' onChange={handleFilterchange}>
            <option>Type</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
           </select>
           <input type='text' name='min' placeholder='min price' className='rounded-2xl ring-1 ring-gray-400 w-24 text-xs px-3 flex items-center' onChange={handleFilterchange}/>
           <input type='text' name='max' placeholder='max price' className='rounded-2xl ring-1 ring-gray-400 w-24 text-xs px-3 flex items-center' onChange={handleFilterchange}/>

          

           <select name='cat' className='rounded-3xl px-3 py-2 text-xs font-medium bg-gray-100' onChange={handleFilterchange}>
            <option>Category</option>
            <option value="">New Arrivals</option>
            <option value="">Popular</option>
           </select>

           <select name='' className='rounded-2xl px-3 py-2 text-xs font-medium bg-gray-100' onChange={handleFilterchange}>
            <option>All filters</option>
           </select>
        </div>
        <div className=''>
        <select name='sort' className='rounded-3xl px-6 py-2 text-xs font-medium bg-gray-100' onChange={handleFilterchange}>
            <option>Sort By</option>
            <option value="desc price">Price (high to low)</option>
            <option value="asc price">Price (low to high)</option>
            <option value="desc lastUpdated">Oldest</option>
            <option value="asc lastUpdated">Newest</option>
           </select>
        </div>
    </div>
  )
}
