import styles from './Card.module.css'

export function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src="https://i.pinimg.com/564x/69/79/8f/69798f4101de9a75d9a08a666bf4e339.jpg" alt="Card Image"/>
    </div>
  )
}
