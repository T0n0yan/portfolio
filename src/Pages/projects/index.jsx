import React from "react";
import "./style.scss";
import Slider from "react-slick";
import {ProjectsData} from "./projects.data";


const projects_slider = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
        },
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};



const Projects = () => {
    return (<div className="L-projects-wrapper">
        <div className="G-container">
            <div className="L-projects-container G-flex G-align-center G-justify-between G-flex-wrap">
                {ProjectsData.map((el) => {
                    return (
                        <div key={el.id} className="card G-flex G-flex-wrap G-text-align">
                            <div className="front   G-background-cover">
                                <Slider {...projects_slider} className="L-projects-slider  ">
                                    {ProjectsData.map(() => {
                                        return (
                                            el.img.map((i) => {
                                                return (<div key={i.id} style={{width: '500px', height: '300px'}}>
                                                    <img src={i.img}
                                                         style={{
                                                             width: '100%',
                                                             height: '300px',
                                                             border: '1px solid red',
                                                         }}/>
                                                </div>)
                                            }))
                                    })}
                                </Slider>
                            </div>
                            <div className="back">
                                <div className="back-content ">
                                    <h2>{el.description}</h2>
                                </div>
                            </div>
                        </div>)
                })}
            </div>

        </div>
    </div>);
};

export default Projects;
