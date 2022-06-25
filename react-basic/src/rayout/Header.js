import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faCubes } from "@fortawesome/free-solid-svg-icons";

import { faTwitter, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "../css/Header.module.css";
import Home from "../routes/Home";

function Header() {
  const[icon,showIcon] = useState(true);
  
  const changeIcon = () => {
    showIcon(!icon);
  }

  useEffect(() =>{
    console.log("확인 >> " + icon);
    if(icon){
      
    }
  },[icon])
  

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.navbar_logo}>
        
        <Link to="/Home"><i><FontAwesomeIcon icon= {faCubes} size="3x" /> </i> <h>Home</h></Link>
        
        <FontAwesomeIcon icon="fa-brands fa-twitter" size="3x" />
        </div>
        <ul className={icon ? styles.navbar_menu : styles.navbar_menu.active}>
          <li>Movie List</li>
          <li>contact me!</li>
        </ul>
        <ul className={icon ? styles.navbar_icons : styles.navbar_menu.active}>
          <li><FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faFacebook} /></li>
          <li><FontAwesomeIcon icon={faGithub} /></li>
          
        </ul>
        <Link to="#" className={icon? styles.bars: styles.bars.active} onClick={changeIcon}><FontAwesomeIcon icon={faBars}/></Link>
      </nav>
    </>
  );
}

export default Header;
