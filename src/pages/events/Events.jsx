import React from 'react'
import Welcome from '../../components/welcome/Welcome';
import './events.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EventData } from '../../data/event';

const Events = () => {
  return (
    <div className='events' >
        <Welcome link='events' main='Events' title='Events' />
        <div className="maincontent">
          <h2>Upcoming Events</h2>
          <Swiper
        // install Swiper modules
            modules={[Navigation, Autoplay, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{delay:5000}}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='slidecontainer'
          >
            {
              EventData.map(event=>(
                <SwiperSlide key={event.id} className='container' >
                  <div className="content">
                    <img src={event.image} alt="" />
                    <span className="title">{event.title}</span>
                    <span className="date">{event.date}</span>
                    <span className="desc">{event.desc}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </div>
  )
}
export default Events