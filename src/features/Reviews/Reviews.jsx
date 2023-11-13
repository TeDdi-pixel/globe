import React, { useContext } from 'react';
import Slider from "../../shared/Slider/Slider";
import { DataContext } from "../../Context/Context";

const Reviews = () => {
    const data = useContext(DataContext);
    const fakeData = data.fakeData;
    return (
        <>
          <h2 className="main-reviews">Reviews</h2>
                <h3 className="main-reviews-sub">What people says about Golobe facilities</h3>
                
                <Slider slides={fakeData} />  
        </>
    );
}

export default Reviews;
