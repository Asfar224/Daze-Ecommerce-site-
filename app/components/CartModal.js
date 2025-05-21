import React from 'react'
import Image from 'next/image';

export default function CartModal() {

    const cartItems = false;

    return (
        <div className='w-max absolute top-12 right-0 p-4 flex flex-col gap-6 z-10 bg-white shadow-md '>
            {cartItems ? (
                "Cart is empty"
            ) : (
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-3'>
                        <Image src='' alt='' width={88} height={126} />
                        <div className='flex flex-col items-center justify-center w-full '>
                            {/* top */}
                            <div className=''>
                                <div className='flex items-center justify-between gap-8'>
                                    <h3 className='font-semibold'>Product name</h3>
                                    <div className='p-1 text-gray-500 '>49$</div>
                                </div>
                                <div className='text-sm text-gray-500'>
                                    Available
                                </div>
                            </div>
                            {/* bottom */}
                            <div className='flex justify-between text-sm gap-21 mt-4'>
                                <span className=' text-gray-500 '>Qty 1</span>
                                <span className=' text-blue-500'>Remove</span>
                            </div>
                        </div>
                    </div>
                    {/* // bottom */}
                    <div className=''>
                      <div className='flex items-center justify-between font-semibold mt-2'>
                        <span>Subtotal</span>
                        <span>$49</span>
                      </div>
                      <p className='text-sm text-gray-500 mt-6 mb-4'>adhasl asldhal adalfjdsad fhfj</p>
                      <div className='flex justify-between text-sm'>
                        <button className='rounded-md py-2.5 px-4 ring-1 ring-gray-500'>View Cart</button>
                        <button className='rounded-md py-2.5 px-4 bg-black text-white'>Checkout</button>
                      </div>
                    </div>
                </div>

            )}
        </div>
    )
}
