import React from 'react';
import { Link } from 'react-router-dom';

const OptionTab = ({ label, img, className}) => {
    return (
        <Link className={className}>
            <li>
                <img src={img} alt=""/>
            </li>
            <li>{label}</li>
        </Link>
    );
}

export default OptionTab;
