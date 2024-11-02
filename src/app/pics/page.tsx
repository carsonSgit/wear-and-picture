'use client';

import styles from "./pics.module.css";
import { Typewriter } from 'react-simple-typewriter';

export default function Pics(){
    return (
        <div className={styles.container}>
          <div className={styles.picsContainer}>
            <img className={styles.pics} src="pics_1.webp" />
          </div>
            <p className={styles.typewriter}>
              <Typewriter 
              words={[
                'a picture is worth a thousand words.',
                '1000 words = 1 picture.',
                'a picture is worth 1000 words.'
              ]}
              loop={true}
              cursor
              cursorStyle=">>"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={8000}
            />
          </p>
        </div>
    );
}