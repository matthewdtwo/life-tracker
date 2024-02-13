import React, {useState} from "react";
import CommanderDamage from "./CommanderDamage";
import LifeTotal from "./LifeTotal";
import CommanderTax from "./CommanderTax";

import styles from "../styles/Tracker.module.css"

interface Props {
    inverted: boolean; 
}

export const Tracker = ( {inverted}: Props ) => {

    const [lifeTotal, setLifeTotal] = useState(40);
    const [commanderDamage, setCommanderDamage] = useState(0);
    const [commanderTax, setCommanderTax] = useState(0);

    return (
        <div className={ inverted ? styles.trackerInverted : styles.tracker}>
            <CommanderDamage commanderDamage={commanderDamage} setCommanderDamage={setCommanderDamage} 
            lifeTotal = {lifeTotal} setLifeTotal={setLifeTotal}/>
            <LifeTotal lifeTotal={lifeTotal} setLifeTotal={setLifeTotal}/>
            <CommanderTax commanderTax={commanderTax} setCommanderTax={setCommanderTax} />
        </div>
    )};
