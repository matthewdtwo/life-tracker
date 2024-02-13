import styles from '../styles/Home.module.css';
import { Tracker } from '@/components/Tracker';

export default function Home() {

  return (
    <div className={styles.container}>
        <Tracker inverted={true} />
        <Tracker inverted={false} />
    </div>
  );
}
