import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import fb from '../../assets/fb.png';
import linkdin from '../../assets/linkdin.png';
import twitter from '../../assets/twitter.png';
export default function Footer() {
  return (
    <div className="footr">
      <div className="footer">
        <div className="left">
          <p>
            <span> ADDRESS:</span> 6391 Elgin St. Celina, Delaware 10299
          </p>
          <p>
            <span>PHONE:</span>+84 1102 2703
          </p>
          <p>
            <span>EMAIL:</span>hello@thebox.com
          </p>
          <div className="footerLogo">
            <img className="logo"  src={logo} alt="" />
            <p><span> The</span> Box </p>
          </div>
        </div>
        <div className="right">
            <p>NEWSLETTER:</p>
            <input type="text" placeholder="Your email here" />
            <button>Subscribe</button>
            <p>Social:</p>
            <img className="socialIcon" src={fb} alt="" />
            <img className="socialIcon" src={linkdin} alt="" />
            <img className="socialIcon" src={twitter} alt="" />
        </div>
      </div>
      <div className="footerBar">
          <p>TheBox Company &copy; 2022. All Rights Reserved</p>
          </div>
    </div>
  );
}
