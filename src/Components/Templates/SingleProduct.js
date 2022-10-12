import Model3 from "../../Image/Model-3.jpg";
import Model3Spec from "../../Image/Model-3-Specs.jpg";
import { FaStar } from "react-icons/fa";

const SingleProduct = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="col-md-12">
          <div className="row ">
            <div className="col-md-6">
              <div className="single-product-img">
                <img src={Model3} alt="Img"></img>
              </div>
            </div>
            <div className="col-md-6" style={{ marginBottom: 80 }}>
              <h1>Model - 3</h1>
              <div className="ratings ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="product-price">$ 100000</span>
              </div>

              <p>Quantity</p>
              <div className="d-flex">
                <ul className="product-count-button">
                  <li> - </li>
                  <li> 1 </li>
                  <li> + </li>
                </ul>
                <button class="cart-button" type="button">
                  ADD TO CART
                </button>
              </div>
              <p>Country of origin: India 🇮🇳</p>
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
                Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
                modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam
                sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto
                libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                doloremque.
              </p>
            </div>
          </div>
          <div className="container" style={{ padding: 30, backgroundColor: "black", color: "white" }}>
            <div className="row ">
              <h4 style={{ textAlign: "center", marginBottom: 50, fontSize: "xx-large", fontWeight: 700 }}>
                Model 3 Specs
              </h4>
              <div className="col-md-6">
                <img className="prod-spec-img" src={Model3Spec} alt={Model3}></img>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>
                    <h5>Battery</h5>
                    <p>Long Range</p>
                  </li>

                  <li>
                    <h5>*Acceleration</h5>
                    <p>3.1 s 0-60 mph</p>
                  </li>

                  <li>
                    <h5>Range </h5>
                    <p>315 miles</p>
                  </li>

                  <li>
                    <h5>Drive</h5>
                    <p>Dual Motor All-Wheel Drive</p>
                  </li>

                  <li>
                    <h5>Seating</h5>
                    <p>5 Adults</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>
                    <h5>Weight</h5>
                    <p>4,048 lbs</p>
                  </li>

                  <li>
                    <h5>Cargo</h5>
                    <p>23 cu ft</p>
                  </li>

                  <li>
                    <h5>Displays </h5>
                    <p>15" Center Touchscreen</p>
                  </li>

                  <li>
                    <h5>Supercharging Max/ Payment</h5>
                    <p>Type 250 kW max; Pay Per Use</p>
                  </li>

                  <li>
                    <h5>Onboard Charger Max</h5>
                    <p>11.5 kW max (48A)</p>
                  </li>

                  <li>
                    <h5>Warranty</h5>
                    <p>
                      Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or
                      120,000 mi, whichever comes first
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
