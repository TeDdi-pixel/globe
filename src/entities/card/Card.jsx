import React from "react";
import CardNumber from "./ui/CardNumber";
import CardChangeBG from "./ui/CardChangeBG";
import CardDate from "./ui/CardDate";
import CardDeleting from "../../shared/ui/CardDeleting";

const Card = ({
  creditCards,
  user,
  background,
  handleDeleteMassage,
  setLastIndex,
  handleCardBackground,
  deleteMassage,
  handleHideMassage,
  handleDeleteCard,
}) => {
  return (
    <>
      {creditCards
        ? user.creditCards.map((item, index) => {
            return (
              <div
                style={
                  !background?.[index]
                    ? { backgroundColor: "#8dd3bb" }
                    : { backgroundColor: "transparent" }
                }
                key={index}
                htmlFor="card"
                className="personal-acc__payments-card"
              >
                <div className="personal-acc__payments-card-number__wrapper">
                  <CardNumber
                    item={item}
                    index={index}
                    onClick={handleDeleteMassage}
                  />

                  <CardChangeBG
                    setLastIndex={setLastIndex}
                    index={index}
                    handleCardBackground={handleCardBackground}
                  />
                  <CardDate item={item} />
                </div>
                <div>
                  <img
                    className="personal-acc__payments-card-background-img"
                    src={background?.[index]}
                    alt=""
                  />
                </div>
                <CardDeleting
                  showDeleteMassage={deleteMassage === index}
                  hideDeleteMassage={handleHideMassage}
                  deleteCard={() => handleDeleteCard(index)}
                />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Card;
