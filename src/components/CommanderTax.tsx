import React from 'react';

import styles from '../styles/CommanderTax.module.css';

interface Props {
    commanderTax: number;
    setCommanderTax: (value: number) => void;
}

const CommanderTax = ({ commanderTax, setCommanderTax }: Props) => {
    return (
        <div className={styles.commanderTaxSection}>
            <div className={styles.commanderTaxLeft} onClick={() => {setCommanderTax(commanderTax -2)}}></div>
            <div className={styles.commanderTax}>{commanderTax}</div>
            <div className={styles.commanderTaxRight} onClick={() => {setCommanderTax(commanderTax +2)}}></div>
        </div>
    )};

export default CommanderTax;

    