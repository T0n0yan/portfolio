import React from "react";
import {useTranslation} from "react-i18next";
import myImg from "../../assets/images/My Img.png";
import "./style.scss";


const About = () => {
  const {t, i18n} = useTranslation();
  
  return (
     <main className="L-about-me-container">
       <div className="G-container L-about-wrapper">
         <div className="L-about-description  ">
           <div className="L-img-container">
             <div
                className="L-my-img G-background-contain"
                style={{backgroundImage: `url('${myImg}')`}}
             />
           </div>
           <div className="L-about-title ">
             <h2 className='L-name-surname'>{t("name_surname")} </h2>
             <div className="L-about-me">
               <h3 className="L-about-me-title">{t("short_about_me")}</h3>
               <span className="L-about-me-desc">{t("about_me_content")}</span>
             </div>
             <div>
             </div>
           </div>
         </div>
       </div>
     </main>
  );
};

export default About;
