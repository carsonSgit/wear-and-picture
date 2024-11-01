'use client'

import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { usePathname } from 'next/navigation'
import styles from "./nav.module.css";

const Navbar: React.FC = () => {
    const pathname = usePathname()
    return (
        <AppBar className={styles.nav} elevation={0}>
            <Toolbar>
                <h1>
                    <a href="/">
                        [~/cs{pathname}]
                    </a>
                </h1>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;