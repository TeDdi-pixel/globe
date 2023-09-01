import { useState } from "react";
import Flights from "../Flights/Flights";
import Stays from "../Stays/Stays";

// import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import Swiper from "../Slider/Slider";
import SlickSlider from "../SlickSlider/SlickSlider";
// import { DataContext } from "/App";
const data = {
    places: [
        {
            id: 0,
            title: 'Istanbul, Turkey',
            entertainment: 'Flights • Hotels • Resorts',
            img: './img/Rectangle 3.jpg'
        },
        {
            id: 1,
            title: 'Sydney, Australia',
            entertainment: 'Flights • Hotels • Resorts',
            img: './img/Rectangle 3 (1).jpg'
        },
        {
            id: 2,
            title: 'Baku, Azerbaijan',
            entertainment: 'Flights • Hotels • Resorts',
            img: './img/Rectangle 4.jpg'
        },
        {
            id: 3,
            title: 'Malé, Maldives',
            entertainment: 'Flights • Hotels • Resorts',
            img: './img/Rectangle 4 (1).jpg'
        },
        {
            id: 4,
            title: 'Paris, France',
            entertainment: 'Flights • Hotels • Resorts',
            img: './img/Rectangle 3 (2).jpg'
        }
        ,
        {
            id: 5,
            title: 'New York, US',
            entertainment: 'Flights • Hotels • Resorts',
            img: './img/Rectangle 4 (2).jpg'
        },
        {
            id: 6,
            title: 'London, UK',
            entertainment: 'Flights • Hotels • Resorts',
            img: './img/Rectangle 3 (3).jpg'
        },
        {
            id: 7,
            title: 'Tokyo, Japan',
            entertainment: 'Flights • Hotels • Resorts',
            img: './img/Rectangle 3 (4).jpg'
        },
        {
            id: 8,
            title: 'Dubai, UAE',
            entertainment: 'Flights • Hotels • Resorts',
            img: './img/Rectangle 4 (3).jpg'
        },
    ],
    slider: [
        {
            id: 0,
            img: './img/2d9afcfc8f6b2105b415f4d1a3703551.jpg'
        },
        {
            id: 1,
            img: './img/2bc9380fe02cf65bd8e281ed4d43885a.jpg'
        },
        {
            id: 2,
            img: './img/7f44409c34363230b50babb01b3efc89.jpg'
        },
        {
            id: 3,
            img: './img/2d9afcfc8f6b2105b415f4d1a3703551.jpg'
        },
        {
            id: 4,
            img: './img/2bc9380fe02cf65bd8e281ed4d43885a.jpg'
        },
        {
            id: 5,
            img: './img/7f44409c34363230b50babb01b3efc89.jpg'
        },
        {
            id: 6,
            img: './img/2d9afcfc8f6b2105b415f4d1a3703551.jpg'
        },
        {
            id: 7,
            img: './img/2bc9380fe02cf65bd8e281ed4d43885a.jpg'
        },
        {
            id: 8,
            img: './img/7f44409c34363230b50babb01b3efc89.jpg'
        }

    ]
}

