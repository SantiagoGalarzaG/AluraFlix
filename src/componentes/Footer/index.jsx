import styles from "./Footer.module.css"
import logo from "./../Header/Logo.svg"

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={logo} alt="Logo Alura" className={styles.footerLogo} />
      <p>Desarrollado por Santiago Galarza</p>
    </footer>
  )
}


export default Footer