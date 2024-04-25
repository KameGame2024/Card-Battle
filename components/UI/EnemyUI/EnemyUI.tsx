import styles from './enemyUI.module.css'

export function EnemyUI() {
  return (
    <div className={styles.enemyUI}>
      <img src="/images/Enemy.png" alt="Player Image" className={styles.enemyImg} />
      <h1 className={styles.enemyHealth}>HP: 20000</h1>
      <h2 className={styles.enemyName}>Seto Kaiba</h2>
    </div>
  )
}
