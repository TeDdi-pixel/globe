import React from 'react';
import TabItem from '../../shared/ui/TabItem';
import Cookies from 'js-cookie';
import TabItemDate from '../../shared/ui/TabItemDate';

const Account = () => {
    const user = JSON.parse(Cookies.get('user'));
    return (
        <div className='personal-acc__account'>
            <h1>Account</h1>
            <div className='personal-acc__account-info'>
                <TabItem data={user.userName} tabName={'Name'} type={"text"}/>
                <TabItem data={user.email} tabName={'Email'} type={"email"}/>
                <TabItem data={'**********'} tabName={'Password'} type={"password"}/>
                <TabItem data={user.address} tabName={'Address'} type={"text"}/>
                <TabItemDate data={user.date} tabName={'Date of birth'} type={"date"}/>
            </div>
        </div>
    );
}

export default Account;
