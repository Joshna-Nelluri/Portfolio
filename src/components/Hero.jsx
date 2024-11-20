// import React from 'react';
// import HeroImage from '../assets/aboutme-Imagee.jpg';
// import Resume from '..assests/NelluriJoshnaResume.pdf';

// const Hero = () => {
//     return (
//         <div id='#hero'>
//             <div className='hero-section'>
//                 <img src={HeroImage} alt="" className='hero-image' />
//                 <h1 className='hero-title'>
//                     I'm {" "}
//                     <span className='name'>Joshna Nelluri</span>
//                     , Full-Stack Developer
//                 </h1>
//                 <p className='hero-description'>
//                     I specialize in building modern and responsive web applications.
//                 </p>
//                 <div className='hero-buttons'>
//                     <button className='btn-connect'>Connect With Me</button>
//                     <a 
//                         href="NelluriJoshnaResume.pdf" 
//                         className='btn-resume'
//                         target="_blank"  
//                         rel="noopener noreferrer"
//                     >Resume</a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero;


import React from 'react';
import HeroImage from '../assets/aboutme-Imagee.jpg';
import Resume from '../assets/NelluriJoshnaResume.pdf'; 

const Hero = () => {
    return (
        <div id='hero'>
            <div className='hero-section'>
                <img src={HeroImage} alt="Hero Image" className='hero-image' />
                <h1 className='hero-title'>
                    I'm {" "}
                    <span className='name'>Joshna Nelluri</span>
                    , Full-Stack Developer
                </h1>
                <p className='hero-description'>
                    I specialize in building modern and responsive web applications.
                </p>
                <div className='hero-buttons'>
                    <button className='btn-connect'>Connect With Me</button>
                    <a 
                        href={Resume} 
                        className='btn-resume'
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
