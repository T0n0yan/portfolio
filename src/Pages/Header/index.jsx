import React, {useState} from 'react';
import './style.scss'
import { NavLink, useLocation} from "react-router-dom";
import logo from '../../assets/images/logo2.svg';
import hoverSoundMenu from '../../assets/sounds/hover.mp3';
import logoSound from '../../assets/sounds/checkpoint.mp3';

const Header = () => {
    const location = useLocation()
    const [click, setClick] = useState(new Audio(hoverSoundMenu))
    const [checkSound, setCheckSound] = useState(new Audio(logoSound))
    const [menu,setMenu] = useState(false)


    const handleClick =()=> {
        setMenu(!menu)

    }

    const logoSoudeOn = () => {
        checkSound.play()
    }

    const handleMouseHover = () => {
        click.play()
    }

    return (
        <>
            <div className='L-burger G-flex' onClick={handleClick}>
                <span className={`burger-line ${menu ? 'burger-active' : ''}`}/>
            </div>
            <header className={`L-header-container ${menu ? 'L-header-active' : ''} `}>
                <div className='G-container L-header-wrapper G-flex G-justify-between G-align-center'>
                    <div className='L-logo-container ' onClick={() => logoSoudeOn()}>
                        <NavLink to='/home' className='L-logo G-background-contain'
                                 style={{backgroundImage: `url('${logo}')`}}>
                        </NavLink>
                    </div>
                    <nav className='L-nav-container  G-flex G-justify-end '>
                        <ul className='L-nav-lists G-flex G-align-center G-justify-between '>
                            <li onClick={() => handleMouseHover()}>
                                <NavLink to='/about'>About me </NavLink>
                            </li>
                            <li onClick={() => handleMouseHover()}><NavLink
                                to='/log'>Skills</NavLink></li>
                            <li onClick={() => handleMouseHover()}><NavLink
                                to='/aaa'>Projects</NavLink></li>
                            <li onClick={() => handleMouseHover()}><NavLink
                                to='/sss'>Contacts</NavLink></li>
                        </ul>
                    </nav>
                    <div className='L-languages-cont G-flex  G-align-center G-justify-center G-flex-column'>
                        <select>
                            <option value="Armenia">AM</option>
                            <option value="Russia">RU</option>
                            <option value="English">EN</option>
                        </select>
                    </div>
                </div>
            </header>
        </>


    );
};

export default Header;
