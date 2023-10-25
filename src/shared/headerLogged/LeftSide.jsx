import React from 'react';
import airplane from './../../assets/img/airplane (3).svg';
import bed from './../../assets/img/ion_bed (1).svg';
import OptionTab from '../headerDefault/ui/OptionTab';
const LeftSide = () => {
    return (
        <div className="header-left-side header-left-side_logged">
            <OptionTab label={'Find Flight'} img={airplane} className={'header-find-flights header-find-flights_logged'}/>
            <OptionTab label={'Find Stays'} img={bed} className={'header-find-stays header-find-stays_logged'}/>
        </div>
    );
}

export default LeftSide;
