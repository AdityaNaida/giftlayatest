import styles from '@/components/homepage/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Heromobile=()=>{
    return(
        <>
        <div className={styles.HeromobileContainer}>
        <Link href="/dynamic">
            <Image src="hero1_mobile.webp" unoptimized priority alt='hero mobile slider image' height={50} width={50}/>
        </Link>
        <Link href="/dynamic">
            <Image src="hero2_mobile.webp" unoptimized priority alt='hero mobile slider image' height={50} width={50}/>
        </Link>
        <Link href="/dynamic">
            <Image src="hero3_mobile.webp" unoptimized priority alt='hero mobile slider image' height={50} width={50}/>
        </Link>
        </div>
        </>
    )
}
export default Heromobile;