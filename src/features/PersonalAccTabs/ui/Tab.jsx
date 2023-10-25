import React from 'react';

const Tab = ({ onClick, isActive, label }) => (
    <li className="personal-acc__tab" onClick={onClick}>
        {label}
        <div className={isActive ? "personal-acc__tab-underscore personal-acc__tab-underscore_active" : "personal-acc__tab-underscore"}></div>
    </li>
);

export default Tab;