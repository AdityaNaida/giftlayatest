import styles from '@/components/homepage/Home.module.css';
import Link from "next/link";
import Image from "next/image";
const CategoryLinks1=()=>{
    const categoryLinks1=[
        {
            title: "Valentine's Day",
            img: "/cat1.webp",
            path: "/dynamic"
        },
        {
            title: "Anniversary",
            img: "/cat2.webp",
            path: "/dynamic"
        },
        {
            title: "Birthday",
            img: "/cat3.webp",
            path: "/dynamic"
        },
        {
            title: "Best of Plants",
            img: "/cat4.webp",
            path: "/dynamic"
        },
        {
            title: "Best of Flowers",
            img: "/cat5.webp",
            path: "/dynamic"
        },
        {
            title: "Unique Gifts",
            img: "/cat6.webp",
            path: "/dynamic"
        },
        {
            title: "For Him",
            img: "/cat7.webp",
            path: "/dynamic"
        },
        {
            title: "For Her",
            img: "/cat8.webp",
            path: "/dynamic"
        }
    ]
    return(
        <>
        <div className={styles.categoryLinks1Container}>
        {categoryLinks1.map(elem=>(
            <Link href={elem.path} key={elem.title}>
                <div className={styles.categoryImgHldr}>
                 <Image src={elem.img} alt={elem.title + "Image"} unoptimized priority height={50} width={50}/>
                </div>
                <span>{elem.title}</span>
            </Link>
        ))}
        </div>
        </>
    )
}
export default CategoryLinks1;