import React from 'react'
import './header.css';
import Logo from '../../assets/2.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className='header' >
        <div className="left">
            <img src={Logo} alt="" />
            <div className="line" />
            <span className="logotitle">DEPARTMENT OF COMPUTER SCIENCE</span>
        </div>
        <div className="right">
            <span onClick={()=>navigate('/')} className="home">HOME</span>
            <span onClick={()=>navigate('/about')} className="home">ABOUT</span>
            <span onClick={()=>navigate('/catalog')} className="home">CATALOG</span>
            <span onClick={()=>navigate('/events')} className="home">EVENTS</span>
            <span onClick={()=>navigate('/blog')} className="home">BLOG</span>
            <span onClick={()=>navigate('/contact')} className="home">CONTACT US</span>
        </div>
    </header>
  )
}

export default Header