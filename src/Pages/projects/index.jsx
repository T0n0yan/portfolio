import React from "react";
import "./style.scss";
import Slider from "react-slick";

const ssss = {
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



const Projects = () => {
    return (<div className="L-projects-wrapper">
        <div className="G-container">
            <div className="L-projects-container G-flex G-align-center G-justify-between G-flex-wrap">
                <div className="card  G-text-align">
                    <div className="front G-background-cover">
                        <Slider {...ssss} className="L-projects-slider ">

                        </Slider>
                    </div>
                    <div className="back">
                        <div className="back-content ">
                            <h2>Barev Bro</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>);
};

export default Projects;
