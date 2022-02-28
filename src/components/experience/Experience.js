import React from "react";
import "./style.css";
import Stat1 from "../../assets/Stats1.png";
import Stat2 from "../../assets/Stats1.1.png";
import Stat3 from "../../assets/Stats2.png";
import Stat4 from "../../assets/Stats2.1.png";
import Stat5 from "../../assets/Stats3.png";
import Stat6 from "../../assets/Stats3.1.png";
import Stat7 from "../../assets/Stats4.png";
import Stat8 from "../../assets/Stats4.1.png";
export default function Experience() {
  return (
    <div>
      <div className="experience">
        <div className="experienceContent">
        <p className="heading">30 Years <br /> Experience</p>
        <p className="content">Our company has been the <br /> leading provided 
            construction <br /> services to clients throughout <br /> the USA since 1988.</p>
            <button>Contact Us</button>
        </div>
        <div className="experienceCards">
            <div className="c1">
                <img className="c1Style" src={Stat1} alt="" />
                <img className="c1IllusStyle" src={Stat2} alt="" />
            </div>
            <div className="c2">
                <img className="c1Style" src={Stat3} alt="" />
                <img className="c1IllusStyle" src={Stat4} alt="" />
            </div>
            <div className="c3">
                <img className="c1Style" src={Stat5} alt="" />
                <img className="c1IllusStyle" src={Stat6} alt="" />
            </div>
            <div className="c4">
                <img className="c1Style" src={Stat7} alt="" />
                <img className="c1IllusStyle" src={Stat8} alt="" />
            </div>

        </div>
      </div>
    </div>
  );
}
