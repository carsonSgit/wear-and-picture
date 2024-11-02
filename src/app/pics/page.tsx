import ScrollingText from "@/components/ScrollingText";
import styles from "./pics.module.css";

export default function Pics(){
    return (
        <div className={styles.container}>
          <div className={styles.picsContainer}>
            <img className={styles.pics} src="pics_1.webp" />
          </div>
        </div>
    );
}