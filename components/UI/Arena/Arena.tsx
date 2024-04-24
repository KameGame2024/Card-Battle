import { CardPool } from '../../CardPool/CardPool';
import styles from './arena.module.css'
import { CombatArea } from '../../CombatArea/CombatArea';

export function Arena() {
  return (
    <div className={styles.arena}>
      <CardPool />
      <CombatArea />
      <CardPool />
    </div>
  )
}
