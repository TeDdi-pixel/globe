import React from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = ({active}) => {
    return (
        <div className={(active ? 'header-burger-menu header-burger-menu_active' : 'header-burger-menu')}>
                    <Link className="header-find-flights">
                        <li>
                            <img src="./assets/img/airplane (1).svg" alt="" />
                        </li>
                        <li>Find Flight</li>

                    </Link>
                    <Link className="header-find-stays">
                        <li>
                            <img src="./assets/img/ion_bed (1).svg" alt="" />
                        </li>
                        <li>Find Stays</li>
                    </Link>
                    <Link to='/login' className="header-login">Login</Link>
                    <Link to='/signup' className="header-signUp__wrapper">
                        <span className="header-signUp">Sign up</span>
                    </Link>
                </div>
    );
}

export default BurgerMenu;
