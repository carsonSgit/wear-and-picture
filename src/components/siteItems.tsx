import React from 'react';
import styles from './siteitems.module.css';

const SiteItems: React.FC = () => {
    const items = [
        { id: 1, image: 'url(/blog.png)', text: 'BLOG', link: '/page1' },
        { id: 2, image: 'url(/pics.png)', text: 'PICS', link: '/page2' },
        { id: 3, image: 'url(/insp.png)', text: 'INSP', link: '/page3' },
    ];

    return (
        <div className={styles.container}>
            {items.map(item => (
                <a
                    key={item.id}
                    href={item.link}
                    className={styles.item}
                    style={{ backgroundImage: item.image }}
                >
                    <div className={styles.overlay}>
                        <span className={styles.text}>{item.text}</span>
                    </div>
                </a>
            ))}
            
        </div>
    );
};

export default SiteItems;
