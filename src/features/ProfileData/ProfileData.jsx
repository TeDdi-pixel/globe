import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { LuUserCircle } from "react-icons/lu";
import { IoPencilOutline } from "react-icons/io5";

const ProfileData = () => {
  const userData = JSON.parse(Cookies.get("user"));
  const [image, setImage] = useState(userData.userPhoto || null);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const handleFileInputChange = (event) => {
    try {
      const reader = new FileReader();
      const selectedFile = event.target.files[0];
      reader.readAsDataURL(selectedFile);

      if (selectedFile) {
        reader.onload = () => {
          const base64Image = reader.result;
          localStorage.setItem("userImage", base64Image);
          setImage(base64Image);
        };
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    setEmail(userData.email);
    setUserName(userData.userName);
    if (!Cookies.get("user")) navigate("/flights");
    const storedImage = localStorage.getItem("userImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);
  return (
    <div className="personal-acc__profile-data">
      <div className="personal-acc__photo">
        {image ? (
          <form className="personal-acc__photo__wrapper">
            <img src={image} alt="" />
            <label htmlFor="avatar" className="personal-acc__photo_change">
              <IoPencilOutline style={{ width: "24px", height: "24px" }} />
              <input
                style={{ width: "0" }}
                type="file"
                id="avatar"
                accept="image/*"
                onChange={handleFileInputChange}
              />
            </label>
          </form>
        ) : (
          <div
            className="personal-acc__photo__wrapper"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LuUserCircle
              stroke="#121"
              strokeWidth="1.3px"
              style={{ width: "130px", height: "130px" }}
            />
            <label htmlFor="avatar" className="personal-acc__photo_change">
              <IoPencilOutline style={{ width: "24px", height: "24px" }} />
              <input
                style={{ width: "0" }}
                type="file"
                id="avatar"
                accept="image/*"
                onChange={handleFileInputChange}
              />
            </label>
          </div>
        )}
      </div>
      <div className="personal-acc__name">{userName}</div>
      <div className="personal-acc__email">{email}</div>
    </div>
  );
};

export default ProfileData;
