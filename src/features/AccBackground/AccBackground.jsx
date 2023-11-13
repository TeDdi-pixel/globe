import React from "react";
import { IoCloudUpload } from "react-icons/io5";
import useImageHandling from "../../hooks/useImageHandling";

const AccBackground = () => {
  const [background, handleBackground] = useImageHandling("profileBackground");
  return (
    <div className="personal-acc__top-background">
      {background ? (
        <img src={background} alt="ProfileBackground" />
      ) : (
        <img
          src="./assets/img/ProfileBackground.webp"
          alt="ProfileBackground"
        />
      )}
      <form>
        <label htmlFor="background" className="personal-acc__new-cover">
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoCloudUpload style={{ fontSize: "16px" }} fill="white" />
          </div>
          <span>Upload new cover</span>
          <input
            type="file"
            id="background"
            accept="image/*"
            onChange={handleBackground}
          />
        </label>
      </form>
    </div>
  );
};

export default AccBackground;
