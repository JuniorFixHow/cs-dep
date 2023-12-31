import React from 'react';
import './home.css';
import {RiGraduationCapLine} from 'react-icons/ri';
import {PiCertificateBold} from 'react-icons/pi';
import VIDEO1 from '../../assets/video1.mp4'
import Four from '../../assets/4.jpg';
import Eight from '../../assets/8.jpg';
import Nine from '../../assets/9.jpg';
import Ten from '../../assets/10.jpg';
import Eleven from '../../assets/11.jpg';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import {useNavigate} from 'react-router-dom'
// import 'swiper/css/scrollbar';

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='home' >
        <div className="top">
            <video autoPlay muted className='video1' loop id='video1'>
                <source src={VIDEO1} />
            </video>
            <h1 className='vtitle' >YOUR GATEWAY TO THE WORLD CLASS COMPUTER SCIENCE EDUCATION</h1>
            <div className="cards">
                <div onClick={()=>navigate('/short-courses')} className="card">
                    <div className="up">
                        <span className="title">Short Courses</span>
                    </div>
                    <span className="text">
                        Our eight week intensive certification course is open to senior high graduates, tertiary students, school graduates, workers and the general public
                    </span>
                    <button className="more">Read More</button>
                </div>
                <div className="card">
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
        <div className="center">
            <div className="up">
                <img src={Four} className='cleft' alt="" />
                <div className="cright">
                    <h3>Departmental Events</h3>
                    <span className="desc">Programmes, seminars and events organized by the department</span>
                    <span className="view">View upcoming and ongoing events</span>
                </div>
            </div>
            <div className="down">
                <h3>Short Courses we offer</h3>
                <span className="desc">Our eight week intensive certificate course is open to senior high school graduates, tertiary students, school graduates, workers and the general public.</span>
                <h6>Evening and Weekend Session Only</h6>
            </div>
        </div>
        <div className="down">
            <div className="up">
                <h3 className="join">Join our Short Course Program</h3>
                <span className="small">
                    To be able to take full advantage of the opportunities available to this technology era, it is important to acquire new skills. Skills in ICT that will springboard your career
                </span>
                <div className="middle">
                        <div className="left">
                            <RiGraduationCapLine className='icon' />
                            <h4 className='expert'>Expert Instructors</h4>
                            <span className="small">
                                Our instructors have years of industry experience which presents students with a unique oppoertunity of learning from the best
                            </span>
                        </div>
                        <div className="left">
                            <PiCertificateBold className='icon' />
                            <h4 className='expert'>Certification</h4>
                            <span className="small">
                                You earn a certificate of completion from the department after completing and passing the prescribed exam
                            </span>
                        </div>
                </div>
                <button className="register">REGISTER</button>

            </div>

            <Swiper className="downcards"
                modules={[ A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                // navigation
                loop={true}
                
                autoplay={{delay:5000}}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="dcard">
                    <img src={Eight} className='dimage' alt="" />
                    <h4 className="dtext">Mobile App Development</h4>
                    <span className="mobile">We provide world class technologies for Mobile Application Development using the mobile-first worklight by IBM</span>
                </SwiperSlide>
                <SwiperSlide className="dcard">
                    <img src={Nine} className='dimage' alt="" />
                    <h4 className="dtext">Computer Network Fundermental [CCNA]</h4>
                    <span className="mobile">We provide quality training for students to become a Cisco Certified Network Associate (CCNA).</span>
                </SwiperSlide>
                <SwiperSlide className="dcard">
                    <img src={Ten} className='dimage' alt="" />
                    <h4 className="dtext">Introduction to web programming</h4>
                    <span className="mobile">Understand the fundermentals of web technologies and create web-based applications using latest technologies</span>
                </SwiperSlide>
                <SwiperSlide className="dcard">
                    <img src={Eleven} className='dimage' alt="" />
                    <h4 className="dtext">Information Security and Ethical Hacking</h4>
                    <span className="mobile">Learn the various techniques used to secure a computer system from attacks through hacking.</span>
                </SwiperSlide>
                <SwiperSlide className="dcard">
                    <img src={Eight} className='dimage' alt="" />
                    <h4 className="dtext">Mobile App Development</h4>
                    <span className="mobile">We provide world class technologies for Mobile Application Development using the mobile-first worklight by IBM</span>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Home