import React from 'react';
import './contact.css';
import Welcome from '../../components/welcome/Welcome';
import { IoHomeOutline, IoCallOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import MapImage from '../../assets/map.png'

const Contact = () => {
  return (
    <div className='contact' >
        <Welcome link='contact' main='Contact Us' title='Contact Us' />
        <div className="mapcontainer">
            <img className='mapimg' src={MapImage} alt="" />
        </div>
        <div className="down">
            <div className="left">
                <div className="oneleft">
                    <IoHomeOutline className='icon' />
                    <div className="leftright">
                        <span className="legon">University of Ghana, Legon Campus</span>
                        <span className="math">Opposite Mathematics Department</span>
                    </div>
                </div>
                <div className="oneleft">
                    <IoCallOutline className='icon' />
                    <div className="leftcontainer">
                        <div className="leftright">
                            <span className="title">+233 501 382 035</span>
                            <span className="subtitle">Mon to Fri 9am to 5pm</span>
                        </div>
                        <div className="leftright">
                            <span className="title">+233 559 145 698</span>
                            <span className="subtitle">Mon to Fri 9am to 5pm</span>
                        </div>
                    </div>
                </div>
                <div className="oneleft">
                    <CiMail className='icon' />
                    <div className="leftright">
                        <span className="title">dcs@ug.edu.gh</span>
                        <span className="subtitle">Send us your query anytime</span>
                    </div>
                </div>
            </div>
            <div className="center">
                <input type="text" placeholder='Enter your name' className='inp' />
                <input type="email" placeholder='Enter email address' className='inp' />
                <input type="text" placeholder='Enter subject' className='inp' />
            </div>
            <div className="right">
                <textarea  cols="30" rows="10" placeholder='Enter Message' />
            </div>
        </div>
    </div>
  )
}

export default Contact