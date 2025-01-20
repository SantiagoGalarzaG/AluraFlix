import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "./Logo.svg"

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Link  to={"/"}><img src={logo} alt="Logo AluraFlix" className={styles.headerLogo}/></Link>
      <div className={styles.linkContainer}>
        <Link to={"/"}  className={styles.headerLink}>Home</Link>
        <Link to={"/novo-video"}  className={styles.headerLink}>Nuevo video</Link>
      </div>
    </div >

  )
}

export default Header