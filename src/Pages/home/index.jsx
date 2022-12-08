import React from 'react';
import './style.scss'
import bgImage from '../../assets/images/BG image.jpeg'
import img from '../../assets/images/photo_2022-12-06_19-25-55.jpg'

const Home = () => {
    return (
        <main className='L-home-container G-background-cover' style={{backgroundImage: `url('${bgImage}')`}}>
            <div className='G-container '>
                <div className="L-home-wrapper  G-flex G-justify-center  ">
                    <div className='L-img-cont'>
                        <div className='img G-background-cover' style={{backgroundImage: `url('${img}')`}}/>
                    </div>
                </div>
                <div className='L-introducing-container G-flex G-justify-center'>
                    <h1>Hey ! I'm Davit </h1>
                </div>
                <div className='L-who-i-am G-flex   G-flex-column G-align-center'>

                </div>

            </div>

        </main>);
};

export default Home;
