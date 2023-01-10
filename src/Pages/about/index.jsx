import React from "react";
import myImg from "../../assets/images/My Img.jpg";
import "./style.scss";


const About = () => {
  return (
     <main className="L-about-me-container">
       <div className="G-container L-about-wrapper">
         <div className="L-about-description G-flex G-justify-between">
           <div className="L-img-container">
             <div
                className="L-my-img G-background-cover"
                style={{backgroundImage: `url('${myImg}')`}}
             />
           </div>
           <div className="L-about-title ">
             <h1>Davit Tonoyan </h1>
             <div>
               <h3>Shortly about me</h3>
               <p>Barev, Es 23 tarekan em , </p>
             </div>
             <div>
               <h3>Education</h3>
               <div>
                 <p>
                   Avartel em Hayastani petakan tntesagitakan hamalsarani (HPTH)
                   hashvapahakan hashvarum fakiltety 'bakalavri hastiqov'
                 </p>
                 <p>
                   Hajaxel em 2 erajshtakan dproc :Unem 9 tarva erajshtakan
                   krtutyun: Tirapteum em poxayin gorciqneri, unem shat nvajumner
                   tvyal volortum
                 </p>
               </div>
             </div>
             <div>
               <h3>Work Experience</h3>
               <p></p>
             </div>
             <div>
               <iframe
                  title="music"
                  frameborder="0"
                  style={{border: "none", backgroundColor: "black", width: "100%", height: "450px"}}
                  width="100%"
                  height="450px"
                  src="https://music.yandex.ru/iframe/#playlist/tonoyan99/1000"
               >
                 Listen to{" "}
                 <a href="https://music.yandex.ru/users/tonoyan99/playlists/1000?lang=en">
                   New playlist
                 </a>{" "}
                 — <a href="https://music.yandex.ru/users/tonoyan99">T0n0yan</a>{" "}
                 on Yandex Music
               </iframe>
             </div>
           </div>
         </div>
       </div>
     </main>
  );
};

export default About;
