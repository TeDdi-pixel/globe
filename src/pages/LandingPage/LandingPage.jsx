import React from "react";
import LandingPageMain from "../../widgets/LandingPageMain/LandingPageMain";
import Layout from "../../layout/Layout";
import useUserState from "../../hooks/useUserConnect";

function LandingPage() {
  const { active, isUserLoggedIn, handleBurgerClick, handleLogOut } =
    useUserState();

  return (
    <Layout
      isUserLoggedIn={isUserLoggedIn}
      onLogOut={handleLogOut}
      active={active}
      handleBurgerClick={handleBurgerClick}
    >
      <LandingPageMain active={active} />
    </Layout>
  );
}

export default LandingPage;
