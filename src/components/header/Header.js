import "./style.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div>
      <div className="navBar">
        <img src={logo} alt="logo" />
        <p>The Box</p>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Project</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
}

export default Header;
