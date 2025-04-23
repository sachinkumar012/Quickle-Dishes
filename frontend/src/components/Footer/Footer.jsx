import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2 id="footer-logo">FoodieCrush</h2>
          <p>
            {" "}
            The purpose of FoodieCrush is to provide users with a convenient
            platform for ordering food from various restaurants without leaving
            their homes. It aims to simplify the food ordering process while
            offering administrators the ability to manage food items, orders,
            and delivery status effectively.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-735-512-5762</li>
            <li>contact@foodiecrush.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © FoodieCrush.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
