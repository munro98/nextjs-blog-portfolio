import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Code on github. Hosted on Netlify <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
