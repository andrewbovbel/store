'use client'

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks";
import {
    selectProducts,
    selectAmount,
    selectTotal,
  } from "@/lib/features/store/basketSlice";

import Pottery from "./Pottery";

const BasketProducts = () => {
    
    const products = useAppSelector(selectProducts);
    const amount = useAppSelector(selectAmount);
    const total = useAppSelector(selectTotal);
        
    return (
        <div className="py-4">
            <div className="flex flex-col"> 
                {products.map( (pottery, i) => 
                    <Pottery
                        key= {i}
                        name= {pottery.name}
                        price = {pottery.price}
                        image={pottery.image}
                        amount = {pottery.amount}
                    />
                )}
            </div>

            <div className="flex flex-row items-center justify-evenly py-8">
                <p className="text-2xl font-medium">Total</p>
                <p className="text-2xl font-medium">{amount}</p>
                <p>$ {total}</p>
            </div>
        </div>
    )
}

export default BasketProducts