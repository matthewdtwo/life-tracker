import React from 'react';

import styles from '../styles/CommanderDamage.module.css';

interface Props {
    commanderDamage: number;
    setCommanderDamage: (value: number) => void;
    lifeTotal: number;
    setLifeTotal: (value: number) => void;
}

const CommanderDamage = ({ commanderDamage, setCommanderDamage, lifeTotal, setLifeTotal }: Props) => {

    const dealCommanderDamage = (increment: boolean) => {
        setCommanderDamage(commanderDamage + (increment ? 1 : -1)) // increment commander damage
        setLifeTotal(lifeTotal - (increment ? 1 : -1)) // decrement life total
    }

    return (
            <div className={styles.commanderDamageSection}>
                <div className={styles.commanderDamageTitle}>Damage</div>

                <div className={styles.commanderDamageDisplay}>
                    <div className={styles.commanderDamageLeft} onClick={() => dealCommanderDamage(false)}>&nbsp;</div>
                    <div className={styles.commanderDamage}>
                        {commanderDamage}
                    </div>
                    <div className={styles.commanderDamageRight} onClick={() => dealCommanderDamage(true)}>&nbsp;</div>
                </div>
            </div>
        )};

export default CommanderDamage;
