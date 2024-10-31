import styles from "./blogTemplate.module.css";

export default function BlogTemplate(){
    return(
        <div className={styles.grid}>
            <div className={styles.left}>
                <img className={styles.leftImage} src="blog.png" />
                <h1>I am on the left</h1>
            </div>
            <div className={styles.right}>
                <h1>I am on the right</h1>
            </div>
        </div>
    )
}