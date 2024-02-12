import { useState } from 'react';
import styles from '../styles/Home.module.css';

import NoSleep from 'nosleep.js';



export default function Home() {

  const [topNumber, setTopNumber] = useState(40);
  const [bottomNumber, setBottomNumber] = useState(40);

  const [topCommanderDamage, setTopCommanderDamage] = useState(0);
  const [bottomCommanderDamage, setBottomCommanderDamage] = useState(0);

  const handleTopClick = (increment: boolean) => {
    setTopNumber((prev) => prev + (increment ? 1 : -1));
  }
  const handleBottomClick = (increment: boolean) => {
    setBottomNumber((prev) => prev + (increment ? 1 : -1));
  }

  const handleTopCommanderDamage = (increment: boolean) => {
    setTopCommanderDamage((prev) => prev + (increment ? 1 : -1));
  }

  const handleBottomCommanderDamage = (increment: boolean) => {
    setBottomCommanderDamage((prev) => prev + (increment ? 1 : -1));
  }

  return (
    <div className={styles.container}>
      <div className={styles.section} style={{ transform: 'rotate(180deg)' }}>

        <div className={styles.commanderDamageSection}>
          <div className={styles.commanderDamageLeft} onClick={() => handleTopCommanderDamage(false)}></div>
          <div className={styles.commanderDamage}>{topCommanderDamage}</div>
          <div className={styles.commanderDamageRight} onClick={() => handleTopCommanderDamage(true)}></div>
        </div>

        <div className={styles.leftSide} onClick={() => handleTopClick(false)}></div>
        <div className={styles.number}>{topNumber}</div>
        <div className={styles.rightSide} onClick={() => handleTopClick(true)}></div>
      </div>
      
      
      { /* bottom half */ }


      <div className={styles.section}>        
        <div className={styles.commanderDamageSection}>
          <div className={styles.commanderDamageLeft} onClick={() => handleBottomCommanderDamage(false)}></div>
          <div className={styles.commanderDamage}>{bottomCommanderDamage}</div>
          <div className={styles.commanderDamageRight} onClick={() => handleBottomCommanderDamage(true)}></div>
        </div>

        <div className={styles.leftSide} onClick={() => handleBottomClick(false)}></div>
        <div className={styles.number}>{bottomNumber}</div>
        <div className={styles.rightSide} onClick={() => handleBottomClick(true)}></div>
      </div>
    </div>
  );
}
