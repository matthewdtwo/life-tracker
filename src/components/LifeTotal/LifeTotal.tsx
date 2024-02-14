import React from 'react';

import styles from './LifeTotal.module.css';

interface Props {
    lifeTotal: number;
    setLifeTotal: (value: number) => void;
}

const LifeTotal = ({ lifeTotal, setLifeTotal }: Props) => {
    return (
        <div className={styles.section}>
            <div className={styles.leftSide} onClick={() => {setLifeTotal(lifeTotal -1)}}><span className={styles.span}>-</span></div>
            <div className={styles.number}>{lifeTotal}</div>
            <div className={styles.rightSide} onClick={() => {setLifeTotal(lifeTotal +1)}}><span className={styles.span}>+</span></div>
        </div>
    );
};

export default LifeTotal;