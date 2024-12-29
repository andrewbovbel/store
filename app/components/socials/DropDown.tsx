'use client'

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks";
import {
    selectProducts,
    selectAmount,
    selectTotal,
  } from "@/lib/features/store/basketSlice";



const DropDown = () => {
    
    const products = useAppSelector(selectProducts);
    const amount = useAppSelector(selectAmount);
    const total = useAppSelector(selectTotal);
        
    return (
       <div>hi</div>
    )
}

export default DropDown