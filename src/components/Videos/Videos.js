import React from "react";
import "./Video.css";
 

const Videos = () => {
   
  return (
    <div className="v">
       <img src={require("../../assets/image/n1.jpg").default} alt="/" />
       <img src={require("../../assets/image/n2.jpeg").default} alt="/" />
       <img src={require("../../assets/image/n3.jpeg").default} alt="/" />
       <img src={require("../../assets/image/n4.jpeg").default} alt="/" />
       <img src={require("../../assets/image/n5.jpeg").default} alt="/" />
       {/* <img src={require("../../assets/image/n6.jpg").default} alt="/" /> */}
       <img src={require("../../assets/image/n6.jpg").default} alt="/" />
       <img src={require("../../assets/image/n8.jpeg").default} alt="/" />
       <img src={require("../../assets/image/n9.jpeg").default} alt="/" />
       <img src={require("../../assets/image/n10.jpeg").default} alt="/" />
       <img src={require("../../assets/image/n11.jpg").default} alt="/" />
    </div>
  );
};

export default Videos;
