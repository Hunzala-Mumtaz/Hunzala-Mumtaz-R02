import React from "react";
import "./style.css";
import S1 from "../../assets/S1.png";
import S2 from "../../assets/S2.png";
import S3 from "../../assets/S3.png";
import S4 from "../../assets/S4.png";
import S5 from "../../assets/S5.png";
import S6 from "../../assets/S6.png";
export default function Services() {
  return (
    <div>
      <div className="services">
        <p>Services</p>
        <div className="container">
          <img src={S1} alt="" />
          <img src={S2} alt="" />
          <img src={S3} alt="" /> <br />
          <img src={S4} alt="" />
          <img src={S5} alt="" />
          <img src={S6} alt="" />
        </div>
      </div>
    </div>
  );
}
