import { StaticImageData } from 'next/image';
import lol1 from '/public/images/1.jpg'
import lol2 from '/public/images/2.jpg'
import lol3 from 'public/images/3.jpg'
import lol4 from 'public/images/4.jpg'
import lol5 from 'public/images/5.jpg'

import lol6 from 'public/images/6.jpg'
import lol7 from 'public/images/7.jpg'
import lol8 from '/public/images/8.jpg'
import lol9 from '/public/images/9.jpg'
import lol10 from '/public/images/10.jpg'
import lol11 from '/public/images/11.jpg'
import lol12 from '/public/images/12.jpg'
import lol13 from '/public/images/13.jpg'
import lol14 from '/public/images/14.jpg'
import lol15 from '/public/images/15.jpg'
import lol16 from '/public/images/16.jpg'
import lol17 from '/public/images/17.jpg'
import lol18 from '/public/images/18.jpg'

export interface StoreItem {
    name: string;
    price: number;
    image: StaticImageData; // Assuming `lol1`, `lol2`, etc., are strings (paths or URLs to the images)
    amount: number;
  }

export const storeData: StoreItem[] = [
    {name: "first", price: 100, image: lol1, amount: 0},
    {name: "second", price: 60, image: lol2, amount: 0},
    {name: "third", price: 100, image: lol3, amount: 0},
    {name: "fourth", price: 80, image: lol4, amount: 0},
    {name: "fifth", price: 10, image: lol5, amount: 0},
    {name: "sixth", price: 100, image: lol6, amount: 0},
    {name: "seventh", price: 100, image: lol7, amount: 0},
    {name: "eigthth", price: 100, image: lol8, amount: 0},
    {name: "ninth", price: 100, image: lol9, amount: 0},
    {name: "tenth", price: 100, image: lol10, amount: 0},
    {name: "eleventh", price: 100, image: lol11, amount: 0},
]