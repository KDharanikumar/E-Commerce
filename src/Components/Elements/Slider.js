import Model3 from "../../Image/Model-3.jpg";
import ModelS from "../../Image/Model-S.jpg";
import ModelX from "../../Image/Model-X.jpg";
import ModelY from "../../Image/Model-Y.jpg";

const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="row">
          <ul className="slider-content d-flex flex-wrap justify-content-around">
            <li className="slider-image">
              <img src={Model3} alt="Model-3"></img>
            </li>
            <li className="slider-image">
              <img src={ModelS} alt="Model-S"></img>
            </li>
            <li className="slider-image">
              <img src={ModelX} alt="Model-X"></img>
            </li>
            <li className="slider-image">
              <img src={ModelY} alt="Model-Y"></img>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Slider;
