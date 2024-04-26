import { useContext } from 'react'
import { GameContext } from '../../../providers/GameProvider'
import { GameContextType } from '../../../types/GameContextType'
import styles from './enemyUI.module.css'

export function EnemyUI() {

  const { player2 } = useContext<GameContextType>(GameContext)

  return (
    <div className={styles.enemyUI}>
      <img src="/images/Enemy.png" alt="Player Image" className={styles.enemyImg} />
      <h1 className={styles.enemyHealth}>HP: { player2.healthPoints }</h1>
      <h2 className={styles.enemyName}>Seto Kaiba</h2>
    </div>
  )
}
