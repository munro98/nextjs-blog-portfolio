import styles from './Footer.module.css'
import { IoLogoGithub } from 'react-icons/io5'
import NextLink from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
      <a href="https://github.com/munro98/nextjs-blog-portfolio" > <span style={{textDecoration: "underline"}}>Source Code</span> </a> &nbsp; <IoLogoGithub /> &nbsp; | &nbsp;Hosted on Netlify <img src="images/netliheart.svg" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
