import { useContext } from 'react'
import { GameContext } from '../../../providers/GameProvider'
import { GameContextType } from '../../../types/GameContextType'
import styles from './info.module.css'

type InfoProps = {
  currentTurn: number
}

export function Info({ currentTurn }: InfoProps) {

  const { 
    player1,
    startCombat,
    endGame
  } = useContext<GameContextType>(GameContext)

  const readyToCombat = player1.cardInCombat.length > 0;

  return (
    <div className={styles.info}>
      <button className={styles.btn} onClick={() => endGame(2)}>Terminar Partida</button>
      <button className={styles.btn} disabled={!readyToCombat} onClick={startCombat}> Combatir </button>
      <h1 className={styles.turnText}>Turn {currentTurn}</h1>
    </div>
  )
}
