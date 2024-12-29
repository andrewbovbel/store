import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from 'next/image';
import { StoreItem } from "./Data";
import { decrementAmount, incrementAmount, removeItem} from "@/lib/features/store/basketSlice";



const Pottery = ({name, price, image, amount}: StoreItem) => {

   const dispatch =  useAppDispatch();

   return (
    <>
      <div className="flex flex-row items-center gap-8 px-1">
         <Image
            className="w-100"
            src={image} // Route of the image file
            height={100} // Desired size with correct aspect ratio
            width={100} // Desired size with correct aspect ratio
            alt="Your Name" />
         <div className="w-1/2 px-10">
            <p className="text-xl font-medium">{name}</p>
            <p className="text-lg tracking-wide">$ {price.toFixed(2)}</p>
            <button 
               className="text-red-500 tracking-wide pt-1 pb-3"
               onClick={() => {dispatch(removeItem({name}))}}
            >Remove</button>
         </div>
         <div className="flex flex-col items-center">
            <p className="text-lg font-medium">Amount</p>
            <div className="flex flex-row items-center gap-4 text-gray-600 font-medium">
               <button className="text-lg"
                   onClick={() => {dispatch(decrementAmount({name}))}}
               >-</button>
               <p>{amount}</p>
               <button className="text-lg"
                  onClick={() => {dispatch(incrementAmount({name}))}}
               >+</button>
            </div>
           
         </div>
       </div></>
   )
}

export default Pottery