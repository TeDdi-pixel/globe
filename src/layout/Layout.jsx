import React from "react";
import Header from "../widgets/header/Header";
import Footer from "../widgets/Footer/Footer";

const Layout = ({
  isUserLoggedIn,
  onLogOut,
  active,
  handleBurgerClick,
  userEmail,
  useDefaultHeader,
  children,
}) => {
  return (
    <>
      <Header
        isUserLoggedIn={isUserLoggedIn}
        onLogOut={onLogOut}
        active={active}
        handleBurgerClick={handleBurgerClick}
        userEmail={userEmail}
        useDefaultHeader={useDefaultHeader}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
