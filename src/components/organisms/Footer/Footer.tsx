// Styles
import styles from '@/styles/Footer.module.scss'

function Footer(){
  return (
    <footer className={styles.footer}>
        <a
          href="https://twitter.com/PantherAtNight"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Steven Whitton with ☕ and ❤
        </a>
      </footer>
  )
}

export default Footer