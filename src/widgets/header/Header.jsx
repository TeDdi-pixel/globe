import React from "react";
import HeaderLogged from "../HeaderLogged/HeaderLogged";
import HeaderUnlogged from "../HeaderUnlogged/HeaderUnlogged";
import HeaderDefault from "../HeaderDefault/HeaderDefault";

const Header = ({
  isUserLoggedIn,
  onLogOut,
  active,
  handleBurgerClick,
  userEmail,
  useDefaultHeader,
}) => {
  return useDefaultHeader ? (
    <HeaderDefault active={active} handleBurgerClick={handleBurgerClick} />
  ) : isUserLoggedIn ? (
    <HeaderLogged
      onLogOut={onLogOut}
      active={active}
      handleBurgerClick={handleBurgerClick}
      userEmail={userEmail}
    />
  ) : (
    <HeaderUnlogged active={active} handleBurgerClick={handleBurgerClick} />
  );
};

export default Header;
