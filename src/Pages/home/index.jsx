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
                    <h1>Hey! My name Is Davit </h1>
                </div>
                <div className='L-who-i-am G-flex   G-flex-column G-align-center'>
                    <div className='L-desc-title G-flex G-justify-center G-align-center'>
                        <span>Who I am</span>
                    </div>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin
                        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                        1.10.33
                        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                        This
                        book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
                        of
                        Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to
                        popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                        Latin
                        literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                        from
                        a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                        Bonorum
                        et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
                        on
                        the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>
            </div>
        </main>);
};

export default Home;
