import styles from '@/components/homepage/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
const Category2content1=()=>{
    return(
        <>
        <div className={styles.category2Content1}>
     <div className={styles.category2Content1Heading}>
     <h2>Home Gifts</h2>
     <Link href="/category">View All</Link>
     </div>
     <div className={styles.category2Boxes}>
      <div className={styles.category2Boxes1}>
        <Link href="/category"><Image src="/category1.webp" alt='category 1 image' height={50} width={50} unoptimized priority></Image>
        <span>Home Decor</span></Link>
        <Link href="/category">
        <Image src="/category2.webp" alt='category 2 image' height={50} width={50} unoptimized priority></Image>
        <span>Poster & Prints</span>
        </Link>
      </div>
      <div className={styles.category2Boxes2}>
      <Link href="/category">
      <Image src="/category3.webp" alt='category 3 image' height={50} width={50} unoptimized priority></Image>
        <span>Stationary & Desk Accesories</span>
      </Link>
        <Link href="/category">
        <Image src="/category4.webp" alt='category 4 image' height={50} width={50} unoptimized priority></Image>
        <span>Kitchen & Barware</span>
        </Link>
      </div>
     </div>
        </div>
        </>
    )
}

export default Category2content1;