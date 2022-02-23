import React from "react";
import "./Photo.css";
//import Data from "../../Data/Photo.json";

const Photos = () => {
  return (
    <div className="p">
      <div className="p-i">
        <img src={require("../../assets/image/1.jpeg").default} alt="/" />
        <img src={require("../../assets/image/2.jpeg").default} alt="/" />
        <img src={require("../../assets/image/3.jpg").default} alt="/" />
        <img src={require("../../assets/image/4.jpeg").default} alt="/" />
        <img src={require("../../assets/image/5.jpeg").default} alt="/" />
        <img src={require("../../assets/image/7.jpeg").default} alt="/" />
        <img src={require("../../assets/image/8.jpeg").default} alt="/" />
        <img src={require("../../assets/image/9.jpeg").default} alt="/" />
        <img src={require("../../assets/image/10.jpeg").default} alt="/" />
        <img src={require("../../assets/image/11.jpeg").default} alt="/" />
        <img src={require("../../assets/image/12.jpeg").default} alt="/" />
        <img src={require("../../assets/image/13.jpeg").default} alt="/" />
         <img src={require("../../assets/image/14.jpeg").default} alt="/" />
        <img src={require("../../assets/image/15.jpg").default} alt="/" />
        <img src={require("../../assets/image/18.jpeg").default} alt="/" />
        <img src={require("../../assets/image/17.jpeg").default} alt="/" />
       <img src={require("../../assets/image/16.jpeg").default} alt="/" />
      </div>
    </div>
  );
};

export default Photos;
