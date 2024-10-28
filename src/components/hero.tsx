'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import styles from "./hero.module.css";
import { initTextScramble } from '@/scripts/scrambletext';

const Hero: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const fontSize = isSmallScreen ? '2rem' : isMediumScreen ? '3rem' : '4rem';

    const textSegments = ["wear", "%20", "&", "%20", "picture", "."];

    return (
        <div className={styles.hero}>
            <Typography variant="h1" style={{ fontSize, fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
                {textSegments.map((segment, index) => (
                    <span
                        key={index}
                        className={segment === "%20" || segment === "." ? styles.special : styles.segment}
                        data-value={segment}
                        ref={(ref) => {
                            if (ref) {
                                initTextScramble(ref);
                            }
                        }}
                    >
                        {segment}
                    </span>
                ))}
            </Typography>
        </div>
    );
};

export default Hero;
