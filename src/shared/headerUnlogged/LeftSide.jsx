import React from 'react';
import OptionTab from '../headerDefault/ui/OptionTab';
import airplane from './../../assets/img/airplane (3).svg';
import bed from './../../assets/img/ion_bed (1).svg';
const LeftSide = () => {
    return (
        <div className="header-left-side">
            <OptionTab label={'Find Flight'} img={airplane} className={'header-find-flights'}/>
            <OptionTab label={'Find Flight'} img={bed} className={'header-find-stays'}/>
        </div>
    );
}

export default LeftSide;
