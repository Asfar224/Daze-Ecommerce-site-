"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartModal from './CartModal';
export default function NavbarIcons() {

    const [isprofileopen , setisprofileopen] = useState(false);
    const [iscartopen , setiscartopen] = useState(false);
    const router = useRouter();

    const isloggedIn = false;

    const handleprofile = () =>{
        if(!isloggedIn){
          router.push("/login")
        }
        setisprofileopen(prev => !prev);
    }

    return (
        <div className='flex flex-row gap-4 xl-gap-6 items-center justify-center relative'>
            <div className="relative flex w-8 h-8 ">
                <Image src='/profile.png' alt="" fill className="object-contain cursor-pointer"  onClick={handleprofile}/> </div>
            {isprofileopen && (
               <div className='absolute p-4 rounded-md top-10 text-sm left-0 shadow-md'>
                 <Link href={'/'}>Profile</Link>
                 <div className='mt-2 cursor-pointer'>Logout</div>
               </div>
            )}
            <div className="relative flex w-7 h-8 "><Image src='/bell.png' alt="" fill className='cursor-pointer' /></div>
            <div className="relative flex w-8 h-9 " onClick={()=> {setiscartopen(prev=>!prev)}}>
                <Image src='/cart.png' alt="" fill className='cursor-pointer' />
                <div className='absolute -top-2 -right-3 w-6 h-6 rounded-full bg-red-400 text-white text-sm flex items-center justify-center'>2</div>
            </div>
            {iscartopen && <CartModal/>}
        </div>
    )
}
