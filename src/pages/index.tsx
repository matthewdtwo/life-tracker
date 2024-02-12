import { useState } from 'react';
import styles from '../styles/Home.module.css';

import NoSleep from 'nosleep.js';



export default function Home() {

  const noSleep = new NoSleep();

  const [topNumber, setTopNumber] = useState(40);
  const [bottomNumber, setBottomNumber] = useState(40);

  const handleTopClick = (increment: boolean) => {
    setTopNumber((prev) => prev + (increment ? 1 : -1));
  }
  const handleBottomClick = (increment: boolean) => {
    setBottomNumber((prev) => prev + (increment ? 1 : -1));
  }

  return (
    <div className={styles.container}>
      <div className={styles.section} style={{ transform: 'rotate(180deg)' }}>
        <div className={styles.leftSide} onClick={() => handleTopClick(false)}></div>
        <div className={styles.number}>{topNumber}</div>
        <div className={styles.rightSide} onClick={() => handleTopClick(true)}></div>
      </div>
      <div className={styles.section}>
        <div className={styles.leftSide} onClick={() => handleBottomClick(false)}></div>
        <div className={styles.number}>{bottomNumber}</div>
        <div className={styles.rightSide} onClick={() => handleBottomClick(true)}></div>
      </div>
    </div>
  );
}
