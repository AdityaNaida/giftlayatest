"use client";
import styles from '@/components/navbar/Navbar.module.css';
const Deliverylocationmodel=({children, closeDeliveryLocation})=>{
    return(
        <>
        <div  className={styles.deliverModal} onClick={closeDeliveryLocation}/>
        {children}
        </>
    )
}

export default Deliverylocationmodel;