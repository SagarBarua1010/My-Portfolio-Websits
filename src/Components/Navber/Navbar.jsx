
import './Navbar.css';
import { Link } from 'react-router-dom';
import menu_open from '../../assets/assets/menu_open.svg'
import menu_close from '../../assets/assets/menu_close.svg'
import { useRef } from 'react';



const Navbar = () => {
   const menuRef = useRef();

   const openMenu = () =>{
    menuRef.current.style.right='0';
   }
   const closeMenu = () =>{
    menuRef.current.style.right='-350px'
   }
    return (
        <nav className='navber'>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <h2 className='text-navber'>SAGAR</h2>
            <div ref={menuRef} src={menu_open} className='nav-menu'>
            <img src={menu_close} onClick={closeMenu} alt="" className='nab-mob-close' />
            <Link className= 'anchor-link'to="/">Home</Link>
            <Link className='anchor-link' to="/about">About Me</Link>
            <Link className='anchor-link' to="/services">Services</Link>
            <Link className='anchor-link' to="/portfolio">Portfolio</Link>
            <Link className='anchor-link' to="/contact">Contact</Link>
            </div>
            <Link className='nav-connect' to="/contact">Connect With Me</Link>
        </nav>
      
    );
};

export default Navbar;