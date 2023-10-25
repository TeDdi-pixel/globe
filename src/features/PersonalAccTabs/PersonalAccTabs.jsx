import React from 'react';
import Tab from './ui/Tab';


const PersonalAccTabs = ({ setTabs, tabs }) => {

    const handleTabClick = (tabName) => {
        setTabs((prevTabs) => ({
            ...prevTabs,
            account: tabName === 'account',
            history: tabName === 'history',
            payment: tabName === 'payment',
        }));
    };

    return (
        <div className='personal-acc__tabs-container'>
            <div className='personal-acc__tabs'>
                <Tab
                    onClick={() => handleTabClick('account')}
                    isActive={tabs.account}
                    label="Account"
                />
                <span className="personal-acc__spread"></span>
                <Tab
                    onClick={() => handleTabClick('history')}
                    isActive={tabs.history}
                    label="History"
                />
                <span className="personal-acc__spread"></span>
                <Tab
                    onClick={() => handleTabClick('payment')}
                    isActive={tabs.payment}
                    label="Payment methods"
                />
            </div>
        </div>
    );
}

export default PersonalAccTabs;