import { Card as CardType } from '../../types/cardType';
import styles from './Card.module.css'

type CardProps = {
  selectCard?: () => void;
  card: CardType;
}

export function Card({ selectCard, card }: CardProps) {
  return (
    <div className={styles.card} onClick={selectCard}>
      <img className={styles.cardImage} src={card.img} alt="Card Image"/>
    </div>
  )
}
