import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/assets/theme_pattern.svg';
import Ecommerce from '../../assets/ Commerce.png';
import Food from '../../assets/Food.png';
import Tea from  '../../assets/Tea_house.png';
import  Shopper from '../../assets/Shopper.png';
import Money from '../../assets/Money.png';
const MyWork = () => {
    return (
        <div  className='work'>
            <div className="work-title">
                <h1>My latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="work-container">
                <div className="workCard">
                    <img src={Ecommerce} alt="" />
                    <h3>E-commerce Website </h3>
                    <p>E-commerce Using HTML CSS JavaScript</p>
                    <a href="https://symphonious-heliotrope-c37d5f.netlify.app/" target='blank'>Checkout</a>
                </div>
                <div className="workCard">
                    <img src={Food} alt="" />
                    <h3>Food Website </h3>
                    <p>Food Website Using  HTML CSS JavaScript</p>
                    <a href="https://helpful-rugelach-ee49b0.netlify.app/" target='blank'>Checkout</a>
                </div>
                <div className="workCard">
                    <img src={Tea} alt="" />
                    <h3>Tea House Website </h3>
                    <p>Tea House Website Using  HTML CSS JavaScript</p>
                    <a href="https://aesthetic-lolly-cce560.netlify.app/" target='blank'>Checkout</a>
                </div>
                <div className="workCard">
                    <img src={Shopper} alt="" />
                    <h3>Shopper Website </h3>
                    <p>Shopper Website Using  HTML CSS JavaScript</p>
                    <a href="https://startling-elf-e26a38.netlify.app/" target='blank'>Checkout</a>
                </div>
                <div className="workCard">
                    <img src={Money} alt="" />
                    <h3>Money Master Website </h3>
                    <p>Money Master Website Using  HTML CSS JavaScript</p>
                    <a href="https://darling-tapioca-5c7b15.netlify.app/" target='blank'>Checkout</a>
                </div>
           
            </div>
            
        </div>
    );
};

export default MyWork;