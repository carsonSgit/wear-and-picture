'use client'

import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { usePathname } from 'next/navigation'
import styles from "./nav.module.css";
import Link from 'next/link';

const Navbar: React.FC = () => {
    const pathname = usePathname()
    return (
        <AppBar className={styles.nav} elevation={0}>
            <Toolbar>
                <h1>
                    <Link href="/">
                        [~/cs{pathname}]
                    </Link>
                </h1>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;