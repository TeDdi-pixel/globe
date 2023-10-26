import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import 'swiper/css';
import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
function Slider({ slides }) {
    const [ratings, setRatings] = useState(slides.slider.map(() => 0));
    const [slidesPerView, setSlidesPerView] = useState(3);
    const handleRatingChange = (newValue, index) => {
        const newRatings = [...ratings];
        newRatings[index] = newValue;
        setRatings(newRatings);
    };

    const handleResize = () => {
        const newWidth = window.innerWidth;
        if (newWidth <= 370) {
            setSlidesPerView(1.2);
        }else if (newWidth <= 770) {
            setSlidesPerView(1.3);
        } else if (newWidth <= 1050) {
            setSlidesPerView(2.3);
        } else {
            setSlidesPerView(3);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <>
            <Swiper
                modules={[A11y]}
                className='main-swiper'
                spaceBetween={50}
                slidesPerView={slidesPerView}
            >
                {slides.slider.map((slide, index) => (
                    <SwiperSlide key={slide.id} className='main-swiper-slide'>
                        <h2 className='main-swiper-phraise'>
                            “A real sense of community, nurtured”
                        </h2>
                        <h3 className='main-swiper-phraise-comments'>
                            Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ...
                        </h3>
                        <div className='main-swiper-view-more'>
                            <button type="button" >View more</button>
                        </div>
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
                        <Link className='main-swiper-google' >
                            <li>
                                <FcGoogle />
                            </li>
                            <li>
                                Google
                            </li>
                        </Link>
                        <div className='main-swiper-img__wrapper'>
                            <img src={slide.img}
                            alt={slide.alt}
                            srcset={slide.srcset}
                    />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Slider;
