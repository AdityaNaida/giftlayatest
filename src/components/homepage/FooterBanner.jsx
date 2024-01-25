import styles from '@/components/homepage/Home.module.css';
import Image from 'next/image';
const FooterBanner=()=>{
    return(
        <>
         <div className={styles.footerBanner}>
         <Image src="/hero2.webp" alt='footer banner image' height={50} width={50} unoptimized priority />
         </div>
         <div className={styles.footerBannerMobile}>
         <Image src="/hero2_mobile.webp" alt='footer banner image' height={50} width={50} unoptimized priority />
         </div>
        </>
    )
}
export default FooterBanner;