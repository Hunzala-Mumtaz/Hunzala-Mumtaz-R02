import "./style.css";
import feature from "../../assets/featureproject.png";
import back from "../../assets/back.png";
import next from "../../assets/next.png";
function Top() {
  return (
    <div>
      <div className="backgroundImg">
        <h1>
          building things <br /> is our mission.
        </h1>
        <div className="featureProject">
          <img className="feature" src={feature} alt="" />
          <div className="feature">
              <a href="#"><img src={back} alt="" /></a>
              <a href="#"><img src={next} alt="" /></a>
          </div>
        </div>
        
      </div>
      <div className="clear"></div>
    </div>
  );
}
export default Top;
