import React from "react";
import "./style.css";
import R1 from "../../assets/Repu1.png";
import R2 from "../../assets/Repu2.png";
import R3 from "../../assets/Repu3.png";
export default function Reputation() {
  return (
    <div>
      <div className="reputation">
        <p>Our Reputation</p>
        <div className="repuImgContainer">
          <img src={R1} alt="" />
          <img src={R2} alt="" />
          <img src={R3} alt="" />
        </div>
      </div>
    </div>
  );
}
