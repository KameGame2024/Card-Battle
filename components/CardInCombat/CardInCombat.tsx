import { GiBroadsword } from "react-icons/gi";
import { GiBorderedShield } from "react-icons/gi";

import { Card } from '../Card/Card';

import styles from './cardInCombat.module.css';

// TODO: Mirar si es posible hacer que al posar el mouse encima se vea el ataque y defensa de la carta ya que tal vez no se vea mucho en la carta
// O en vez de esto al hacer un hover se agrande cada carta tanto en la arena como en el pool

export function CardInCombat() {
  return (
    <div className={styles.cardInCombat}>
      {false && <GiBroadsword className={styles.icon} />}
      {true && <GiBorderedShield className={styles.icon} />}
      <Card />
    </div>
  )
}
