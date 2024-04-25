import styles from './info.module.css'

type InfoProps = {
  currentTurn: number
}

export function Info({ currentTurn }: InfoProps) {
  return (
    <div className={styles.info}>
      <button className={styles.quitBtn}>Terminar Partida</button>
      <h1 className={styles.turnText}>Turn {currentTurn}</h1>
    </div>
  )
}
