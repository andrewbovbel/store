"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/layout.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export const Nav = () => {
  const pathname = usePathname();
  const amount = useSelector<RootState, number>((store) => store.basket.amount)

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Collection
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/about" ? styles.active : ""
        }`}
        href="/about"
      >
        Core
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
       <ShoppingCartIcon/>
        
      </Link>

      
      
    </nav>
  );
};
