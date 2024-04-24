import styles from './cardPool.module.css'
import { CardPoolSlot } from '../CardPoolSlot/CardPoolSlot';

export function CardPool() {
  return (
    <div className={styles.cardPool}>
      {[...Array(9)].map((_, index) => (
        <CardPoolSlot key={index} />
      ))}
    </div>
  )
}
