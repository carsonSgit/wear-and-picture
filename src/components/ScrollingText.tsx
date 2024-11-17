import React from 'react';
import styles from './scrollingText.module.css';

const ScrollingText: React.FC<{ text: string }> = ({ text }) => {
    const repeatedText = `${text}   `.repeat(20); 

    return (
        <div className={styles.scrollingText}>
            <div className={styles.scrollingContent}>
                <span>{repeatedText}</span>
            </div>
        </div>
    );
};

export default ScrollingText;
