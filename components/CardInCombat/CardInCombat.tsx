import { GiBroadsword } from "react-icons/gi";
import { GiBorderedShield } from "react-icons/gi";

import { Card } from '../Card/Card';
import { CardPoolSlot } from "../CardPoolSlot/CardPoolSlot";

import styles from './cardInCombat.module.css';
import { Card as CardType } from "../../types/cardType";
import { GameContext } from "../../providers/GameProvider";
import { GameContextType } from "../../types/GameContextType";
import { useContext } from "react";


type CardInCombatProps = {
  attackTurn: boolean;
  cardToCombat?: CardType;
}

export function CardInCombat({ attackTurn, cardToCombat }: CardInCombatProps) {

  const { inCombat } = useContext<GameContextType>(GameContext);

  return (
    <div className={styles.combatZone}>
      <div className={styles.cardInCombat}>
        {attackTurn && <GiBroadsword className={styles.icon} />}
        {!attackTurn && <GiBorderedShield className={styles.icon} />}
        {cardToCombat ? (
            <Card card={cardToCombat} inCombat={inCombat}/>
          ) : (
            <CardPoolSlot />
          )}
      </div>
      {cardToCombat ? (
      attackTurn ? (<h1 className={styles.combatText}>ATK: {cardToCombat?.attack}</h1>)
      : (<h1 className={styles.combatText}>DFS: {cardToCombat?.defense}</h1>)
      ) : (<h1 className={styles.combatText}></h1>)
      }
    </div>
  )
}
