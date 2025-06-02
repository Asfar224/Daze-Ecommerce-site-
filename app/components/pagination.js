"use client"
import React from 'react'
import { usePathname, useSearchParams ,useRouter } from 'next/navigation'

export default function Pagination({currentPage , hasPrev , hasNext}) {

  const pathname = usePathname();
  const searchparmas = useSearchParams();
  const {replace} = useRouter();

  const createPgeURL = (pageNumber)=>{
    const parmas = new URLSearchParams(searchparmas);
    parmas.set("page", pageNumber.toString());
    replace(`${pathname}?${parmas.toString()}`);
  }
  return (
    <div className='w-full mt-12 flex justify-between '>
        <button className='rounded-md bg-pink-500 text-white w-22 py-2 text-sm cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200' disabled= {!hasPrev}
        onClick={()=> createPgeURL(currentPage -1)}>Previous</button>
        <button className='rounded-md bg-pink-500 text-white w-22 py-2 text-sm cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200' disabled={!hasNext}
        onClick={()=> createPgeURL(currentPage + 1)}>Next</button>
        
    </div>
  )
}
