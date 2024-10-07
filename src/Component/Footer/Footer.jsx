import React from "react";
import "./Footer.css";
import User_Icon from "../../assets/User_Icon.jpeg";
import logo from "../../assets/logo.jpeg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>I am Fullstack developer in sri Lanka.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={User_Icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          2024 chamudi Rasanjalee.All rights reserved.{" "}
        </p>
        <div className="footer-bottom-right">
          <p>Terms of service</p>
          <p>privacy policy</p>
          <p>connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
