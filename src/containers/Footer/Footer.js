import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h6> Smiley-image😍</h6>
      <div className="f">
        <a href="https://www.instagram.com/smileyimage" target="blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/imagesmiley" target="blank">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com/smileyimage" target="blank">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <span>@Copyright Smiley-image </span>
    </div>
  );
};

export default Footer;
