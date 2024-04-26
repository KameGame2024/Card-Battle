import { CardPool } from '../../CardPool/CardPool';
import { CombatArea } from '../../CombatArea/CombatArea';
import { Card } from '../../../types/cardType';
import { GameContext } from '../../../providers/GameProvider';
import { GameContextType } from '../../../types/GameContextType';
import { useContext } from 'react';

import styles from './arena.module.css'

export function Arena() {

  const { 
    player1,
    player2,
  } = useContext<GameContextType>(GameContext);

  const player1Cards:Card[] = player1.cardsInField;
  const player2Cards:Card[] = player2.cardsInField;

  return (
    <div className={styles.arena}>
      <CardPool playerCards={player1Cards} playerPool={1} />
      <CombatArea />
      <CardPool playerCards={player2Cards} playerPool={2}/>
    </div>
  )
}
