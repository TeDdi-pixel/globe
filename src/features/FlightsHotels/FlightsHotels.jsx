import React from 'react';
import {FaTelegramPlane} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const FlightsHotels = () => {
    return (
        <div className="main-flights-hotels">
            <div className="main-flights-additional">
                <div className="main-flights-additional-img">
                    <img src="./assets/img/Rectangle 40.jpg" alt="" />
                </div>
                <h2>Flights</h2>
                <h3>Search Flights & Places Hire to our most popular destinations</h3>
                <Link className="main-flights-additional-show" to='/flights'>
                    <FaTelegramPlane />
                    <span>Show Filghts</span>
                </Link>
            </div>

            <div className="main-hotels-additional">
                <div className="main-hotels-additional-img">
                    <img src="./assets/img/Rectangle 41.jpg" alt="" />
                </div>
                <h2>Hotels</h2>
                <h3>Search Flights & Places Hire to our most popular destinations</h3>
                <Link className="main-hotels-additional-show" to='hotels'>
                    <FaTelegramPlane />
                    <span>Show Hotels</span>
                </Link>
            </div>

        </div>
    );
}

export default FlightsHotels;
