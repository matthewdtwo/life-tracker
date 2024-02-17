import { useEffect } from 'react';
import styles from '../styles/Main.module.css';
import { Tracker } from '@/components/Tracker/Tracker';

export default function Home() {

  useEffect(() => {
    navigator.wakeLock.request('screen').then(() => {
      console.log('Screen is locked');
    }).catch((err) => {
      console.log('Error: ', err);
    });
  }, []);
  
  return (
    <div className={styles.container}>
        <Tracker inverted={true} />
        <Tracker inverted={false} />
    </div>
  );
}
