import { GiBroadsword } from "react-icons/gi";
import { GiBorderedShield } from "react-icons/gi";

import { Card } from '../Card/Card';
import { CardPoolSlot } from "../CardPoolSlot/CardPoolSlot";

import styles from './cardInCombat.module.css';
import { Card as CardType } from "../../types/cardType";


type CardInCombatProps = {
  attackTurn: boolean;
  cardToCombat?: CardType;
}

export function CardInCombat({ attackTurn, cardToCombat }: CardInCombatProps) {
  return (
    <div className={styles.cardInCombat}>
      {attackTurn && <GiBroadsword className={styles.icon} />}
      {!attackTurn && <GiBorderedShield className={styles.icon} />}
      {cardToCombat ? (
          <Card card={cardToCombat}/>
        ) : (
          <CardPoolSlot />
        )}
    </div>
  )
}
