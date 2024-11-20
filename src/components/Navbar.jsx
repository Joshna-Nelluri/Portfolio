
import React, { useState } from 'react';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const handleLinkClick = (e) => {
        // console.log(e, 'clicked')
     
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }

  
        if (window.innerWidth <= 650) {
            setIsMenuOpen(false);
        }

        setIsMenuOpen(false);
        
        e.preventDefault();
    };

    return (
        <nav id='navbar'>
            <div className="container">
                <div className="brand">Joshna</div>

             
                <div className="nav-links">
                    <a href="#home" onClick={handleLinkClick}>Home</a>
                    <a href="#about" onClick={handleLinkClick}>About Me</a>
                    <a href="#services" onClick={handleLinkClick}>Services</a>
                    <a href="#projects" onClick={handleLinkClick}>Projects</a>
                    <a href="#contact" onClick={handleLinkClick}>Contact</a>
                </div>

               
                <button className="connect-button">Connect me</button>

               
                <a className="menu-bar" >
                    <i className="fa fa-bars" onClick={toggleMenu}></i>
                </a>

                
                {isMenuOpen && (
                    <div className="mobile">
                        <div className="nav">
                            <a href="#navbar" onClick={handleLinkClick}>Home</a>
                            <a href="#about" onClick={handleLinkClick}>About Me</a>
                            <a href="#services" onClick={handleLinkClick}>Services</a>
                            <a href="#projects" onClick={handleLinkClick}>Projects</a>
                            <a href="#contact" onClick={handleLinkClick}>Contact</a>
                        </div>
                        <button className="connect-btn" onClick={handleLinkClick}>Connect me</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;



// import React from 'react'

// const Navbar = () => {
//     return (

//         <nav id='navbar'>
//             <div className='container'>
//                 <div className='brand'>
//                     Joshna
//                 </div>
//                 <div className='nav-links'>
//                     <a href='#home'>Home</a>
//                     <a href='#about'>About Me</a>
//                     <a href='#services'>Services</a>
//                     <a href='#projects'>Projects</a>
//                     <a href='#contact'>Contact</a>
//                 </div>
//                 <button className='connect-button'>Connect me</button>

//                 <a href="#" class="menu-bar"><i class="fa fa-bars"></i></a>

//                 <div className='mobile'>
//                     <div className='nav'>
//                         <a href='#navbar'>Home</a>
//                         <a href='#about'>About Me</a>
//                         <a href='#services'>Services</a>
//                         <a href='#projects'>Projects</a>
//                         <a href='#contact'>Contact</a>
//                     </div>
//                     <button className='connect-btn'>Connect me</button>

//                 </div>
//             </div>
//         </nav>

//     )
// }

// export default Navbar;