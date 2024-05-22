import React, { useEffect, useState } from 'react'
import { Iproduct } from '../../interface/product'
interface Props{
    id:number
}

const Productdetails = ({id}:Props)=> 
    {
    const [product,setProducts]= useState<Iproduct>();
    useEffect(()=>{
        const productDetails= async()=>{
        try{
            const res =await fetch(`https://fakestoreapi.com/products/${id}`);
            const product =await res.json();
            console.log(product);
            setProducts(product);
        }catch(error:any){
            console.log(error);
        }
    }
    productDetails()
    },[id])
  return (
    <div className="border p-5 rounded-lg space-y-5">
            <div className="flex items-center justify-center">
              <img src={product?.image} alt={product?.title} className="h-32 w-32" />
            </div>
            <div className="border-t mt-2">
              <p className="font-bold capitalize">{product?.category}</p>
              <p className="line-clamp-1">{product?.title}</p>
              <div><span className="font-bold">Rating:</span> {product?.rating.rate}, {product?.rating.count}</div>
              <p><span className="font-bold">Price:</span> {product?.price}</p>
              <p className="line-clamp-2">{product?.description}</p>
              </div>
     </div>
  )
}

export default Productdetails
