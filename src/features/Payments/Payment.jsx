import React, { useEffect, useState } from "react";
import NewCardForm from "../../entities/NewCardForm/NewCardForm";
import useWindowResize from "../../hooks/useWindowResize";
import { getUser, updateUser } from "../../helpers/userUtils";
import { saveCardBackground } from "../../helpers/localStorageUtils";
import Card from "../../entities/card/Card";
import NewCard from "../../entities/card/NewCard";

const Payments = () => {
  const [showForm, setShowForm] = useState(false);
  const user = getUser();
  const [creditCards, setCreditCards] = useState([]);
  const [background, setBackground] = useState(null);
  const [lastIndex, setLastIndex] = useState(0);
  const [deleteMassage, setDeleteMassage] = useState(false);
  const { isFullWidth } = useWindowResize(885);

  // Проверка и инициализация пользовательских кредитных карт
  if (!user.creditCards || !Array.isArray(user.creditCards)) {
    user.creditCards = [];
  }

  // Функция для переключения видимости формы
  const toggleFormVisibility = () => {
    setDeleteMassage(false);
    setShowForm((prev) => !prev);
    document.body.style.overflow = showForm ? "auto" : "hidden";
  };

  // Функция для удаления кредитной карты
  const handleDeleteCard = (cardIndex) => {
    const updatedCreditCards = creditCards.filter(
      (_, index) => index !== cardIndex
    );
    const updatedUser = { ...user, creditCards: updatedCreditCards };
    updateUser(updatedUser);
    setCreditCards(updatedCreditCards);
    handleHideMassage();
  };

  // Функция для обработки фоновой картинки кредитной карты
  const handleCardBackground = (event) => {
    try {
      const reader = new FileReader();
      const selectedFile = event?.target?.files[0];
      reader.readAsDataURL(selectedFile);

      if (selectedFile) {
        reader.onload = () => {
          const base64Image = reader.result;
          saveCardBackground(lastIndex, base64Image);
          setBackground((prevBackgrounds) => {
            const newBackgrounds = [...prevBackgrounds];
            newBackgrounds[lastIndex] = base64Image;
            return newBackgrounds;
          });
        };
      }
    } catch (error) {
      alert(error);
    }
  };

  // Функции для управления отображением сообщения об удалении
  const handleDeleteMassage = (index) => {
    setDeleteMassage(index);
  };

  const handleHideMassage = () => {
    setDeleteMassage(false);
  };

  // Загрузка кредитных карт пользователя и их фоновых картинок
  useEffect(() => {
    setCreditCards([...user.creditCards]);
    const backgrounds = [];
    for (let i = 0; ; i++) {
      if (!localStorage.getItem(`cardBackground[${i}]`)) break;
      const cardBackground = localStorage.getItem(`cardBackground[${i}]`);
      backgrounds.push(cardBackground);
    }
    setBackground(backgrounds);
  }, [user.creditCards, background]);

  return (
    <div className="personal-acc__payments">
      <h1 className="personal-acc__payments-title">Payment methods</h1>
      <div
        className="personal-acc__payments-info"
        style={{
          justifyContent:
            creditCards.length < 2 && !isFullWidth
              ? "flex-start"
              : "space-evenly",
        }}
      >
        <Card
          user={user}
          background={background}
          creditCards={creditCards}
          handleDeleteMassage={handleDeleteMassage}
          setLastIndex={setLastIndex}
          handleCardBackground={handleCardBackground}
          deleteMassage={deleteMassage}
          handleHideMassage={handleHideMassage}
          handleDeleteCard={handleDeleteCard}
        />
        <NewCard toggleFormVisibility={toggleFormVisibility} />
        <NewCardForm showForm={showForm} hideForm={toggleFormVisibility} />
      </div>
    </div>
  );
};

export default Payments;
