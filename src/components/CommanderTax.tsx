import React from 'react';

import styles from '../styles/CommanderTax.module.css';

interface Props {
    commanderTax: number;
    setCommanderTax: (value: number) => void;
}

const CommanderTax = ({ commanderTax, setCommanderTax}: Props) => {

    const dealCommanderTax = (increment: boolean) => {
        setCommanderTax(commanderTax + (increment ? 2 : -2)) // increment commander Tax
    }

    return (
            <div className={styles.commanderTaxSection}>
                <div className={styles.commanderTaxTitle}>Tax</div>

                <div>
                    <div className={styles.commanderTaxLeft} onClick={() => dealCommanderTax(false)}></div>
                    <div className={styles.commanderTaxRight} onClick={() => dealCommanderTax(true)}></div>
                </div>

                <div className={styles.commanderTax}>{commanderTax}</div>
            </div>
        )};

export default CommanderTax;
