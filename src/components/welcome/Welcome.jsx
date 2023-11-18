import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import './welcome.css';


const Welcome = ({title, main, link}) => {
    const navigate = useNavigate();

  return (
    <div className="welcomeup">
        <h3>{main}</h3>
        <div className="navi">
            <span onClick={()=>navigate('/')} className='link' >Home</span>
            <FaArrowRight />
            <span onClick={()=>navigate(`/${link}`)} className='link' >{title}</span>
        </div>
    </div>
  )
}

export default Welcome