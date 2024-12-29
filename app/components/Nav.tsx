"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";
import { useSelector } from "react-redux";
import { BasketSliceState } from "@/lib/features/store/basketSlice";
import { RootState } from "@/lib/store";
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartCheckoutIcon from '@material-ui/icons/ShoppingCartTwoTone'

export const Nav = () => {
  const pathname = usePathname();
  const amount = useSelector<RootState, number>((store) => store.basket.amount)

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/about" ? styles.active : ""
        }`}
        href="/about"
      >
        About
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/commission" ? styles.active : ""
        }`}
        href="/commission"
      >
        Commission
      </Link>


      <Link
        className={`${styles.link} ${
          pathname === "/store" ? styles.active : ""
        }`}
        
        href="/store"
      >
       {/* <MenuIcon/> */}
       <ShoppingCartCheckoutIcon/>
        
      </Link>

      <Link
        className={`${styles.link} ${
          pathname === "/socials" ? styles.active : ""
        }`}
        href="/socials"
      >
          <MenuIcon/>
      </Link>
      
    </nav>
  );
};
