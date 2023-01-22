import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {NavLink, useLocation} from "react-router-dom";
import logo from "../../assets/images/logo2.svg";
import logoSound from "../../assets/sounds/checkpoint.mp3";
import hoverSoundMenu from "../../assets/sounds/hover.mp3";
import "../../i18n/i18next";
import "./style.scss";
import amFlag from "../../assets/images/flags/am.png";

const Header = () => {
  const {t, i18n} = useTranslation();
  const location = useLocation();
  const [click, setClick] = useState(new Audio(hoverSoundMenu));
  const [checkSound, setCheckSound] = useState(new Audio(logoSound));
  const [menu, setMenu] = useState(false);
  const [lng, setLng] = useState("en");
  const [lngFont, setLngFont] = useState("");
  
  const handleClick = () => {
    setMenu(!menu);
  };
  const logoSoudeOn = () => {
    checkSound.play();
  };
  const handleMouseHover = () => {
    click.play();
  };
  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  const handleChangeLng = (el) => {
    let selectBox = document.getElementById("selectBox");
    const selectedValue = selectBox.options[selectBox.selectedIndex].value;
    changeLng(selectedValue);
    setLngFont(selectedValue);
  };
  return (
     <>
       <div className="L-burger G-flex" onClick={handleClick}>
         <span className={`burger-line ${menu ? "burger-active" : ""}`}/>
       </div>
       <header
          className={`L-header-container ${menu ? "L-header-active" : ""} ${lngFont === "hy" ? "L-lng-font" : ""} `}>
         <div className="G-container L-header-wrapper G-flex G-justify-between G-align-center">
           <div className="L-logo-container " onClick={() => logoSoudeOn()}>
             <NavLink
                to="/home"
                className="L-logo G-background-contain"
                style={{backgroundImage: `url('${logo}')`}}
             ></NavLink>
           </div>
           <nav className="L-nav-container  G-flex G-justify-end ">
             <ul className="L-nav-lists G-flex G-align-center G-justify-between ">
               <li onClick={() => handleMouseHover()} className="Link-about">
                 <NavLink to="/about" onClick={() => setMenu(false)}>
                   {t("about_me")}
                 </NavLink>
               </li>
               <li onClick={() => handleMouseHover()} className="Link-skills">
                 <NavLink to="/skills" onClick={() => setMenu(false)}>
                   {t("skills")}
                 </NavLink>
               </li>
               <li onClick={() => handleMouseHover()} className="Link-projects">
                 <NavLink to="/projects" onClick={() => setMenu(false)}>
                   {t("projects")}
                 </NavLink>
               </li>
               <li onClick={() => handleMouseHover()} className="Link-contacts">
                 <NavLink to="/contacts" onClick={() => setMenu(false)}>
                   {t("contacts")}
                 </NavLink>
               </li>
             </ul>
           </nav>
           <div className="L-languages-cont G-flex  G-align-center G-justify-center G-flex-column">
             <select id="selectBox" onChange={(e) => {
               handleChangeLng();
             }}>
               <option value="en" className="G-background-cover AAAAA"
                       style={{backgroundImage: `url('${amFlag}')`, width: "15px", height: "15px"}}>
                 s
               </option>
               <option value="ru" className="G-background-cover AAAAA">
                 RU
               </option>
               <option value="hy" className="G-background-cover AAAAA">
                 HY
               </option>
             </select>
           </div>
         </div>
       </header>
     </>);
};

export default Header;

