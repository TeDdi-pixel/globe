export const saveCardBackground = (index, base64Image) => {
  localStorage.setItem(`cardBackground[${index}]`, base64Image);
};

export const getCardBackground = (index) => {
  return localStorage.getItem(`cardBackground[${index}]`);
};

export const removeCardBackground = (index) => {
  localStorage.removeItem(`cardBackground[${index}]`);
};
