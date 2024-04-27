import { useContext } from 'react';
import { GameContext } from '../../../providers/GameProvider';
import { GameContextType } from '../../../types/GameContextType';
import styles from './instructionsModal.module.css'
import { gameStates } from '../../../types/GameState';

export function InstructionsModal() {

  const { 
    inGameState,
    startGame
  } = useContext<GameContextType>(GameContext);

  return (
    <div className={`${styles.modalBackground} ${inGameState !== gameStates.INSTRUCTIONS && styles.hidden}`}>
      <div className={styles.modal}>
        <h1 className={styles.modalTitle}>Acerca Del Combate</h1>
        <p className={styles.modalContent}>
          1) La mecánica principal del juego son turnos de ataque y defensa, indicados por el ícono de espada o escudo.
          <br />
          2) En cada turno se selecciona una carta para atacar o defender, cuando estes seguro de la carta que seleccionaste
          presiona el botón de "Combatir" para confirmar tu selección y pasar al combate.
          <br />
          3) En el combate se comparan las cartas seleccionadas por ambos jugadores, la carta que está atacando compara su valor de ataque
          con el valor de defensa de la carta que está defendiendo. Si el valor de ataque es mayor, se le resta la diferencia a la vida del jugador que está defendiendo.
          <br />
          4) Luego del combate finaliza el turno, la ficha de ataque y defensa se mueve al siguiente jugador y se roba una carta del mazo.
          <br />
          5) El objetivo es llevar la vida del oponente a 0 antes de que él haga lo mismo contigo.
        </p>
        <h2 className={styles.modalSubtitle}>
          Turnos Elementales
        </h2>
        <p className={styles.modalContent}>
          Cada turno se elegirá un elemento aleatorio, si la carta que ataca tiene el elemento que se eligió, su ataque se duplica. Usa esto a tu favor para ganar ventaja en el combate. Los elementos son:
        </p>
        <div className={styles.modalIcons}>
          <img src="/atributes_icons/DARK.svg" alt="" className={styles.modalIcon} />
          <img src="/atributes_icons/DIVINE.svg" alt="" className={styles.modalIcon} />
          <img src="/atributes_icons/EARTH.svg" alt="" className={styles.modalIcon} />
          <img src="/atributes_icons/FIRE.svg" alt="" className={styles.modalIcon} />
          <img src="/atributes_icons/LIGHT.svg" alt="" className={styles.modalIcon} />
          <img src="/atributes_icons/WATER.svg" alt="" className={styles.modalIcon} />
          <img src="/atributes_icons/WIND.svg" alt="" className={styles.modalIcon} />
        </div>

        <button className={styles.modalBtn} onClick={startGame}>Estoy Listo</button>
      </div>
    </div>
  )
}
