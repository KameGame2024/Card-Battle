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
    endGame,
    currentElement,
    inCombat,
    playButtonSound
  } = useContext<GameContextType>(GameContext)

  const readyToCombat = player1.cardInCombat.length > 0;

  const finishGamePress = () => {
    playButtonSound()
    endGame(2)
  }

  const startCombatPress = () => {
    playButtonSound()
    startCombat()
  }

  return (
    <div className={styles.info}>
      <button className={styles.btn} onClick={finishGamePress}>Terminar Partida</button>
      <button className={styles.btn} disabled={!readyToCombat || inCombat} onClick={startCombatPress}> Combatir </button>
      <h1 className={styles.turnText}>Turn {currentTurn}</h1>
      <img className={styles.elementIcon} src={`/attributes_icons/${currentElement}.svg`} alt="" />
    </div>
  )
}
