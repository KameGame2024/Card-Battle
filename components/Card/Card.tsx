import { Card as CardType } from '../../types/cardType';
import { motion } from 'framer-motion';
import styles from './Card.module.css'

type CardProps = {
  selectCard?: () => void;
  card: CardType;
  inCombat?: boolean;
}

export function Card({ selectCard, card, inCombat }: CardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <div className={styles.card} onClick={selectCard}>
        <img className={`${styles.cardImage} ${inCombat && styles.inCombat}`} src={card.img} alt="Card Image"/>
      </div>
    </motion.div>
  )
}
