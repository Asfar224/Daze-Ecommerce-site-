"use client"
import React,{useState} from 'react'
import Image from 'next/image'

export default function ProductImages() {
    
    const [index , setIndex] = useState(1);  

    const images = [
       {
        id:1,
        url: "https://images.pexels.com/photos/29352964/pexels-photo-29352964/free-photo-of-colorful-vernazza-harbor-and-buildings-from-above.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
       },{
        id:2,
        url: "https://images.pexels.com/photos/18014118/pexels-photo-18014118/free-photo-of-stars-on-night-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
       },{
        id:3,
        url: "https://images.pexels.com/photos/9024330/pexels-photo-9024330.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
       },{
        id:4,
        url: "https://images.pexels.com/photos/31264511/pexels-photo-31264511/free-photo-of-cozy-window-view-with-flowers-and-scenic-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
       }
    ]
  
  return (
    <div className=''>
        <div className='h-[500px] relative'>
           <Image src= {images[index].url} alt='' fill sizes='50vw' className='object-cover rounded-xl'/>
        </div>
        <div className='flex justify-between gap-4'>
            {images.map((img, i)=>
            <div className='w-1/4 h-32 relative gap-4 mt-8' key={img.id} onClick={()=> setIndex(i)}>
               <Image src={img.url} alt='' fill sizes='30vw' className='object-cover rounded-xl'/>
           </div>
        )}
        </div>
        
    </div>
  )
}

