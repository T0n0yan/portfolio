import React from "react";
import "./style.scss";
import image from "../../assets/images/Reload Logo.png";
import Slider from "react-slick";


const projectsSettings = {
    dots: true,
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    autoplay: false,
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


const Projects = () => {
    return (
        <div className="L-projects-wrapper">
            <div className="G-container">
                {/*<Slider {...projectsSettings} >*/}
                    <div className="L-projects-container G-flex G-align-center G-justify-between G-flex-wrap">
                        <div className="card  G-text-align">
                            <div className="front">
                                <img src={image} alt="Rockstar logo"/>
                            </div>
                            <div className="back">
                                <div className="back-content ">
                                    <h2>Barev Bro</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card  G-text-align">
                            <div className="front">
                                <img src={image} alt="Rockstar logo"/>
                            </div>
                            <div className="back">
                                <div className="back-content ">
                                    <h2>Barev Bro</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card  G-text-align">
                            <div className="front">
                                <img src={image} alt="Rockstar logo"/>
                            </div>
                            <div className="back">
                                <div className="back-content ">
                                    <h2>Barev Bro</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*</Slider>*/}

            </div>
        </div>
    );
};

export default Projects;
