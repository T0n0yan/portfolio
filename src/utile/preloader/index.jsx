import React from 'react';
import usePreloader from "../../hook/useLoader";
import './style.scss'
import ReloadLogo from '../../assets/images/Reload Logo.png'
const Preloader = () => {
    const {loading} = usePreloader()
    return loading && (
        <div className='L-loading-container G-flex G-align-center G-justify-center G-flex-column'>
            <div className='L-reload-logo G-background-cover' style={{backgroundImage:`url('${ReloadLogo}')`}} />
                <div className='text-typing'>
                    <p className='name'>Created By Davit Tonoyan </p>
                </div>
        </div>
    );
};

export default Preloader;
