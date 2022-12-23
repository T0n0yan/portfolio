import './style.scss'
import React from 'react';

const Contacts = () => {
    return (
        <div className='L-contacts-container G-flex G-flex-column'>
            <div className="G-container">
                <div className="L-map-container G-flex G-justify-center G-align-center">
                    <p className='L-map-compass G-flex G-justify-center G-align-center'>N</p>
                    <p className='L-map-mission'>D</p>
                    <div className='L-map-box'>
                        <iframe className='L-map'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.3268455415466!2d44.04590971920245!3d40.15534607360512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aee2a4fea3083%3A0x667f5790fe1c4e06!2zNDDCsDA5JzE5LjQiTiA0NMKwMDInNDUuMCJF!5e0!3m2!1shy!2s!4v1671492259627!5m2!1shy!2s"
                        />
                    </div>
                </div>
                <div className='L-contacts-box G-flex   G-flex-column G-align-center '>

                    <div className='L-tel-number G-flex G-align-center'>
                        <a className='tel' href='tel:+37498003770'> <i className=' icon-phone '/>+374 98 003 770 </a>

                        <a className='telegram' href="https://t.me/t0n0yan" target='_blank'><i
                            className='icon-telegram'/></a>
                    </div>
                    <div className='L-socials-cont'>
                        <a href="mailto:dav.tonoyan.90@gmail.com">
                            <i className='L-gmail-logo icon-gmail'/>
                        </a>
                        <a href="https://github.com/T0n0yan" target='_blank'>
                            <i className='Github icon-github'/>
                        </a>
                        <a href="https://www.linkedin.com/in/t0n0yan/" target='_blank'>
                            <i className='L-linkedin-icon icon-linkedin'/>
                        </a>
                    </div>
                </div>
            </div>

        </div>);
};

export default Contacts;
