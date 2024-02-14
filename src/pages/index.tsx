import styles from '../styles/Main.module.css';
import { Tracker } from '@/components/Tracker/Tracker';

export default function Home() {

  return (
    <div className={styles.container}>
        <Tracker inverted={true} />
        <Tracker inverted={false} />
    </div>
  );
}
