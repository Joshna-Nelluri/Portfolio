import React from 'react';
// import AboutImage from '../assets/aboutme-image.png';
import AboutImage from '../assets/aboutme-Imagee.jpg'

const About = () => {
    return (
        <div id='about'>
            <div className='container'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    About Me
                </h2>
                <div className='flex-wrapper'>
                    <img src={AboutImage} alt="" className='about-image' />
                    <div className='text-container'>
                        <p className='about-text'>
                        I am eager to apply my foundational knowledge of Java, HTML, CSS, JavaScript, React, and Redux in a real-world development environment.
                        My goal is to merge my technical knowledge with a strong passion for continuous learning to contribute effectively to innovative projects.
                        I am excited to start my journey in the tech world and grow alongside talented teams.
                        </p>
                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>Java</label>
                                <div className='bar'>
                                    <div className='fill java'></div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>JavaScript</label>
                                <div className='bar'>
                                    <div className='fill javascript'></div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>HTML & CSS</label>
                                <div className='bar'>
                                    <div className='fill htmlcss'></div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>React JS</label>
                                <div className='bar'>
                                    <div className='fill reactjs'>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>Redux</label>
                                <div className='bar'>
                                    <div className='fill redux'>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='skill-bar'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss'>MySQL</label>
                                <div className='bar'>
                                    <div className='fill sql'>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='stats'>
                        <div>
                            <h3>
                                0+
                            </h3>
                            <p>Years Experience</p>
                        </div>
                        <div>
                            <h3>
                                5+
                            </h3>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <h3>
                                0+
                            </h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    </div>
                    

                </div>
                
            </div>

        </div>
    )
}

export default About;
