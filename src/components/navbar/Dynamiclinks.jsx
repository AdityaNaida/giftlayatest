"use client";
import styles from '@/components/navbar/Navbar.module.css';
import MenuModal from './Menumodal';
import Link from 'next/link';
import Image from 'next/image';

const Dynamiclinks=({menu, handleMenu})=>{
    const navbarLinks=[
        {
            title: 'Flowers',
            path: '/dynamic',
        },
        {
            title: 'Combos',
            path: '/dynamic',
        },
        {
            title: 'Gifts',
            path: '/dynamic',
        },
        {
            title: 'Cakes',
            path: '/dynamic',
        },
        {
            title: 'Birthday',
            path: '/dynamic',
        },
        {
            title: 'Decoration',
            path: '/dynamic',
        },
        {
            title: 'Anniversary',
            path: '/dynamic',
        },
        {
            title: 'Plants',
            path: '/dynamic',
        }
    ]

    return(
        <>
      <div className={styles.dynamicLinks}>
      {navbarLinks.map(elem=>(
        <Link href={elem.path} key={elem.title}>
            {elem.title}
        </Link>
      ))}
       </div>

       {menu?(
        <MenuModal closeMenu={handleMenu}>
       <div className={styles.dynamicLinks2}>
        <div className={styles.dynamicHeader}>
        <Image src="/icons/user-icon-blue.svg" alt='user blue icon' width={50} height={50} unoptimized/>
        <div className={styles.dynamicText}>
          <p>Hey! <span>User</span></p>
          <Link href="/">Sign In</Link>
        </div>
        </div>
      {navbarLinks.map(elem=>(
        <Link href={elem.path} key={elem.title} onClick={handleMenu}>
            {elem.title}
            <Image src="/icons/right-chev.svg" alt='right chevron image' height={25} width={25} unoptimized/>
        </Link>
      ))}
     <div className={styles.dynamicFooter}>
        <Link href="/dynamic">
            <div className={styles.dynamicImgHldr}>
             <Image src="/icons/contact-blue-icon.svg" height={30} width={30} alt='contact us icon' unoptimized/>
            </div>
            Contact Us (10:30am to 07.30pm)
        </Link>
     </div>
       </div>
       </MenuModal>
       ) : false}
   
        </>
    )
}

export default Dynamiclinks;