import React, {useState, useRef, useEffect} from 'react';
import './style.scss';
import skillsData from "./skillsData";

const Skill = () => {
    const [scrollVal, setScrollVal] = useState(0);
    const scroll = useRef(null);

    useEffect(() => {
        const handleScroll = event => {
            console.log('window.scrollY', window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<div className='L-skills-wrapper '>
        <div className='G-container'>
            <div className='L-skills-container G-flex G-justify-center G-align-center'>
                <div className='L-skills-box G-flex G-justify-center '>
                    <div className='L-logo-box  G-flex G-flex-column G-justify-center G-align-center '
                         ref={scroll}
                      >
                        {skillsData.map((el) => {
                            return <div key={el.id} className='L-skills-logo'>
                                <i className={'icon-' + el.name}/>
                                <p className=' L-skills-title'>{el.title}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default Skill;
