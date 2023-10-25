import React from 'react';

const OptionsBtns = ({ setFlights, setStays, flights, stays }) => {
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
    return (
        <>
            <div className="main-flights-stays__wrapper">
                <button className={
                    (flights ? "main-chose-flights main-chose-flights_active" : 'main-chose-flights')
                }
                    onClick={changeActivetedBtn}
                >
                    <li className="flights-btn">
                        <img src="./assets/img/airplane (1).svg" alt="" className="flights-btn" />
                    </li>
                    <li className="flights-btn">Flights</li>
                    <div className={(flights ?
                        "main-chose-flights-underscore main-chose-flights-underscore_active"
                        :
                        'main-chose-flights-underscore')}></div>
                </button>

                <span className="main-flights-stays-line"></span>
                <button className={
                    (stays ? "main-chose-stays main-chose-stays_active" : 'main-chose-stays'
                    )}
                    onClick={changeActivetedBtn}
                >
                    <li className="stays-btn">
                        <img src="./assets/img/ion_bed.svg" alt="" className="stays-btn" />
                    </li>
                    <li className="stays-btn">Stays</li>
                    <div className={
                        (stays ? "main-chose-stays-underscore main-chose-stays-underscore_active" : 'main-chose-stays-underscore'
                        )}></div>
                </button>
            </div>

        </>
    );
}

export default OptionsBtns;
