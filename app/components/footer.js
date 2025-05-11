import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 2xl:px-32 bg-gray-100 text-sm mt-24'>
      {/* // top */}
      <div className='flex flex-col md:flex-row justify-between gap-24 '>
        {/* left */}
        <div className='w-full  md:w-1/2 lg:w-1/4 flex flex-col gap-8 '>
          <Link href={'/'} className='tracking-wide text-2xl'>DAZE</Link>
          <p>
            23532 Winding way, Centeral Plaza, Willowbrook, United States
          </p>
          <span className='font-semibold'>daze@gmail.com</span>
          <span className='font-semibold'>+1 234 566 432</span>
          <div className='flex gap-4'>
            <Image src="/facebook.png" alt="" width={20} height={20}></Image>
            <Image src="/Instagram.png" alt="" width={22} height={22}></Image>
            <Image src="/pinterest.png" alt="" width={22} height={22}></Image>
            <Image src="/youtube.png" alt="" width={22} height={22}></Image>
            <Image src="/x.png" alt="" width={22} height={22}></Image>
          </div>
        </div>
        {/* Center */}
        <div className='hidden lg:flex justify-between w-1/2'>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>COMPANY</h1>
            <div className='flex flex-col gap-4'>
              <Link href={'/'}>About us</Link>
              <Link href={'/'}>Careers</Link>
              <Link href={'/'}>Affiliates</Link>
              <Link href={'/'}>Blog</Link>
              <Link href={'/'}>Contact us</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>SHOP</h1>
            <div className='flex flex-col gap-4'>
              <Link href={'/'}>New Arrivals</Link>
              <Link href={'/'}>Accesories</Link>
              <Link href={'/'}>Men</Link>
              <Link href={'/'}>Women</Link>
              <Link href={'/'}>All Products</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>HELP</h1>
            <div className='flex flex-col gap-4'>
              <Link href={'/'}>Customer Services</Link>
              <Link href={'/'}>MY Account</Link>
              <Link href={'/'}>Find a Store</Link>
              <Link href={'/'}>Legal and privacy</Link>
              <Link href={'/'}>Gift Card</Link>
            </div>

          </div>
        </div>
        {/* Bottom */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6'>
          <span className=' text-xl'>SUBSCRIBE</span>
          <p>Be the first to get the latest news about trends, promotions and much more!</p>
          <div className='flex flex-row  items-center '>
            <input type='text' placeholder='Email address' className='py-4 bg-white placeholder:px-3' />
            <button className='bg-pink-500 text-white px-4 py-4'>Join</button>
          </div>
          <span className='font-semibold tracking-wide'>Secure Payments</span>
          <div className='flex gap-4'>
            <Image src="/paypal.png" alt="" width={40} height={25}></Image>
            <Image src="/mastercard.png" alt="" width={40} height={25}></Image>
            <Image src="/skrill.png" alt="" width={40} height={25}></Image>
            <Image src="/discover.png" alt="" width={40} height={25}></Image>
            <Image src="/visa.png" alt="" width={40} height={25}></Image>
          </div>
        </div>
      </div>
      {/* // Bottom */}
      <div className='w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-16 '>
        <div className=''>
          <span className='text-gray-400 text-sm'>©️ 2025 Daze Shop</span>
        </div>
        <div className='flex flex-col md:flex-row text-sm gap-8'>
          <div className=''>
           <span className='text-gray-400 mr-4'>Language</span>
           <span className='font-medium'>United States | English</span>
          </div>
          <div>
            <span className='text-gray-400 mr-4'>Currency</span>
            <span className='font-medium'>$ USD</span>
          </div>
          
        </div>

      </div>
    </div>
  )
}
