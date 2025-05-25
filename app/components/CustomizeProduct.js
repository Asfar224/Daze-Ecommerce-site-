"use client"
import React,{useState} from 'react'

const CustomizeProduct = ({productID, productoptions, productvarriant}) => {
    
    const [selectedOptions , setselectedOptions] = useState({});

    const handleoptselection = (optionType , choice)=>{
         setselectedOptions((prev)=>({...prev , [optionType]:choice }))
    }
 
    const isvarriantinstock =(choices)=>{
        return productvarriant.some((varriant)=>{
            const varriantchoices = varriant.choices;
            if(!varriantchoices) return false;

            return(
                Object.entries(choices).every(
                    ([key , value])=>
                        varriantchoices[key] === value )&& varriant.stock?.inStock
     
            );

        })      
    }

    return (
        <div className='flex flex-col gap-6'>
            {productoptions.map((option) => (
                <div className='flex flex-col gap-4' key={option.name}>
                    <h4 className='font-medium'>Choose a {option.name}</h4>
                    <ul className='flex item-center gap-3'>
                    {option.choices?.map((choice)=>{
                        const disabled = !isvarriantinstock({...selectedOptions, [option.name] : choice.description });
                        const selected = selectedOptions[option.name] === choice.description;
                        const clickHandler = disabled ? undefined : () => handleoptselection(option.name , choice.description)
                        return option.name === "Color" ? (
                           <li className='h-8 w-8 ring-1 rounded-full ring-gray-300 cursor-pointer relative' style={{backgroundColor:choice.value , cursor: disabled ? "not-allowed" : "pointer"}} onClick={clickHandler} key={choice.value}>
                               {selected && <div className='absolute w-10 h-10 ring-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>}
                               {disabled && <div className=' absolute w-10 h-[2px] bg-red-400 left-1/2 top-1/2 rotate-45 transform -translate-x-1/2 -translate-y-1/2 ' />}
                        </li> 
                        ) : (
                           <li onClick={clickHandler} className='ring-1 rounded-md py-1.5 px-4   ring-pink-400 text-sm' style={{cursor: disabled ? "not-allowed" : "pointer" , backgroundColor : selected ? "#ec4899" : disabled ? "#FBCFEB" : "white" ,
                             color : selected || disabled ?  "white" : "#ec4899",
                             boxShadow : disabled ? "none" : ""
                             }} key={choice.description}>{choice.description}</li> 
                        )
                      
                    })} 
                </ul>
                  
                </div>
            ) )}


            {/* Color */}
              {/* <h4 className='font-medium'>Choose a {option.name}</h4><ul className='flex item-center gap-3'>
                        <li className='h-8 w-8 ring-1 rounded-full ring-gray-300 cursor-pointer relative bg-red-500'>
                            <div className='absolute w-10 h-10 ring-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            </div>
                        </li>
                        <li className='h-8 w-8 ring-1 rounded-full ring-gray-300 cursor-pointer relative bg-blue-500'></li>
                        <li className='h-8 w-8 ring-1 rounded-full ring-gray-300  relative bg-green-500 cursor-not-allowed'>
                            <div className=' absolute w-10 h-[2px] bg-red-400 left-1/2 top-1/2 rotate-45 transform -translate-x-1/2 -translate-y-1/2 ' />
                        </li>
                    </ul> */}

            {/* Size */}
            {/* <h4 className='font-medium'> Choose a Size</h4>
            <ul className='flex items-center gap-3'>
                <li className='ring-1 rounded-md py-1.5 px-4 cursor-pointer  ring-pink-400 text-pink-500 text-sm'>Small</li>
                <li className='ring-1 rounded-md py-1.5 px-4 cursor-pointer  ring-pink-500 bg-pink-500 text-white text-sm'>Medium</li>
                <li className='ring-1 rounded-md py-1.5 px-4 ring-pink-200 text-white bg-pink-200 text-sm cursor-not-allowed'>Large</li>
            </ul> */}


        </div>
    )
}
export default CustomizeProduct;