function LandingPageMain({ active }) {
    // const data = useContext(DataContext);
    const [flights, setFlights] = useState(true);
    const [stays, setStays] = useState(false);
    const [promocode, setPromocode] = useState(false);

    const handlePromocode = () => {
        setPromocode((prev) => !prev);
    }

    const flightsBnt = 'main-chose-flights';
    const staysBnt = 'main-chose-stays';

    const changeActivetedBtn = (e) => {
        if (e.target.classList.contains('flights-btn') || (e.target.classList.contains(flightsBnt) && !flights)) {
            setFlights(true);
            setStays(false);

        }
        if (e.target.classList.contains('stays-btn') || (e.target.classList.contains(staysBnt) && !stays)) {
            setFlights(false);
            setStays(true);
        }
    }

    const places = data.places.map(item => {
        return (
            <Link key={item.id} to='/place' className="main-plan-trip-place">
                <img src={item.img} alt="" />
                <div className="main-plan-trip-place-options">
                    <li>{item.title}</li>
                    <li>{item.entertainment}</li>
                </div>
            </Link>
        )
    })

    return (
        <>
            <main className={(active ? "main main_active" : 'main')}>
                <div className="main-flights-stays">
                    <div className="main-flights-stays__wrapper">
                        <button className={(flights ? "main-chose-flights main-chose-flights_active" : 'main-chose-flights')}
                            onClick={changeActivetedBtn}
                        >
                            <li className="flights-btn">
                                <svg className="flights-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path className="flights-btn" d="M8.74733 21.75H7.49952C7.37414 21.75 7.25077 21.7185 7.14069 21.6585C7.03062 21.5984 6.93735 21.5118 6.86941 21.4064C6.80147 21.301 6.76104 21.1803 6.7518 21.0552C6.74257 20.9302 6.76483 20.8048 6.81655 20.6906L9.83811 14.0227L5.30108 13.9219L3.64639 15.9267C3.33092 16.3233 3.07921 16.5 2.43702 16.5H1.59702C1.46402 16.5043 1.33195 16.4764 1.212 16.4188C1.09205 16.3612 0.987757 16.2755 0.907956 16.1691C0.796393 16.0186 0.686706 15.7636 0.793581 15.3998L1.72264 12.0717C1.72967 12.0469 1.73811 12.022 1.74749 11.9977C1.74795 11.9953 1.74795 11.9929 1.74749 11.9906C1.73781 11.9663 1.72951 11.9414 1.72264 11.9161L0.792643 8.56687C0.691862 8.21016 0.802018 7.96078 0.912643 7.81406C0.986929 7.71549 1.08331 7.63573 1.19403 7.58118C1.30475 7.52664 1.42672 7.49883 1.55014 7.5H2.43702C2.91655 7.5 3.38202 7.71516 3.65577 8.0625L5.27624 10.0336L9.83811 9.96609L6.81749 3.30984C6.7657 3.19568 6.74335 3.07036 6.75249 2.94533C6.76163 2.8203 6.80196 2.69956 6.8698 2.59414C6.93764 2.48872 7.03082 2.40198 7.14083 2.34186C7.25083 2.28175 7.37416 2.25016 7.49952 2.25H8.76092C8.9369 2.25354 9.10983 2.29667 9.26685 2.3762C9.42388 2.45572 9.56097 2.5696 9.66796 2.70937L15.5297 9.83438L18.2376 9.76312C18.4359 9.75234 18.9853 9.74859 19.1123 9.74859C21.7026 9.75 23.2495 10.5909 23.2495 12C23.2495 12.4434 23.0723 13.2656 21.8869 13.7887C21.187 14.0981 20.2533 14.2547 19.1114 14.2547C18.9858 14.2547 18.4378 14.2509 18.2367 14.2402L15.5292 14.168L9.65296 21.293C9.54588 21.4321 9.40891 21.5454 9.25216 21.6246C9.0954 21.7037 8.92288 21.7465 8.74733 21.75Z" fill="white" />
                                </svg>
                            </li>
                            <li className="flights-btn">Flights</li>
                            <div className={(flights ? "main-chose-flights-underscore main-chose-flights-underscore_active" : 'main-chose-flights-underscore')}></div>
                        </button>
                        <span className="main-flights-stays-line">

                        </span>
                        <button className={(stays ? "main-chose-stays main-chose-stays_active" : 'main-chose-stays')}
                            onClick={changeActivetedBtn}
                        >
                            <li className="stays-btn">
                                <svg className="stays-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path className="stays-btn" d="M20.25 10.8141C19.7772 10.6065 19.2664 10.4996 18.75 10.5H5.25C4.73368 10.4995 4.22288 10.6063 3.75 10.8136C3.08166 11.1059 2.51294 11.5865 2.11336 12.1968C1.71377 12.8071 1.50064 13.5205 1.5 14.25V19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25C2.44891 20.25 2.63968 20.171 2.78033 20.0303C2.92098 19.8897 3 19.6989 3 19.5V19.125C3.00122 19.0259 3.04112 18.9312 3.11118 18.8612C3.18124 18.7911 3.27592 18.7512 3.375 18.75H20.625C20.7241 18.7512 20.8188 18.7911 20.8888 18.8612C20.9589 18.9312 20.9988 19.0259 21 19.125V19.5C21 19.6989 21.079 19.8897 21.2197 20.0303C21.3603 20.171 21.5511 20.25 21.75 20.25C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V14.25C22.4993 13.5206 22.2861 12.8073 21.8865 12.1971C21.4869 11.5869 20.9183 11.1063 20.25 10.8141ZM17.625 3.75H6.375C5.67881 3.75 5.01113 4.02656 4.51884 4.51884C4.02656 5.01113 3.75 5.67881 3.75 6.375V9.75C3.75002 9.77906 3.75679 9.80771 3.76979 9.8337C3.78278 9.85969 3.80163 9.8823 3.82486 9.89976C3.84809 9.91721 3.87505 9.92903 3.90363 9.93428C3.93221 9.93953 3.96162 9.93806 3.98953 9.93C4.39896 9.81025 4.82341 9.74964 5.25 9.75H5.44828C5.49456 9.75029 5.53932 9.73346 5.57393 9.70274C5.60855 9.67202 5.63058 9.62958 5.63578 9.58359C5.67669 9.21712 5.85115 8.87856 6.12586 8.63256C6.40056 8.38656 6.75625 8.25037 7.125 8.25H9.75C10.119 8.25003 10.475 8.38606 10.75 8.63209C11.025 8.87812 11.1997 9.21688 11.2406 9.58359C11.2458 9.62958 11.2679 9.67202 11.3025 9.70274C11.3371 9.73346 11.3818 9.75029 11.4281 9.75H12.5747C12.621 9.75029 12.6657 9.73346 12.7003 9.70274C12.735 9.67202 12.757 9.62958 12.7622 9.58359C12.8031 9.21736 12.9773 8.87899 13.2517 8.63303C13.5261 8.38706 13.8815 8.25072 14.25 8.25H16.875C17.244 8.25003 17.6 8.38606 17.875 8.63209C18.15 8.87812 18.3247 9.21688 18.3656 9.58359C18.3708 9.62958 18.3929 9.67202 18.4275 9.70274C18.4621 9.73346 18.5068 9.75029 18.5531 9.75H18.75C19.1766 9.74979 19.6011 9.81057 20.0105 9.93047C20.0384 9.93854 20.0679 9.94 20.0965 9.93473C20.1251 9.92945 20.1521 9.91759 20.1753 9.90009C20.1986 9.88258 20.2174 9.8599 20.2304 9.83385C20.2433 9.8078 20.2501 9.7791 20.25 9.75V6.375C20.25 5.67881 19.9734 5.01113 19.4812 4.51884C18.9889 4.02656 18.3212 3.75 17.625 3.75Z" fill="#112211" />
                                </svg>
                            </li>
                            <li className="stays-btn">Stays</li>
                            <div className={(stays ? "main-chose-stays-underscore main-chose-stays-underscore_active" : 'main-chose-stays-underscore')}></div>
                        </button>

                    </div>

                    {flights ? <Flights promocode={promocode}/> : <Stays promocode={promocode}/>}


                    <div className="main-flights-stays-options">
                        
                        <button
                            className="main-flights-stays-promocode"
                            onClick={handlePromocode}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 3.5V12.5V3.5ZM12.5 8H3.5H12.5Z" fill="#112211" />
                                <path d="M8 3.5V12.5M12.5 8H3.5" stroke="#112211" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="main-flights-stays-promocode-text">Add Promo Code</span>
                        </button>
                        <Link to='https://t.me/whyME_3'

                            className="main-flights-stays-show">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M9.46858 14.9999H9.49983C9.65427 15.0008 9.80542 14.9552 9.9336 14.8691C10.0618 14.7829 10.1611 14.6602 10.2186 14.5168L10.1967 14.5085L10.1967 14.5083C10.141 14.6472 10.0447 14.7661 9.92052 14.8496C9.79624 14.9331 9.64971 14.9774 9.49996 14.9765H9.49983H9.4691M9.46858 14.9999L9.46963 14.9765C9.46945 14.9765 9.46928 14.9765 9.4691 14.9765M9.46858 14.9999V14.9765H9.4691M9.46858 14.9999L9.4691 14.9765M9.4691 14.9765C9.17379 14.963 8.92874 14.7657 8.83168 14.4845L8.83151 14.484C8.82949 14.4786 8.82777 14.4734 8.82603 14.4676L8.82617 14.4675L8.82513 14.4651L6.99283 10.1732C6.96895 10.0938 6.9662 10.0095 6.98487 9.92868C7.00363 9.84747 7.04336 9.7726 7.1001 9.71155L9.4691 14.9765ZM14.7645 1.23679C14.8636 1.33626 14.9317 1.46231 14.9607 1.59968C14.9896 1.73706 14.9781 1.87988 14.9276 2.01088L14.9276 2.01102L10.1968 14.5081L7.10012 9.71152L13.5164 2.82901C13.5165 2.82891 13.5166 2.82882 13.5167 2.82872C13.5393 2.80608 13.5572 2.77924 13.5694 2.74972C13.5817 2.72007 13.588 2.68829 13.588 2.65619C13.588 2.62409 13.5817 2.59231 13.5694 2.56266C13.5571 2.533 13.5391 2.50606 13.5164 2.48337C13.4937 2.46067 13.4668 2.44267 13.4371 2.43038C13.4075 2.4181 13.3757 2.41178 13.3436 2.41178C13.3115 2.41178 13.2797 2.4181 13.25 2.43038C13.2205 2.44261 13.1937 2.46051 13.1711 2.48307C13.171 2.48317 13.1709 2.48327 13.1708 2.48337L6.28512 8.89933C6.22406 8.95608 6.14918 8.99582 6.06797 9.01458C5.98716 9.03325 5.90288 9.03051 5.82347 9.00663L1.53403 7.17495L1.53408 7.17485L1.53191 7.17416L1.51945 7.17021C1.51939 7.17019 1.51933 7.17017 1.51927 7.17015C1.37747 7.12266 1.25378 7.03258 1.16507 6.91219C1.07633 6.79175 1.02693 6.64685 1.02362 6.49728C1.0203 6.34771 1.06324 6.20077 1.14657 6.07652C1.22872 5.95403 1.34617 5.85948 1.48327 5.80537V5.80625L1.49156 5.80311L13.9925 1.07155L13.9925 1.07153C14.1235 1.02174 14.266 1.01086 14.4029 1.04018C14.5399 1.0695 14.6654 1.13778 14.7645 1.23679ZM14.7645 1.23679C14.7645 1.2368 14.7645 1.23681 14.7645 1.23683L14.7811 1.22025L14.7645 1.23679Z" fill="black" stroke="#112211" stroke-width="0.046875" />
                            </svg>
                            <span className="main-flights-stays-show-text">Show Filghts</span>
                        </Link>
                    </div>
                </div>

                <div className="main-plan-trip">
                    <div className="main-plan-trip-left-side">
                        <h2>Plan your perfect trip</h2>
                        <h3>Search Flights & Places Hire to our most popular destinations</h3>
                    </div>
                    <div className="main-plan-trip-right-side">
                        See more places
                    </div>


                </div>
                <div className="main-plan-trip-places">
                    {
                        places
                    }
                </div>

                <div className="main-flights-hotels">
                    <div className="main-flights-additional">
                        <div className="main-flights-additional-img">
                            <img src="./img/Rectangle 40.jpg" alt="" />
                        </div>
                        <h2>Flights</h2>
                        <h3>Search Flights & Places Hire to our most popular destinations</h3>
                        <Link className="main-flights-additional-show" to='/flights'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M9.96858 14.9999H9.99983C10.1543 15.0008 10.3054 14.9552 10.4336 14.869C10.5618 14.7829 10.6611 14.6601 10.7186 14.5168L10.6967 14.5085L10.6967 14.5083C10.641 14.6472 10.5447 14.7661 10.4205 14.8496C10.2962 14.9331 10.1497 14.9773 9.99996 14.9765H9.99983H9.9691M9.96858 14.9999L9.96963 14.9765C9.96945 14.9765 9.96928 14.9765 9.9691 14.9765M9.96858 14.9999V14.9765H9.9691M9.96858 14.9999L9.9691 14.9765M9.9691 14.9765C9.67379 14.963 9.42874 14.7657 9.33168 14.4844L9.33151 14.484C9.32949 14.4785 9.32777 14.4734 9.32603 14.4675L9.32617 14.4675L9.32513 14.4651L7.49283 10.1731C7.46895 10.0937 7.4662 10.0095 7.48487 9.92865C7.50363 9.84744 7.54336 9.77257 7.6001 9.71152L9.9691 14.9765ZM15.2645 1.23676C15.3636 1.33623 15.4317 1.46227 15.4607 1.59965C15.4896 1.73703 15.4781 1.87985 15.4276 2.01085L15.4276 2.01099L10.6968 14.5081L7.60012 9.71149L14.0164 2.82898C14.0165 2.82888 14.0166 2.82879 14.0167 2.82869C14.0393 2.80605 14.0572 2.77921 14.0694 2.74969C14.0817 2.72004 14.088 2.68825 14.088 2.65616C14.088 2.62406 14.0817 2.59228 14.0694 2.56263C14.0571 2.53297 14.0391 2.50603 14.0164 2.48334C13.9937 2.46064 13.9668 2.44264 13.9371 2.43035C13.9075 2.41807 13.8757 2.41175 13.8436 2.41175C13.8115 2.41175 13.7797 2.41807 13.75 2.43035C13.7205 2.44258 13.6937 2.46048 13.6711 2.48304C13.671 2.48314 13.6709 2.48324 13.6708 2.48334L6.78512 8.8993C6.72406 8.95605 6.64918 8.99579 6.56797 9.01455C6.48716 9.03322 6.40288 9.03048 6.32347 9.0066L2.03403 7.17492L2.03408 7.17481L2.03191 7.17413L2.01945 7.17018C2.01939 7.17016 2.01933 7.17014 2.01927 7.17012C1.87747 7.12263 1.75378 7.03255 1.66507 6.91216C1.57633 6.79172 1.52693 6.64682 1.52362 6.49725C1.5203 6.34768 1.56324 6.20074 1.64657 6.07649C1.72872 5.954 1.84617 5.85945 1.98327 5.80534V5.80622L1.99156 5.80308L14.4925 1.07152L14.4925 1.0715C14.6235 1.02171 14.766 1.01083 14.9029 1.04015C15.0399 1.06947 15.1654 1.13775 15.2645 1.23676ZM15.2645 1.23676C15.2645 1.23677 15.2645 1.23678 15.2645 1.2368L15.2811 1.22022L15.2645 1.23676Z" fill="black" stroke="#112211" stroke-width="0.046875" />
                            </svg>
                            <span>Show Filghts</span>
                        </Link>
                    </div>

                    <div className="main-hotels-additional">
                        <div className="main-hotels-additional-img">
                            <img src="./img/Rectangle 41.jpg" alt="" />
                        </div>
                        <h2>Hotels</h2>
                        <h3>Search Flights & Places Hire to our most popular destinations</h3>
                        <Link className="main-hotels-additional-show" to='hotels'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M9.96858 14.9999H9.99983C10.1543 15.0008 10.3054 14.9552 10.4336 14.869C10.5618 14.7829 10.6611 14.6601 10.7186 14.5168L10.6967 14.5085L10.6967 14.5083C10.641 14.6472 10.5447 14.7661 10.4205 14.8496C10.2962 14.9331 10.1497 14.9773 9.99996 14.9765H9.99983H9.9691M9.96858 14.9999L9.96963 14.9765C9.96945 14.9765 9.96928 14.9765 9.9691 14.9765M9.96858 14.9999V14.9765H9.9691M9.96858 14.9999L9.9691 14.9765M9.9691 14.9765C9.67379 14.963 9.42874 14.7657 9.33168 14.4844L9.33151 14.484C9.32949 14.4785 9.32777 14.4734 9.32603 14.4675L9.32617 14.4675L9.32513 14.4651L7.49283 10.1731C7.46895 10.0937 7.4662 10.0095 7.48487 9.92865C7.50363 9.84744 7.54336 9.77257 7.6001 9.71152L9.9691 14.9765ZM15.2645 1.23676C15.3636 1.33623 15.4317 1.46227 15.4607 1.59965C15.4896 1.73703 15.4781 1.87985 15.4276 2.01085L15.4276 2.01099L10.6968 14.5081L7.60012 9.71149L14.0164 2.82898C14.0165 2.82888 14.0166 2.82879 14.0167 2.82869C14.0393 2.80605 14.0572 2.77921 14.0694 2.74969C14.0817 2.72004 14.088 2.68825 14.088 2.65616C14.088 2.62406 14.0817 2.59228 14.0694 2.56263C14.0571 2.53297 14.0391 2.50603 14.0164 2.48334C13.9937 2.46064 13.9668 2.44264 13.9371 2.43035C13.9075 2.41807 13.8757 2.41175 13.8436 2.41175C13.8115 2.41175 13.7797 2.41807 13.75 2.43035C13.7205 2.44258 13.6937 2.46048 13.6711 2.48304C13.671 2.48314 13.6709 2.48324 13.6708 2.48334L6.78512 8.8993C6.72406 8.95605 6.64918 8.99579 6.56797 9.01455C6.48716 9.03322 6.40288 9.03048 6.32347 9.0066L2.03403 7.17492L2.03408 7.17481L2.03191 7.17413L2.01945 7.17018C2.01939 7.17016 2.01933 7.17014 2.01927 7.17012C1.87747 7.12263 1.75378 7.03255 1.66507 6.91216C1.57633 6.79172 1.52693 6.64682 1.52362 6.49725C1.5203 6.34768 1.56324 6.20074 1.64657 6.07649C1.72872 5.954 1.84617 5.85945 1.98327 5.80534V5.80622L1.99156 5.80308L14.4925 1.07152L14.4925 1.0715C14.6235 1.02171 14.766 1.01083 14.9029 1.04015C15.0399 1.06947 15.1654 1.13775 15.2645 1.23676ZM15.2645 1.23676C15.2645 1.23677 15.2645 1.23678 15.2645 1.2368L15.2811 1.22022L15.2645 1.23676Z" fill="black" stroke="#112211" stroke-width="0.046875" />
                            </svg>
                            <span>Show Hotels</span>
                        </Link>
                    </div>

                </div>
                <h2 className="main-reviews">Reviews</h2>
                <h3 className="main-reviews-sub">What people says about Golobe facilities</h3>
                
                <Slider slides={data} />
                <div className="main-not-slider">
                    <h2>Here could be slider</h2>
                </div>
            </main>
        </>

    );
}

export default LandingPageMain;