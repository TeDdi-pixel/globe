import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/bundle';
// import 'swiper/css/pagination';
import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            modules={[A11y]}
                className='main-swiper'
                // modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                // pagination={{ clickable: true }}
                
            >
                {slides.slider.map((slide, index) => (
                    <SwiperSlide key={slide.id} className='main-swiper-slide'>
                        <h2 className='main-swiper-phraise'>
                            “A real sense of community, nurtured”
                        </h2>
                        <h3 className='main-swiper-phraise-comments'>
                            Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ...
                        </h3>
                        <button type="button" className='main-swiper-view-more'>View more</button>
                        <Rating
                            width={425}
                            className='main-swiper-raiting'
                            precision={0.5}
                            size="medium"
                            value={ratings[index]}
                            onChange={(event, newValue) => {
                                handleRatingChange(newValue, index);
                            }}
                        />
                        <p className='main-swiper-name'>Olga</p>
                        <p className='main-swiper-job-place'>Weave Studios – Kai Tak</p>
                        <Link className='main-swiper-google' to='/google'>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107" />
                                    <path d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z" fill="#FF3D00" />
                                    <path d="M12.0002 22.0001C14.5832 22.0001 16.9302 21.0116 18.7047 19.4041L15.6097 16.7851C14.5719 17.5743 13.3039 18.0011 12.0002 18.0001C9.39916 18.0001 7.19066 16.3416 6.35866 14.0271L3.09766 16.5396C4.75266 19.7781 8.11366 22.0001 12.0002 22.0001Z" fill="#4CAF50" />
                                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2" />
                                </svg>
                            </li>
                            <li>
                                Google
                            </li>
                        </Link>
                        <div className='main-swiper-img__wrapper'>
                            <img src={slide.img} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Slider;
