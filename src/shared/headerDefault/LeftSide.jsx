import React from 'react';
import OptionTab from './ui/OptionTab';
import airplane from './../../assets/img/airplane (1).svg';
import bed from './../../assets/img/ion_bed.svg';

const LeftSide = () => {
    return (
        <div className="header-left-side header-default-left-side_logged">
            <OptionTab
                label={'Find Flight'}
                img={airplane}
                className={'header-default-find-flights header-default-find-flights_logged'}
            />
            <OptionTab
                label={'Find Stays'}
                img={bed}
                className={'header-default-find-stays header-default-find-stays_logged'}
            />
        </div>
    );
}

export default LeftSide;
