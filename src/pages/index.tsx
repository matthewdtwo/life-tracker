import { useState, createContext } from 'react';
import styles from '../styles/Home.module.css';
import LifeTotal from '@/components/LifeTotal';
import CommanderDamage from '@/components/CommanderDamage';
import CommanderTax from '@/components/CommanderTax';

export default function Home() {
  
  const [lifeTotal, setLifeTotal] = useState(40);
  const [commanderDamage, setCommanderDamage] = useState(0);
  const [commanderTax, setCommanderTax] = useState(0);

  return (
    <div className={styles.container}>
        <CommanderDamage commanderDamage={commanderDamage} setCommanderDamage={setCommanderDamage} />
        <LifeTotal lifeTotal={lifeTotal} setLifeTotal={setLifeTotal}/>
        <CommanderTax commanderTax={commanderTax} setCommanderTax={setCommanderTax} />
    </div>
  );
}
