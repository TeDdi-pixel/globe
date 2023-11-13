
import React, { useState } from 'react';
import Account from '../Account/Account';

import AccBackground from '../../features/AccBackground/AccBackground';
import ProfileData from '../../features/ProfileData/ProfileData';
import PersonalAccTabs from '../../features/PersonalAccTabs/PersonalAccTabs';
import Payments from '../../features/Payments/Payment';
import History from '../History/History';

const PersonalAccountMain = () => {
    const [tabs, setTabs] = useState({
        account: true,
        history: false,
        payment: false
    })
    return (
        <>
            <main className='personal-acc'>
                <div className="personal-acc__container">
                    <AccBackground />
                    <ProfileData />
                    <PersonalAccTabs setTabs={setTabs} tabs={tabs} />
                    <div className='personal-acc__tab-info-wrapper'>
                        {tabs.account ? <Account /> : null}
                        {tabs.history ? <History /> : null}
                        {tabs.payment ? <Payments /> : null}
                    </div>
                </div>
            </main>
        </>
    );
}

export default PersonalAccountMain;
