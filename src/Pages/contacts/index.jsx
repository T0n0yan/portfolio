import "./style.scss";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import mapNorth from '../../assets/images/radar_north.png'
const Contacts = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const contactSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      className="L-contacts-container G-flex G-align-center "
    >
      <div className="G-container">
        <div className="L-map-container G-flex G-justify-center G-align-center">
          <p className="L-map-mission">D</p>

          <div className="L-map-compass  G-background-cover" style={{backgroundImage:`url('${mapNorth}')`}} />
          <div className="L-map-box">
            <iframe
              className="L-map"
              title="Map"
              src="https://www.google.com/maps/d/u/0/embed?mid=10AVJJuvDH5Iu3dGYbIBxtsBwNcZznhU&ehbc=2E312F"
            ></iframe>
          </div>
        </div>
        <div className="L-contacts-box ">
          <div className="L-info-block">
            <div className="L-time-container">
              <p className="time">
                {dateState.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: false,
                  second: "2-digit",
                })}
              </p>
            </div>
            <div className="L-tel-number ">
              <a className="tel" href="tel:+37498003770">
                <i className=" icon-phone " />
                <p>+374 98 003 770</p>
              </a>
            </div>
          </div>
          <div className="L-socials-block">
            <div className="L-slider-cont">
              <Slider {...contactSettings} className="sliderBlock">
                <a
                  href="mailto:dav.tonoyan.90@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="Gmail icon-gmail" />
                </a>
                <a
                  href="mailto:david.tonoyan.1999@mail.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="Mail icon-mail-dot-ru" />
                </a>
                <a
                  href="https://github.com/T0n0yan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="Github icon-github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/t0n0yan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="Linkedin icon-linkedin" />
                </a>
                <a href="https://t.me/t0n0yan" target="_blank" rel="noreferrer">
                  <i className="Telegram icon-telegram" />
                </a>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
