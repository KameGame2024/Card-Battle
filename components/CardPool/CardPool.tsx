import styles from './cardPool.module.css'
import { CardPoolSlot } from '../CardPoolSlot/CardPoolSlot';
import { Card as CardType }  from '../../types/cardType';
import { Card } from '../Card/Card';

interface CardPoolProps {
  playerCards: CardType[];
}

export function CardPool({ playerCards }: CardPoolProps) {
  return (
    <div className={styles.cardPool}>
      {[...Array(9)].map((_, index) => (
        playerCards[index] ? (
          <Card key={index} />
        ) : (
          <CardPoolSlot key={index} />
        )
      ))}
    </div>
  )
}
