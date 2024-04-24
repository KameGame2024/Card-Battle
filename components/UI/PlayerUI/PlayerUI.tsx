import styles from './playerUI.module.css'

export function PlayerUI() {
  return (
    <div className={styles.playerUI}>
      <img src="/images/Player.png" alt="Player Image" className={styles.playerImg} />
      <div className={styles.playerHealth}>
        <h1>HP: 20000</h1>
      </div>
      <div className={styles.playerName}>
        <h2 >Player Name</h2>
      </div>
    </div>
  )
}
