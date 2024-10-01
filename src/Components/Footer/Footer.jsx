import React from 'react';
import './Footer.css';
import user_icon from '../../assets/assets/user_icon.svg';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                <h2 className='text-navber'>SAGAR</h2>
                    <p>Gained hands-on experience with HTML, CSS, JavaScript, and React.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            
        </div>
    );
};

export default Footer;