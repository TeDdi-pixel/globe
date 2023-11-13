import React from "react";
import { FaCcVisa } from "react-icons/fa";

const CardDate = ({ item }) => {
  return (
    <li style={{ color: "white" }}>
      <div className="personal-acc__payments-card-date__wrapper">
        <span className="personal-acc__payments-card-valid-date">
          Valid Thru
        </span>
        <span className="personal-acc__payments-card-date">
          {item.expireDate}
        </span>
      </div>
      <span className="personal-acc__payments-card-type">
        <FaCcVisa style={{ fontSize: "40px" }} />
      </span>
    </li>
  );
};

export default CardDate;
