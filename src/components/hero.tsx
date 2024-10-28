'use client'

import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import styles from "./hero.module.css";

const Hero: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const fontSize = isSmallScreen ? '2rem' : isMediumScreen ? '3rem' : '4rem';

    return (
        <div className={styles.hero}>
            <Typography variant="h1" style={{ fontSize, fontFamily: 'Canva Sans, sans-serif', fontWeight:600 }}>
                wear<span className={styles.special}>%20</span>&<span className={styles.special}>%20</span>picture<span className={styles.special}>.</span>
            </Typography>
        </div>
    );
};

export default Hero;
