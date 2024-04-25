import { PlayerUI } from '../PlayerUI/PlayerUI';
import styles from './playersContainer.module.css'
import { EnemyUI } from '../EnemyUI/EnemyUI';
import { Info } from '../Info/Info';
import { GameContext } from '../../../providers/GameProvider';
import { GameContextType } from '../../../types/GameContextType';
import { useContext } from 'react';

export function PlayersContainer() {

  const { roundState } = useContext<GameContextType>(GameContext);

  return (
    <div className={styles.playersContainer}>
      <PlayerUI />
      <Info currentTurn={roundState} />
      <EnemyUI />
    </div>
  )
}
