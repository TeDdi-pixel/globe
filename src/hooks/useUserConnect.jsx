import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import { removeUser } from "../helpers/userUtils";

const useUserState = () => {
  const [active, setActive] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!Cookies.get("user"));

  const userCookie = Cookies.get("user");
  const emailData = userCookie && JSON.parse(userCookie).email;
  const emailParts = emailData && emailData.split("@");
  const emailName = emailParts && emailParts[0];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isUserLoggedIn && location.pathname === "/") {
      navigate("/flights");
    }
  }, [isUserLoggedIn, location, navigate]);

  const handleBurgerClick = () => {
    setActive((prev) => !prev);
  };
  const handleLogOut = () => {
    removeUser();
    setIsUserLoggedIn((prev) => !prev);
  };

  return { active, isUserLoggedIn, emailName, handleBurgerClick, handleLogOut };
};

export default useUserState;
