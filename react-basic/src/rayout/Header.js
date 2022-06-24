import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faCubes } from "@fortawesome/free-solid-svg-icons";

import { faTwitter, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "../css/Header.module.css";
import Home from "../routes/Home";

function Header() {
  const[icon,showIcon] = useState(false);
  
  const changeIcon = () => {
    showIcon(!icon);
  }

  useEffect(() =>{
    console.log("확인 >> " + icon);
  },[icon])
  

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.navbar_logo}>
        
        <Link to="/Home"><i><FontAwesomeIcon icon= {faCubes} size="3x" /> </i> <h>Home</h></Link>
        
        <FontAwesomeIcon icon="fa-brands fa-twitter" size="3x" />
        </div>
        <ul className={styles.navbar_menu}>
          <li>Movie List</li>
          <li>contact me!</li>
        </ul>
        <ul className={styles.navbar_icons}>
          <li><FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faFacebook} /></li>
          <li><FontAwesomeIcon icon={faGithub} /></li>
          
        </ul>
        <Link to="#" className={styles.bars} onClick={changeIcon}><FontAwesomeIcon icon={faBars}/></Link>
      </nav>
    </>
  );
}

export default Header;
