"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/navbar/Navbar.module.css"
import Dynamiclinks from "./Dynamiclinks";
import Searchmodal from "./SearchModal";
import Deliverylocationmodel from './Deliverylocationmodel';
const Header=()=>{
    const [ menu, setMenu] = useState(false);
    const [search1, setSearch1] = useState(false);
    const [deliverLocation, setDeliverLocation] = useState(false);
    function menuHandler(){
        setMenu(!menu);
    }

    function deliverLocationHandler(){
        setDeliverLocation(!deliverLocation);
    }

    function searchHandler(){
        setSearch1(!search1);
        setDeliverLocation(false);
    }


    return (
        <>
        <header>
            <nav className={styles.navbar}>
            <div className={styles.menuBtn} onClick={menuHandler}>
            <Image src="/icons/hamburger-menu.svg" alt="hamburg menu" height={25} width={25} />
        </div>
        <Link className={styles.logoHldr} href="/">
        <Image src="/logo.webp" alt="Logo Image" height="55" width="100" unoptimized priority/>
    </Link>
    <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for Gifts..." />
    </div>
    <div className={styles.desktopLinks} >
        <div className={styles.locationOption} onClick={deliverLocationHandler}>
            Deliver To
        </div>
        <Link href="/">
            <Image src="/icons/shopping-cart.svg" alt="cart icon" height={30} width={30}/>
            <span>Cart</span>
        </Link>
        <Link href="/">
            <Image src="/icons/user-icon.svg" alt="cart icon" height={30} width={30}/>
            <span>Sign In</span>
        </Link>
        <Link href="/" className={styles.contactAnchor}>
            <Image src="/icons/contact-icon.svg" alt="cart icon" height={30} width={30}/>
            <span>Contact</span>
        </Link>
        <p className={styles.searchBtn} >
            <Image src="/icons/search-icon.svg" alt="search-icon" height={25} width={25} onClick={searchHandler}/>
        </p>

        <div className={styles.moreOptionBox}>
            <Image src="/icons/more-icon.svg" alt="cart icon" height={30} width={30}/>
            <span>More</span>
            <div className={styles.moreOptionBoxLinks}>
                <Link href="#">Register</Link>
                <Link href="#">Vendor Registration</Link>
                <Link href="#">Vendor Login</Link>
                <Link href="#">Seller Registration</Link>
                <Link href="#">Seller Logon</Link>
            </div>
            </div>
    </div>
    </nav>
 
    <Dynamiclinks menu={menu} handleMenu={menuHandler}/>
        </header>
        <div className={styles.deliverLocation} onClick={deliverLocationHandler}>
        <div className={styles.deliverLocationClick}>
            Deliver To
        </div>
    </div>

    {search1? (
   <Searchmodal closeSearch={searchHandler}> 
   <div className={styles.searchDiv}>
   <div className={styles.searchDivBox}>
    <input type="text" placeholder="Search for Gifts..." />
    <div>
       <Link href="/dynamic">Birthday</Link>
       <Link href="/dynamic">Decoration</Link>
    </div>
   </div>
   </div>
   </Searchmodal>
    ): false}


    {deliverLocation? (
 <Deliverylocationmodel closeDeliveryLocation={deliverLocationHandler}>
 <div className={styles.deliverLocationBox}>
<div className={styles.deliverLocationHeading}>
<p>Enter Your City Name to View Prices</p>
<Image src="/route.svg" alt="route image" height={50} width={65}/>
</div>
<div className={styles.locationOutput}>
   <input placeholder='Search Your City Name' type='text'/>
   <p>Delivered Over 200+ Cities.</p>
</div>
 </div>
 </Deliverylocationmodel>
    ): false}

        </>
    )
}

export default Header;