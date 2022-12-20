import React from 'react';
import './style.scss';


const Skill = () => {
    return (
        <div className='L-skills-wrapper '>
            <div className='G-container'>
                <div className='L-skills-container G-flex G-justify-center G-align-center'>
                    <div className='L-skills-box G-flex G-justify-center '>
                        <div className='L-logo-box G-flex G-flex-column G-justify-center G-align-center '>
                            <i className='L-skills-logo icon-sass'></i>
                            <p className='L-skills-title'>SCSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
