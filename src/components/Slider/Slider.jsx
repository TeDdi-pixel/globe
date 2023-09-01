import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Rating } from '@mui/material';
import React, { useState } from 'react';

function Slider({ slides }) {
  const [ratings, setRatings] = useState(slides.slider.map(() => 0)); 

  const handleRatingChange = (newValue, index) => {
    const newRatings = [...ratings]; 
    newRatings[index] = newValue; 
    setRatings(newRatings); 
  };

  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.slider.map((slide, index) => (
          <SwiperSlide key={slide.id} className='main-swiper-slide'>
            <h2 className='main-swiper-phraise'>
              “A real sense of community, nurtured”
            </h2>
            <h3 className='main-swiper-phraise-comments'>
              Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ...
            </h3>
            <p className='main-swiper-name'>Olga</p>
            <p className='main-swiper-job-place'>Weave Studios – Kai Tak</p>
            <Rating
              className='main-swiper-raiting'
              precision={0.5}
              size="medium"
              value={ratings[index]} 
              onChange={(event, newValue) => {
                handleRatingChange(newValue, index); 
              }}
            />

            <div className='main-swiper-img__wrapper'>
              <img src={slide.img} alt="" />
            </div>
            <div className='main-swiper-shadow'></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
