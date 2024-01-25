import styles from '@/components/homepage/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Category3=()=>{
    const categor3links=[
        {
            img: "/product1.webp",
            title: "Candlelit Serenity with Buddha Showpiece",
            price: "₹ 795",
            rating: "5.0",
            reviews: 3,
            path: "/category",
            dTime: "Same Day Delivery"
        },
        {
            img: "/product2.webp",
            title: "Fathers Day Combo Of Coffee Mug With Cookies",
            price: "₹ 750",
            rating: "5.0",
            reviews: 1,
            path: "/category",
            dTime: "Next Day Delivery"
        },
        {
            img: "/product3.webp",
            title: "Bluetooth Speaker With Green Tea N Mug Combo",
            price: "₹ 4500",
            rating: "4.5",
            reviews: 20,
            path: "/category",
            dTime: "Same Day Delivery"
        },
        {
            img: "/product4.webp",
            title: "The Sweet Aroma Combo",
            price: "₹ 1900",
            rating: "4.9",
            reviews: 7,
            path: "/category",
            dTime: "Same Day Delivery"
        }
    ]
    return(
        <>
        <div className={styles.Category3wrapper}>
         <h3>Best Sellers</h3>
        <div className={styles.Category3Container}>
        {categor3links.map(elem=>(
            <Link href={elem.path} key={elem.title}>
                <div className={styles.category3ImgHldr}>
                 <Image src={elem.img} unoptimized priority width={50} height={50} alt={elem.title + "Image"}/>
                </div>
                <div className={styles.productDetails}>
                 <h4>{elem.title}</h4>
                 <p>{elem.price}</p>
                 <small><span className={styles.rating}>{elem.rating} <Image src="/rating-star.svg" height={20} width={20} alt='rating star image' unoptimized/></span><span className={styles.reviews}>({elem.reviews})</span></small>
                 <p className={styles.deliverydate}>{elem.dTime}</p>
                </div>
            </Link>
        ))}
        </div>
        </div>
        </>
    )
}

export default Category3;