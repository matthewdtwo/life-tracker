import React from 'react';

import styles from '../styles/CommanderDamage.module.css';

interface Props {
    commanderDamage: number;
    setCommanderDamage: (value: number) => void;
}

const CommanderDamage = ({ commanderDamage, setCommanderDamage }: Props) => {



    return (
            <div className={styles.commanderDamageSection}>
                <div className={styles.commanderDamageLeft} onClick={() => setCommanderDamage(commanderDamage - 1) }></div>
                <div className={styles.commanderDamage}>{commanderDamage}</div>
                <div className={styles.commanderDamageRight} onClick={() => setCommanderDamage(commanderDamage + 1)}></div>
            </div>)};

export default CommanderDamage;
