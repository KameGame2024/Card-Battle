import { PlayerUI } from '../PlayerUI/PlayerUI';
import styles from './playersContainer.module.css'
import { EnemyUI } from '../EnemyUI/EnemyUI';

export function PlayersContainer() {
  return (
    <div className={styles.playersContainer}>
      <PlayerUI />
      <EnemyUI />
    </div>
  )
}
