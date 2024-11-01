'use client';

import styles from "./blogTemplate.module.css";
import getBlogs from './blog';

export default function BlogTemplate(){
    const handleClick = async () => {
        try {
            await getBlogs();
            // Optionally, you might want to refresh the component after fetching blogs
            // This depends on how you're displaying the fetched blogs
            // You could force a re-render or update state here
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };
    return(
        <div className={styles.grid}>
            <div className={styles.left}>
                <img className={styles.blogImage} src="blog.png" />
            </div>
            <div className={styles.right}>
                <h1 className={styles.blogTitle}>I am on the right</h1>
                <p className={styles.blogText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <button onClick={handleClick}>Fetch Blogs</button>
        </div>
    )
}