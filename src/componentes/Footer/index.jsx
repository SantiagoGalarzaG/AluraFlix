import styles from "./Footer.module.css"
import logo from "./../Header/logo.png"

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={logo} alt="Logo Alura" />
      <p>Desenvolvido por Lucas Gabriel</p>
    </footer>
  )
}


export default Footer