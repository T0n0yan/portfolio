import React, { useState} from 'react';
import './style.scss';
import skillsData from "./skillsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import SkillBgImage from '../../assets/images/skills background photo.jfif'

const Skill = () => {


    const [little, setLittle] = useState(null)
    const [big, setBIg] = useState(null)

    const settings = {
        slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: little
    }

    const settings2 = {
        slidesToShow: 4, slidesToScroll: 1, asNavFor: big, dots: false, centerMode: true, focusOnSelect: true
    }


    return (<div className='L-skills-wrapper G-background-cover' style={{backgroundImage: `url('${SkillBgImage}')`}}>
        <div className='G-container'>
            <div className='L-skills-container G-flex G-justify-center G-align-center'>
                <div className='L-skills-box G-flex G-flex-column '>
                    <div className='L-logo-box '>
                        <Slider {...settings} ref={(slider1) => setBIg(slider1)} className='slider-big'>
                            {skillsData.map(el => {
                                return <div key={el.id}>
                                    <div className='skill-animated-logo'>
                                        <span className={` icon-${el.name}`}/>
                                    </div>
                                    <p className='L-skill-name'>{el.title}</p>
                                </div>
                            })}
                        </Slider>


                    </div>
                    <div className='slider-little'>
                        <Slider {...settings2} ref={(slider2) => setLittle(slider2)}>
                            {skillsData.map(el => {
                                return <div key={el.id}>
                                    <span className={`icon-${el.name}`}></span>
                                </div>
                            })}
                        </Slider>
                    </div>

                </div>
            </div>
        </div>
    </div>);
};

export default Skill;
