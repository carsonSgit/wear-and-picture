'use client';

import styles from "./blogTemplate.module.css";
import getBlogs from './blog';
import { useEffect, useState } from "react";

interface Blog {
    id: number;
    image: string;
    title: string;
    text: string;
}

export default function BlogTemplate() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        async function fetchBlogs() {
            const fetchedBlogs = await getBlogs();
            setBlogs(fetchedBlogs || []);
        }
        fetchBlogs();
    }, []);

    return (
        <div className={styles.gridContainer}>
            {blogs.map((blog, index) => (
                <div key={blog.id}>
                    <div className={styles.grid}>
                        <div className={styles.left}>
                            <img className={styles.blogImage} src={blog.image} alt="Blog" />
                        </div>
                        <div className={styles.right}>
                            <h1 className={styles.blogTitle}>{blog.title}</h1>
                            <p className={styles.blogText}>{blog.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
