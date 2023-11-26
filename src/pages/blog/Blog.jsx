import React from 'react'
import './blog.css';
import BLOG from '../../assets/blog.png';
import { EventData } from '../../data/event';
import Welcome from '../../components/welcome/Welcome';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate();

  return (
    <div className='blog' >
        <Welcome link='blog' main='Blog' title='Blog' />
        <div className="content">
            <div className="top">
                <img src={BLOG} alt="" />
                <div className="topContent">
                    <span className="blogtext">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deserunt numquam, earum blanditiis fugit eveniet a dignissimos, est rem adipisci tenetur pariatur soluta nesciunt tempora excepturi modi. Eveniet vel doloremque, harum blanditiis quia doloribus incidunt quisquam reiciendis facere deserunt perspiciatis maxime nesciunt tempore aspernatur asperiores? Similique molestiae tempore voluptate sequi excepturi, dolorum assumenda temporibus, ea dolore natus provident, repellat ipsa.
                    </span>
                    <button>Read more</button>
                </div>
            </div>
            <div className="down">
                <h2>Our Gallery</h2>
                <span className="desc">Browse through the upcoming events and news in the department</span>
                <div className="imgContainer">
                    {
                        EventData.map(event=>(
                            <div onClick={()=>navigate('/blog')} key={event.id} className="oneimg">
                                <img src={event.image} alt="" className="gal" />
                                <span className="title">{event.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog