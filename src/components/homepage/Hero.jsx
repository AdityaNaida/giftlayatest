"use client";
import styles from '@/components/homepage/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Hero=({slider, rightArrowClick, leftArrowClick})=>{

  return(
    <>
    <div className={styles.heroContainer}>
        <span className={styles.leftChevron} onClick={leftArrowClick}><Image src="/icons/chevron-left.svg" alt='chevron left icon' height={40} width={40} /></span>
        <span className={styles.rightChevron} onClick={rightArrowClick}><Image src="/icons/chevron-right.svg" alt='chevron right icon' height={40} width={40} /></span>
        <div className={styles.heroContent} ref={slider}>
        <Link href="/dynamic">
            <Image src="/hero1.webp" height={100} width={100} alt='hero banner image' unoptimized priority/>
            </Link>
            <Link href="/dynamic">
            <Image src="/hero2.webp" height={100} width={100} alt='hero banner image' unoptimized priority/>
            </Link>
            <Link href="/dynamic">
            <Image src="/hero3.webp" height={100} width={100} alt='hero banner image' unoptimized priority/>
            </Link>
            </div>
   

    </div>
    </>
  )
}
export default Hero;