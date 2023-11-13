import React from 'react';
import {BsArrowRight, BsTelephone, BsInstagram,} from 'react-icons/bs';
import {AiOutlineMail, AiOutlineTwitter} from 'react-icons/ai';
import {GrFacebookOption} from 'react-icons/gr';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer' >
        <div className="top">
            <div className="content">
                <h4 className="title">Academics</h4>
                <span className="item">Undergraduate Courses</span>
                <span className="item">Graduate Courses(MPhil Computer Science)</span>
                <span className="item">Graduate Courses(MSc Computer Science)</span>
                <span className="item">Graduate Courses(PhD)</span>
                <span className="item">Academic Calendar</span>
                <span className="item">Level 200 & 300 Timetable</span>
                <span className="item">Placements For Level 200 Students</span>
                <span className="item">Student Complaint Form</span>
            </div>
            <div className="content">
                <h4 className="title">Admissions</h4>
                <span className="item">Undergraduate</span>
                <span className="item">Graduate</span>
                <span className="item">International Students</span>
                <span className="item">Entry Requirements</span>
                <span className="item">Contact Us</span>
            </div>
            <div className="content">
                <h4 className="title">Research</h4>
                <span className="item">Research at DCS</span>
                <span className="item">Research Impact</span>
                <span className="item">Libraries</span>
            </div>
            <div className="content">
                <h4 className="title">About The Department</h4>
                <span className="item">Introducing DCS</span>
                <span className="item">Head of Department's office</span>
                <span className="item">Faculty</span>
                <span className="item">Events</span>
            </div>
        </div>
        <div className="down">
            <div className="left">
                <h4 className="title">Newsletter</h4>
                <span className="stay">Stay update with our latest</span>
                <div className="email">
                    <input placeholder='Enter Email Address' type="email" name="" id="" />
                        <BsArrowRight className='arrow' />
                </div>
            </div>
            <div className="middle">
                <h4 className="title">Contact Us</h4>
                <h4 className="subtitle">Phone & Email</h4>
                <div className="phone">
                    <BsTelephone className='call' />
                    <span className="item">+233 501 382 035</span>
                </div>
                <div className="phone">
                    <BsTelephone className='call' />
                    <span className="item">+233 559 145 698</span>
                </div>
                <div className="phone">
                    <AiOutlineMail className='call' />
                    <span className="item">dcs@ug.edu.gh</span>
                </div>
            </div>
            <div className="middle">
                <h4 className="subtitle">Location</h4>
                <div className="phone">
                    <span className="item">University Of Ghana,</span>
                </div>
                <div className="phone">
                    <span className="item">Legon Campus</span>
                </div>
                <div className="phone">
                    <span className="item">Opposite Mathematics</span>
                </div>
                <div className="phone">
                    <span className="item">Department</span>
                </div>
            </div>
        </div>
        <div className="downdown">
            <span className="stay">Copyright &copy; 2023 All rights reserved</span>
            <div className="socials">
                <GrFacebookOption className='fb' /> 
                <AiOutlineTwitter className='fb' /> 
                <BsInstagram className='fb' /> 
            </div>
        </div>
    </footer>
  )
}

export default Footer