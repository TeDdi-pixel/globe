import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const NewCard = ({ toggleFormVisibility }) => {
  return (
    <label htmlFor="newCard" className="personal-acc__payments-new-card">
      <CiCirclePlus fill="#8DD3BB" style={{ fontSize: "60px" }} />
      <span>Add a new card</span>
      <input
        type="button"
        id="newCard"
        className="personal-acc__payments-new-card-input"
        onClick={toggleFormVisibility}
      />
    </label>
  );
};

export default NewCard;
