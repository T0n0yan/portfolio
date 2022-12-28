import "./style.scss";
import React, {useState, useEffect} from "react";
import bgimage from "../../assets/images/naviagtorReloadFull.jpg";
import Slider from "react-slick";

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
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div
            className="L-contacts-container "
            style={{backgroundImage: `${bgimage}`}}
        >
            <div className="G-container">
                <div className="L-map-container G-flex G-justify-center G-align-center">
                    <p className="L-map-compass G-flex G-justify-center G-align-center">
                        N
                    </p>
                    <p className="L-map-mission">D</p>
                    <div className="L-map-box">
                        <iframe
                            title="Map"
                            className="L-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.3268455415466!2d44.04590971920245!3d40.15534607360512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aee2a4fea3083%3A0x667f5790fe1c4e06!2zNDDCsDA5JzE5LjQiTiA0NMKwMDInNDUuMCJF!5e0!3m2!1shy!2s!4v1671492259627!5m2!1shy!2s"
                        />
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
                                <i className=" icon-phone "/>
                                <p>+374 98 003 770</p>
                            </a>
                        </div>
                    </div>
                    <div className="L-socials-block">
                        <div className="L-slider-cont">
                            <Slider {...contactSettings} className='sliderBlock'>
                                <a href="mailto:dav.tonoyan.90@gmail.com" target='_blank' rel="noreferrer">
                                    <i className="Gmail icon-gmail"/>
                                </a>
                                <a href="mailto:david.tonoyan.1999@mail.ru" target='_blank'  rel="noreferrer">
                                    <i className="Mail icon-mail-dot-ru"/>
                                </a>
                                <a href="https://github.com/T0n0yan" target="_blank"  rel="noreferrer">
                                    <i className="Github icon-github"/>
                                </a>
                                <a href="https://www.linkedin.com/in/t0n0yan/" target="_blank"  rel="noreferrer">
                                    <i className="Linkedin icon-linkedin"/>
                                </a>
                                <a href="https://t.me/t0n0yan" target="_blank"  rel="noreferrer">
                                    <i className="Telegram icon-telegram"/>
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
