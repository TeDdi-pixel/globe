import React from "react";
import LandingPageMain from "../../widgets/LandingPageMain/LandingPageMain";
import Layout from "../../layout/Layout";
import useUserState from "../../hooks/useUserConnect";

const FlightsPage = () => {
  const { active, isUserLoggedIn, emailName, handleBurgerClick, handleLogOut } =
    useUserState();
  return (
    <Layout
      isUserLoggedIn={isUserLoggedIn}
      onLogOut={handleLogOut}
      active={active}
      handleBurgerClick={handleBurgerClick}
      userEmail={emailName}
    >
      <LandingPageMain />
    </Layout>
  );
};

export default FlightsPage;
