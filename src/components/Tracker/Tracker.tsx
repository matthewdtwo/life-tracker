import React, {useState} from "react";
import CommanderDamage from "../CommanderDamage/CommanderDamage";
import LifeTotal from "../LifeTotal/LifeTotal";
import CommanderTax from "../CommanderTax/CommanderTax";

import styles from "./Tracker.module.css"

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
