import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import styles from "../css/Header.module.css";
import Home from "../routes/Home";

function Header() {
  const[icon,setIcon] = useState("");
  useEffect(() =>{
    setIcon("fa-thin fa-clapperboard-play")
  },[])


  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.navbar_logo}>
        
        <Link to="/Home"><i><FontAwesomeIcon icon= {faFileVideo} size="3x" /></i> Home</Link>
        <FontAwesomeIcon icon="fa-brands fa-twitter" size="3x" />
        </div>
        <ul className={styles.navbar_menu}>
          <li>무비</li>
          <li>일단1</li>
          <li>일단2</li>
        </ul>
        <ul className={styles.navbar_icons}>
          <li><FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faFacebook} /></li>
          <li><FontAwesomeIcon icon={faGithub} /></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
