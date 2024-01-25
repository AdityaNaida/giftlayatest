import styles from '@/components/homepage/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Category4=()=>{
    return(
        <>
        <div className={styles.category4Container}>
         <h5>Category</h5>
         <p>Wide range of gifts for your celebration</p>
         <div className={styles.category4Content}>
         <div className={styles.category4Content1}>
          <div>
            <div className={styles.cat4ImgHldr}>
            <Image src="/decoration1.webp" alt='Decoration Image' height={50} width={50} unoptimized priority/>
            </div>
            <div className={styles.category4details}>
              <p>Decorations</p>
              <Link href="/category">Birthday Decoration</Link>
              <Link href="/category">Anniversary Decoration</Link>
              <Link href="/category">Welcome Baby</Link>
              <Link href="/category">Baby Shower</Link>
              <Link href="/category">Haldi Decoration</Link>
            </div>
          </div>
          <div>
          <div className={styles.cat4ImgHldr}>
            <Image src="/decoration2.webp" alt='Decoration Image' height={50} width={50} unoptimized priority/>
            </div>
            <div className={styles.category4details}>
              <p>Cakes</p>
              <Link href="/category">Chocolate Cake</Link>
              <Link href="/category">Vanila Cake</Link>
              <Link href="/category">Black Forest Cake</Link>
              <Link href="/category">Strawberry Cake</Link>
              <Link href="/category">Eggless Cake</Link>
            </div>
          </div>
         </div>
         <div className={styles.category4Content2}>
         <div>
            <div className={styles.cat4ImgHldr}>
            <Image src="/decoration3.webp" alt='Decoration Image' height={50} width={50} unoptimized priority/>
            </div>
            <div className={styles.category4details}>
              <p>Flowers</p>
              <Link href="/category">Roses</Link>
              <Link href="/category">Gerbera</Link>
              <Link href="/category">Lily</Link>
              <Link href="/category">Orchids</Link>
              <Link href="/category">Carnations</Link>
            </div>
         </div>
         <div>
            <div className={styles.cat4ImgHldr}>
            <Image src="/decoration4.webp" alt='Decoration Image' height={50} width={50} unoptimized priority/>
            </div>
            <div className={styles.category4details}>
              <p>Personalized</p>
              <Link href="/category">For Him</Link>
              <Link href="/category">For Her</Link>
              <Link href="/category">For Kids</Link>
              <Link href="/category">For Parents</Link>
              <Link href="/category">Mugs</Link>
            </div>
         </div>
         <div>
            <div className={styles.cat4ImgHldr}>
            <Image src="/decoration5.webp" alt='Decoration Image' height={50} width={50} unoptimized priority/>
            </div>
            <div className={styles.category4details}>
              <p>Plants</p>
              <Link href="/category">Lucky Bambo</Link>
              <Link href="/category">Shui Bambo</Link>
              <Link href="/category">Rosy Aglaonima</Link>
              <Link href="/category">Good Luck Pot</Link>
              <Link href="/category">Flowral Delight Hamper</Link>
            </div>
         </div>
         </div>

         </div>
        </div>
        </>
    )
}
export default Category4;