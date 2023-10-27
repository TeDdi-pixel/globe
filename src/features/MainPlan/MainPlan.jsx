import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/Context';

const MainPlan = () => {
    const data = useContext(DataContext);

    return (
        <>
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
                    data.places.map(item => {
                        return (
                            <Link key={item.id} to='/' className="main-plan-trip-place">
                                <img src={item.img} alt="" />
                                <div className="main-plan-trip-place-options">
                                    <li>{item.title}</li>
                                    <li>{item.entertainment}</li>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    );
}

export default MainPlan;
