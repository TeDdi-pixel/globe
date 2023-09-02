import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = ({ style }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isButtonVisible, setButtonVisible] = useState(window.innerWidth >= 471);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
    setButtonVisible(window.innerWidth >= 471);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isNarrowScreen = windowWidth <= 471;

  // Условия для стилей
  const formControlStyle = isNarrowScreen ? { display: 'none' } : {};
  const buttonControlStyle = isButtonVisible ? { display: 'none' } : { display: 'block' };

  return (
    <footer style={style} className="footer">
      <div className="footer__wrapper">
        <div className="footer-subscribe">
          <div className="footer-subscribe-text">
            <h2>Subscribe Newsletter</h2>
            <h3>The Travel</h3>
            <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
            <form className="footer-subscribe-email" style={formControlStyle}>
              <FormControl variant="outlined" className="footer-subscribe-email-input">
                <InputLabel id='main-flights__select-label'>Your email address</InputLabel>
                <OutlinedInput
                  labelId="main-flights__select-label"
                  id="demo-simple-select"
                  label="Your email address"
                />
              </FormControl>
              <button className="footer-subscribe-email-button">Subscribe</button>
            </form>
            <Link className="footer-subscribe-button" style={buttonControlStyle}>
              <span>Subscribe</span>
            </Link>
          </div>
          <div className="footer-subscribe-img__wrapper">
            <img src="./img/emojione-v1_open-mailbox-with-lowered-flag-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
