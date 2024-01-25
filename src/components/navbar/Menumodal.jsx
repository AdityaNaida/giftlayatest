"use client";
import styles from '@/components/navbar/Navbar.module.css'
const MenuModal=({children, closeMenu})=>{
    return(
        <>
        <div className={styles.menuModal} onClick={closeMenu}/>
        {children}
        </>
    )
}
export default MenuModal;