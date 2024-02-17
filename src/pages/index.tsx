import { useEffect } from 'react';
import styles from '../styles/Main.module.css';
import { Tracker } from '@/components/Tracker/Tracker';

export default function Home() {

  useEffect(() => {
    let wakeLock: WakeLockSentinel | null = null;
  
    const requestWakeLock = async () => {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        console.log('Screen Wake Lock is active');
      } catch (err) {
        console.log('Screen Wake Lock error: ', err);
      }
    };
  
    requestWakeLock();
  
    return () => {
      if (wakeLock !== null) {
        wakeLock.release()
          .then(() => {
            console.log('Screen Wake Lock was released');
            wakeLock = null;
          });
      }
    };
  }, []);
  
  return (
    <div className={styles.container}>
        <Tracker inverted={true} />
        <Tracker inverted={false} />
    </div>
  );
}
