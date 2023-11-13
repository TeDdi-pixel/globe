import { useState, useEffect } from "react";

const useImageHandling = (storageKey) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    try {
      const reader = new FileReader();
      const selectedFile = event.target.files[0];
      reader.readAsDataURL(selectedFile);

      if (selectedFile) {
        reader.onload = () => {
          const base64Image = reader.result;
          localStorage.setItem(storageKey, base64Image);
          setImage(base64Image);
        };
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const storedImage = localStorage.getItem(storageKey);
    if (storedImage) {
      setImage(storedImage);
    }
  }, [storageKey]);

  return [image, handleImageChange];
};

export default useImageHandling;