import React from 'react';
import './style.scss'
import useNavigationLoader from "../../hook/useNavigationLoader/useNavigationLoader";

const Preloader = () => {
    const {isLoading} = useNavigationLoader()

    return isLoading && (
        <div className='L-loading-bg-container  '>
        </div>
    );
};

export default Preloader;
