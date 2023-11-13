import React from "react";
import PersonalAccountMain from "../../widgets/PersonalAccountMain/PersonalAccountMain";
import Layout from "../../layout/Layout";
import useUserState from "../../hooks/useUserConnect";

const PersonalAccountPage = () => {
  const { active, isUserLoggedIn, emailName, handleBurgerClick } =
    useUserState();
  return (
    <Layout
      isUserLoggedIn={isUserLoggedIn}
      active={active}
      handleBurgerClick={handleBurgerClick}
      userEmail={emailName}
      useDefaultHeader={true}
    >
      <PersonalAccountMain active={active} />
    </Layout>
  );
};

export default PersonalAccountPage;
