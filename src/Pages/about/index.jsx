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
             <div className="L-img-box">
               <div
                  className="L-my-img G-background-100"
                  style={{backgroundImage: `url('${myImg}')`}}
               />
             </div>
           </div>
           
           
           <div className="L-about-me ">
             <h2 className="L-name-surname">{t("name_surname")} </h2>
             <div className="L-about-title">
               <h3 className="L-about-me-title">{t("short_about_me")}</h3>
               <span className="L-about-me-desc">{t("about_me_content")}{t("job")}</span>
               <ul style={{listStyleType: "disc"}}>
                 <li>{t("teache_me")}</li>
                 <li>{t("university")}</li>
                 <li>{t("school")}</li>
                 <li>{t("klarnet")}</li>
                 {/*<li>{t("shvi")}</li>*/}
               </ul>
             </div>
           </div>
         </div>
       </div>
     </main>
  );
};

export default About;
