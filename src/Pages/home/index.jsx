import React from "react";
import "./style.scss";
import bgImage from "../../assets/images/BG image.jpeg";
import MyImage from "../../assets/images/photo_2022-12-06_19-25-55.jpg";
import {useTranslation} from "react-i18next";

const Home = () => {
  const {t,i18n}= useTranslation()
  return (
    <main
      className="L-home-container G-background-cover "
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="G-container ">
        <div className="L-home-wrapper  G-flex G-justify-center   G-align-center">
          <div className="L-img-cont">
            <div
              className="MyImg G-background-cover"
              style={{ backgroundImage: `url('${MyImage}')` }}
            />
          </div>
        </div>
        <div className="L-introducing-container G-flex G-justify-center G-flex-column G-align-center">
          <h1>{t('welcome_note')} </h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
