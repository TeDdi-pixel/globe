import React, { useState } from 'react';
import FlightsForm from '../../entities/FlightsForm/FlightsForm';
import StaysForm from '../../entities/StaysForm/StaysForm';
import { Link } from 'react-router-dom';
import OptionsBtns from './ui/OptionsBtns';
import {IoAddOutline} from 'react-icons/io5'
import {FaTelegramPlane} from 'react-icons/fa'
const FlightsStays = () => {
    const [promocode, setPromocode] = useState(false);
    const [flights, setFlights] = useState(true);
    const [stays, setStays] = useState(false);

    const handlePromocode = () => {
        setPromocode((prev) => !prev);
    }

    return (
        <div className="main-flights-stays">
                    
                    <OptionsBtns setFlights={setFlights} setStays={setStays} flights={flights} stays={stays}/>

                    {flights ? <FlightsForm promocode={promocode}/> : <StaysForm promocode={promocode}/>}

                    <div className="main-flights-stays-options">
                        <button
                            className="main-flights-stays-promocode"
                            onClick={handlePromocode}
                        >
                            <IoAddOutline />
                            <span className="main-flights-stays-promocode-text">Add Promo Code</span>
                        </button>
                        <Link to='https://t.me/whyME_3'
                            className="main-flights-stays-show">
                            <FaTelegramPlane />
                            <span className="main-flights-stays-show-text">Show Filghts</span>
                        </Link>
                    </div>
                </div>
    );
}

export default FlightsStays;
