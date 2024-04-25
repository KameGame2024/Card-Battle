import { GameContext } from '../../providers/GameProvider';
import { GameContextType } from '../../types/GameContextType';
import { CardInCombat } from '../CardInCombat/CardInCombat';

import styles from './combatArea.module.css';
import { useContext } from 'react';

export function CombatArea() {

  const { playerTurnState, player1, player2 } = useContext<GameContextType>(GameContext);

  let playerTurn = false;
  let enemyTurn = false;

  if(playerTurnState === 0) {
    playerTurn = true;
  } else {
    enemyTurn = true;
  }

  return (
    <div className={styles.combatArea}>
      <CardInCombat attackTurn={playerTurn} cardToCombat={player1.cardInCombat[0]} />
      <h1 className={styles.combatAreaText}>VS</h1>
      <CardInCombat attackTurn={enemyTurn} cardToCombat={player2.cardInCombat[0]} />
    </div>
  )
}