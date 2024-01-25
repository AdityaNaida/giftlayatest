import styles from '@/components/homepage/Home.module.css';
import Category2content1 from './Category2content1';

const Category2=()=>{
    return(
        <>
        <div className={styles.category2}> 
        <Category2content1/>
        <Category2content1/>
        </div>
        </>
    )
}

export default Category2;