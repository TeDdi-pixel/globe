import Cookies from "js-cookie";

export const getUser = () => {
  const user = JSON.parse(Cookies.get("user"));
  if (!user.creditCards || !Array.isArray(user.creditCards)) {
    user.creditCards = [];
  }
  return user;
};

export const updateUser = (updatedUser) => {
  Cookies.set("user", JSON.stringify(updatedUser));
};

export const removeUser = () => {
  Cookies.remove("user");
};
