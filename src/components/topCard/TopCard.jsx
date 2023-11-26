import React from 'react'
import './topcard.css'
import {useNavigate, useLocation} from 'react-router-dom';

const TopCard = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const path = location.pathname.split('/')[1];
  return (
    <div className="topcard">
        <div className="cards">
            <div className="card">
                <div className={path === 'short-courses' ? 'up2':'up'}>
                    <span className="title">Short Courses</span>
                </div>
                <span className="text">
                    Our eight week intensive certification course is open to senior high graduates, tertiary students, school graduates, workers and the general public
                </span>
                <button className="more">Read More</button>
            </div>
            <div onClick={()=>navigate('/undergraduate')} className="card">
                <div className="up">
                    <span className="title">Undergraduate programmes</span>
                </div>
                <span className="text">
                Open the door to sought-after technology careers with a world-class Bachelor of Science in Computer Science degree.
                </span>
                <button className="more">Read More</button>
            </div>
            <div className="card">
                <div className="up">
                    <span className="title">Mphil and MSC programmes</span>
                </div>
                <span className="text">
                Embrace world class gradate education with unique blend of cutting-edge research and industry experience.
                </span>
                <button className="more">Read More</button>
            </div>
            <div className="card">
                <div className="up">
                    <span className="title">PhD programmes</span>
                </div>
                <span className="text">
                Our PHDs lead the effort to extend the boundaries of knowledge through quality and industry relevant research.
                </span>
                <button className="more">Read More</button>
            </div>
        </div>
    </div>
  )
}

export default TopCard