import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Searchbar from './Searchbar'
import NavbarIcons from './NavbarIcons'

export default function Navbar() {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      <div className='h-full flex items-center justify-between md:hidden'>
        <Link className='flex flex-row gap-3' href='/'>
          <Image src={'/applogo.png'} alt='' width={28} height={28} className='cursor-pointer' />
          <span className='text-xl tracking-widest'>DAZE</span>
        </Link>
        <Menu />
      </div>
      {/* for md screens */}
      <div className='hidden md:flex items-center justify-center gap-8 h-full'>
        <div className='w-1/3 xl:w-1/2 pr-4'>
          <div className='h-full flex  items-center justify-between'>
            <Link className='flex flex-row gap-3' href='/'>
              <Image src={'/applogo.png'} alt='' width={28} height={28} className='cursor-pointer' />
              <span className='text-xl tracking-widest'>DAZE</span></Link>
            <div className='hidden xl:flex gap-4'>
              <Link href='/'>Homepage</Link>
              <Link href='/'>shop</Link>
              <Link href='/'>Deals</Link>
              <Link href='/'>About</Link>
              <Link href='/'>Contact</Link>
            </div>
          </div>

        </div>
        <div className='w-2/3 xl:w-1/2 flex flex-row items-center gap-4' >
          <div className='flex-1'><Searchbar /></div>
          <div className='flex items-center'><NavbarIcons /></div>

        </div>
      </div>
    </div>
  )
}
