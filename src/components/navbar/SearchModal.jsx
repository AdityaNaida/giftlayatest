"use client";
import styles from '@/components/navbar/Navbar.module.css';
const Searchmodal=({children, closeSearch})=>{
    return(
        <>
  <div className={styles.searchBackdrop} onClick={closeSearch}/>
      {children}
        </>
    )
}

export default Searchmodal;