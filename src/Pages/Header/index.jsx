import React, {useState} from 'react';
import './style.scss'
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo2.svg';
import hoverSoundMenu from '../../assets/sounds/hover.mp3';
import logoSound from '../../assets/sounds/checkpoint.mp3';

const Header = () => {
    const [hoverSound,setHoverSound] = useState(new Audio(hoverSoundMenu))
    const [checkSound,setCheckSound] = useState(new Audio(logoSound))
    const logoSoudeOn = () => {
        checkSound.play()
    }

    const handleMouseHover = () => {
            hoverSound.play()
    }

    return (
        <header className='L-header-container  '>
            <div className='G-container L-header-wrapper G-flex G-justify-between G-align-center'>
                <div className='L-logo-container ' onClick={()=> logoSoudeOn()} >
                    <Link to='/home' className='L-logo G-background-contain'
                          style={{backgroundImage: `url('${logo}')`}}>
                    </Link>
                </div>
                <div className='L-burger G-flex'>
                    <span className='burger-line'/>
                </div>
                <nav className='L-nav-container  G-flex G-justify-end '>
                    <ul className='L-nav-lists G-flex G-align-center G-justify-between '>
                        <li onClick={()=>handleMouseHover()}  ><Link to='/about'>About
                            me </Link></li>
                        <li onClick={()=>handleMouseHover()}><Link
                            to='/about'>Skills</Link></li>
                        <li onClick={()=>handleMouseHover()}  ><Link
                            to='/about'>Projects</Link></li>
                        <li onClick={()=>handleMouseHover()}  ><Link
                            to='/home'>Contacts</Link></li>
                    </ul>
                    <div className='L-languages-cont G-flex  G-align-center G-justify-center G-flex-column'>
                        <select>
                            <option value="Armenia">AM</option>
                            <option value="Russia">RU</option>
                            <option value="English">EN</option>
                        </select>
                    </div>

                </nav>
            </div>
        </header>

    );
};

export default Header;
