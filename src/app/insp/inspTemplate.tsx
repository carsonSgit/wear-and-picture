'use client';

import { useEffect, useState } from "react";
import getInspo from "./insp";
import styles from "./inspTemplate.module.css";
import ScrollingText from "@/components/ScrollingText";

interface Inspo {
    id: number;
    image: string;
    title: string;
    text: string;
    image_source: string;
    image_source_link: string;
}

export default function InspoTemplate() {
    const [inspos, setInspo] = useState<Inspo[]>([]);

    useEffect(() => {
        async function fetchInspo() {
            const fetchedInspo = await getInspo();
            setInspo(fetchedInspo || []);
        }
        fetchInspo();
    }, []);

    return (
        <div className={styles.gridContainer}>
            {inspos.map((inspo, index) => (
                <div key={inspo.id}>
                    <div className={styles.grid}>
                        <div className={styles.left}>
                            <div className={styles.imageContainer}>
                                <img className={styles.inspoImage} src={inspo.image} alt="Inspo" />
                                <h4 className={styles.inspoSubtitle}>
                                    src {inspo.image_source_link ? 
                                        <a href={inspo.image_source_link} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                                            {inspo.image_source}
                                        </a>
                                        : "== null"
                                    }
                                </h4>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <h1 className={styles.inspoTitle}>{inspo.title}</h1>
                            <p className={styles.inspoText}>{inspo.text}</p>
                        </div>
                    </div>
                    {index < inspos.length - 1 && <ScrollingText text="be%20inspired" />}
                </div>
            ))}
        </div>
    );
}
