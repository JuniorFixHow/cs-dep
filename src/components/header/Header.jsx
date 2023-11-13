import React from 'react'
import './header.css';
import Logo from '../../assets/2.jpg';

const Header = () => {
  return (
    <header className='header' >
        <div className="left">
            <img src={Logo} alt="" />
            <div className="line" />
            <span className="logotitle">DEPARTMENT OF COMPUTER SCIENCE</span>
        </div>
        <div className="right">
            <span className="home">HOME</span>
            <span className="home">ABOUT</span>
            <span className="home">FACULTY</span>
            <span className="home">BLOG</span>
            <span className="home">CONTACT US</span>
        </div>
    </header>
  )
}

export default Header