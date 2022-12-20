import React from 'react';
import './style.scss'
import ReloadLogo from '../../assets/images/Reload Logo.png'
import reloadSound from '../../assets/sounds/reloadeSound.mp3';

const Preloader = () => {
    return (
        <div className='L-loading-container G-flex G-align-center G-justify-center G-flex-column'  >
            <div className='L-reload-logo G-background-cover' style={{backgroundImage: `url('${ReloadLogo}')`}}/>
            <div className='text-typing'>
                <audio src={reloadSound} ></audio>
                <p className='name'>Created By Davit Tonoyan</p>
            </div>
        </div>
    );
};

export default Preloader;
