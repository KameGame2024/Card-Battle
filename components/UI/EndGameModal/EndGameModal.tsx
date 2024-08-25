import { useContext } from 'react'
import { GameContextType } from '../../../types/GameContextType'
import { GameContext } from '../../../providers/GameProvider'

import styles from './endGameModal.module.css'
import { gameStates } from '../../../types/GameState';

export function EndGameModal() {

  const { 
    inGameState,
    winnerState,
    resetGame,
    playButtonSound
  } = useContext<GameContextType>(GameContext);
  

  const resetPress = () => {
    playButtonSound()
    resetGame()
  }

  const backToStorePress = () => {
    playButtonSound()
    window.location.href = 'https://kamegame.vercel.app/'
  }

  return (
    <div className={`${styles.modalBackground} ${inGameState !== gameStates.END_GAME && styles.hidden}`}>
      <div className={styles.modal}>
      { winnerState === 1 &&
        <>
        <h1 className={styles.modalTitle}>Bien jugado</h1>
        <h2 className={styles.modalSubtitle}>Tu mazo parece ser bastante fuerte</h2>
        <img className={styles.modalImage} src="/images/Win.jpg" alt="" />
        </>
        }
      { winnerState === 2 &&
        <>
        <h1 className={styles.modalTitle}>Te derrotaron</h1>
        <h2 className={styles.modalSubtitle}>Tal vez debas afinar tu mazo</h2>
        <img className={styles.modalImage} src="/images/Lose.jpg" alt="" />
        </>
      }
        <div className={styles.buttonsContainer}>
          <button className={styles.modalBtn} onClick={resetPress}>Reiniciar</button>
          <button className={styles.modalBtn} onClick={backToStorePress}>Volver a tienda</button>
        </div>
      </div>
    </div>
  )
}
