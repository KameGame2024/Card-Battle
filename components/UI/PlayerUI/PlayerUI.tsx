import { useContext } from 'react';
import { GameContext } from '../../../providers/GameProvider';
import { GameContextType } from '../../../types/GameContextType';
import styles from './playerUI.module.css'

export function PlayerUI() {

  const { player1 } = useContext<GameContextType>(GameContext);

  return (
    <div className={styles.playerUI}>
      <img src="/images/Player.png" alt="Player Image" className={styles.playerImg} />
      <div className={styles.playerHealth}>
        <h1>HP: { player1.healthPoints }</h1>
      </div>
      <div className={styles.playerName}>
        <h2 >Player</h2>
      </div>
    </div>
  )
}
