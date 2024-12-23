'use client';

import React from 'react';
import styles from './siteitems.module.css';
import { initTextScramble } from '../scripts/siteItemScrambler'; 

const SiteItems: React.FC = () => {
    const items = [
        { id: 1, image: 'url(/blog.webp)', text: 'BLOG', link: '/blog' },
        { id: 2, image: 'url(/pics.webp)', text: 'PICS', link: '/pics' },
        { id: 3, image: 'url(/insp.webp)', text: 'INSP', link: '/insp' },
    ];

    return (
        <div className={styles.container}>
            {items.map(item => (
                <div
                    key={item.id}
                    className={styles.item}
                    style={{ backgroundImage: item.image, fontFamily: 'JetBrains Mono, monospace' }}
                >
                    <div className={styles.overlay}>
                        <a href={item.link}>
                                <span 
                                    className={styles.text}
                                    data-value={item.text}
                                    ref={(ref) => {
                                        if (ref) {
                                            initTextScramble(ref);
                                        }
                                    }}
                                >
                                {item.text}
                            </span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SiteItems;
