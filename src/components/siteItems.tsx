'use client';

import React from 'react';
import styles from './siteitems.module.css';
import { initTextScramble } from '../scripts/siteItemScrambler'; 

const SiteItems: React.FC = () => {
    const items = [
        { id: 1, image: 'url(/blog.png)', text: 'BLOG', link: '/page1' },
        { id: 2, image: 'url(/pics.png)', text: 'PICS', link: '/page2' },
        { id: 3, image: 'url(/insp.png)', text: 'INSP', link: '/page3' },
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
