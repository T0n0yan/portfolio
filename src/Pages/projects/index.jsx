import React from 'react';
import './style.scss'
import image from '../../assets/images/Reload Logo.png'
const Projects = () => {
    return (
        <div className='L-projects-wrapper'>
            <div className="G-container">
                <div className="projects-container G-flex">
                    <div className="card ">
                        <div className="front">
                            <img src={image} alt='Rockstar logo'/>
                        </div>
                        <div className="back">
                            <div className="back-content ">
                                <h2>Barev Bro</h2>
                            </div>
                        </div>
                    </div>
                    <div className="card ">
                        <div className="front">
                            <img src={image} alt='Rockstar logo'/>
                        </div>
                        <div className="back">
                            <div className="back-content ">
                                <h2>Barev Bro</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;
