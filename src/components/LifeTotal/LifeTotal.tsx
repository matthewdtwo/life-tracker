import { useState, useRef } from 'react';
import NoSleep from 'nosleep.js';


import styles from './LifeTotal.module.css';

interface Props {
    lifeTotal: number;
    setLifeTotal: (value: number) => void;
}

const LifeTotal = ({ lifeTotal, setLifeTotal }: Props) => {
    const [numClicks, setNumClicks] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    var noSleep = new NoSleep();


    const handleIncrement = () => {
        noSleep.enable();        
        setLifeTotal(lifeTotal + 1);
        setNumClicks(numClicks + 1);
        startTimer();
    }

    const handleDecrement = () => {
        setLifeTotal(lifeTotal - 1);
        setNumClicks(numClicks - 1);
        startTimer();
    }

    const startTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setNumClicks(0);
        }, 2000); // 10 seconds
    }

    return (
        <div className={styles.section}>
            <div className={styles.leftSide} onClick={handleDecrement}><span className={styles.span}>-</span></div>
            <div className={styles.hoverNumber}><span className={styles.span}>{ numClicks == 0 ? undefined : numClicks}</span></div>
            <div className={styles.number}>{lifeTotal}</div>
            <div className={styles.rightSide} onClick={handleIncrement}><span className={styles.span}>+</span></div>
        </div>
    );
}

export default LifeTotal;