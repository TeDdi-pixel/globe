import React from "react";
import { CgImage } from "react-icons/cg";

const CardChangeBG = ({setLastIndex,index,handleCardBackground}) => {
  return (
    <form>
      <label
        htmlFor="cardBackground"
        className="personal-acc__payments-card-add-img"
      >
        <CgImage onClick={() => setLastIndex(index)} />
      </label>
      <input
        type="file"
        id="cardBackground"
        accept="image/*"
        onChange={(event) => handleCardBackground(event)}
        style={{ display: "none" }}
      />
    </form>
  );
};

export default CardChangeBG;
