import styles from '@/components/homepage/Home.module.css';
import CategoryLinks1 from './CategoryLinks1';
import CategoryLinks2 from './CategoryLinks2';
const Category=()=>{
    return(
        <>
        <div className={styles.categoryContainer}>
        <CategoryLinks1/>
        <CategoryLinks2/>
        </div>
        </>
    )
}

export default Category;