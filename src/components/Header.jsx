import React from "react";
// import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
const Header=()=>{
  return(
    <header className={styles.header}>
      <nav>
        <img className={styles.logo} src=".\images\filmograpie_logo.png" alt="logo" />
        <div className={styles.title}>Filmographie</div>
        {/* <ul className={styles.navLinks}>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/favorites">Favoris</Link>
          </li>
        </ul> */}
      </nav>
    </header>
  )
}
export default Header;
