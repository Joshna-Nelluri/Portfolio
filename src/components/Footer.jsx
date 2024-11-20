import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-top'>
                <div className='footer-left'>
                {/* <h3 className='footer-title'>
                    Joshna
                </h3> */}
                {/* <p className='footer-description'>FullStack developer specializing in web and Software Development</p> */}
                </div>
                {/* <div className='footer-right'>
                    <form className='footer-form'>
                        <input type='email' placeholder='Enter your Email' className='footer-input' />
                        <button className='footer-btn'>Subscribe</button>
                    </form>
                </div> */}
            </div>
            {/* <div className='footer-bottom'>
                <p className='footer-copy'>
                    &copy; {new Date().getFullYear()}
                </p>
                <div className='footer-social'>
                    <a href='' className='footer-social-icon'>
                        <FaFacebook />
                    </a>
                    <a href='' className='footer-social-icon'>
                        <FaLinkedin />
                    </a>
                    <a href='' className='footer-social-icon'>
                        <FaTwitter />
                    </a>
                    <a href='' className='footer-social-icon'>
                        <FaGithub />
                    </a>
                </div>
                <div className='footer-links'>
                    <a href="" className='footer-link'>Privacy</a>
                    <a href="" className='footer-link'>Terms of Services</a>
                </div>
            </div> */}
            
        </div>
    </footer>
  )
}

export default Footer;
