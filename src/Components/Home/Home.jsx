import React from 'react';
import './Home.css';
import profile_img from '../../assets/sodapdf-converted.png'

const Home = () => {
    return (
        <div  className='hero'>
            <img src={profile_img} alt="" />
            <h1><samp>I'm Sagar Barua</samp>,Web Developer  in bangladesh.</h1>
            <p>Gained hands-on experience with HTML, CSS,  JavaScript, and React.</p>
            <div className='hero-action'>
                <div className='hero-connect'>Connect with me</div>
                <div className='hero-resume'>My resume</div>
            </div>
            
        </div>
    );
};

export default Home;