import React from "react";
import { IoTrashBin } from "react-icons/io5";

const CardNumber = ({ item, index, onClick }) => {
  const lastFourDigits = item.cardNumber.slice(-4);
  const cardNumberWithoutLastFour = item.cardNumber.slice(0, -4);
  return (
    <li style={{ color: "white" }}>
      <div className="personal-acc__payments-card-number">
        <span className="personal-acc__payments-card-stars">
          {cardNumberWithoutLastFour.replace(/\d/g, "*")}
        </span>
        {lastFourDigits}
      </div>
      <span className="personal-acc__payments-card-number-trash">
        <IoTrashBin
          style={{ fontSize: "30px" }}
          fill="white"
          onClick={() => onClick(index)}
        />
      </span>
    </li>
  );
};

export default CardNumber;
