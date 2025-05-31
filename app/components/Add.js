"use client"
import { handleClientScriptLoad } from 'next/script';
import React, { useState } from 'react'

export default function Add({productID , varriantID , stockNumber}) {

    const [quantity, setquantity] = useState(1);
    console.log("stock",stockNumber);
    

    const handleQuantity = (type) =>{
        if(type === "d" && quantity > 1 ){
           setquantity(prev => prev - 1)
        } else if (type === "i" && quantity < stockNumber) {
          setquantity(prev => prev + 1)
        }
    }

    return (
        <div className='flex flex-col gap-5'>
            <h4 className='font-medium'> Choose a Quantity</h4>
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-36'>
                        <button className='cursor-pointer text-xl' onClick={()=> handleQuantity("d")}>-</button>
                        {quantity}
                        <button className='cursor-pointer text-xl' onClick={()=>handleQuantity("i")}>+</button>
                    </div>
                    <div className='text-xs'>Only <span className='text-orange-500'>{stockNumber} items</span> left! <br /> {"Dont"} miss it</div>
                </div>
            <button className='ring-1 rounded-3xl ring-pink-500 text-pink-500 hover:text-white hover:bg-pink-500 text-sm px-2 py-3 w-36 disabled:bg-pink-200 disabled:cursor-not-allowed disabled:text-white '>Add to cart</button>
            </div>
        </div>
    ) 
}
