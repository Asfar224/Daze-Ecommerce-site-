"use client"
import React ,{useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';


export default function Searchbar() {

 const [name , setname] = useState(""); 
 const Router = useRouter();  

 const handleSearch = (e)=>{
    e.preventDefault();
   
    if(name){
       Router.push(`/list?name=${name}`)
    }


 }

  return (
    <form className='flex justify-between p-2 gap-4 bg-gray-100 rounded-md ' onSubmit={handleSearch}>
        <input type='text' placeholder='Search' className='flex-1 bg-transparent outline-none' value={name} onChange={(e)=> setname(e.target.value)}/>
        <button className='cursor-pointer'>
        <Image src='/search.png' alt = "" height={16} width={16}  />
        </button>
    
    </form>
  )
}
