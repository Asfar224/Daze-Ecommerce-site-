"use client"
import React,{useEffect, useState} from 'react'
import Add from './Add';

const CustomizeProduct = ({productID, productoptions, productvarriant}) => {
    
    const [selectedOptions , setselectedOptions] = useState({});
    const [selectedvarriant , setselectedvarriant] = useState();

    useEffect(()=>{
        const varriant = productvarriant.find((v)=>{
            const varriantchoices = v.choices;
            if(!varriantchoices) return false 
            return Object.entries(selectedOptions).every(([key , value])=> varriantchoices.choices[key] === value);
        })
        setselectedvarriant(varriant);
    },[selectedOptions , productvarriant])

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
           <Add productID= {productID} varriantID = {selectedvarriant?._id} stockNumber = {selectedvarriant?.stock?.quantity || 0}/>
        </div>
    )
}
export default CustomizeProduct;