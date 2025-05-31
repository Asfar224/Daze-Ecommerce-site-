"use client"

import React from 'react'

export default function Pagination() {
  return (
    <div className='w-full mt-12 flex justify-between '>
        <button className='rounded-md bg-pink-500 text-white w-22 py-2 text-sm cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200'>Previous</button>
        <button className='rounded-md bg-pink-500 text-white w-22 py-2 text-sm cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200'>Next</button>
        
    </div>
  )
}
