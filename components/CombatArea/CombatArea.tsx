import { CardInCombat } from '../CardInCombat/CardInCombat';

import styles from './combatArea.module.css';

export function CombatArea() {
  return (
    <div className={styles.combatArea}>
      <CardInCombat />
      <h1 className={styles.combatAreaText}>VS</h1>
      <CardInCombat />
    </div>
  )
}