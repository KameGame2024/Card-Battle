import styles from './cardPool.module.css'
import { CardPoolSlot } from '../CardPoolSlot/CardPoolSlot';
import { Card as CardType }  from '../../types/cardType';
import { Card } from '../Card/Card';
import { GameContext } from '../../providers/GameProvider';
import { GameContextType } from '../../types/GameContextType';
import { useContext } from 'react';

interface CardPoolProps {
  playerCards: CardType[];
  playerPool: number;
}

export function CardPool({ playerCards, playerPool }: CardPoolProps) {

  const { selectCardToCombat } = useContext<GameContextType>(GameContext);

  return (
    <div className={styles.cardPool}>
      {[...Array(9)].map((_, index) => (
        playerCards[index] ? (
          <Card key={index} selectCard={() => selectCardToCombat(playerPool, index)} card={playerCards[index]} />
        ) : (
          <CardPoolSlot key={index} />
        )
      ))}
    </div>
  )
}
