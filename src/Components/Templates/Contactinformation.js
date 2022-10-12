import { FaArrowLeft } from "react-icons/fa";
import Model3 from "../../Image/Model-3.jpg";

const Contactinformation = () => {
  return (
    <section className="Contactinformation">
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-md-6">
            <p>Cart > Information > Shipping > Payment</p>
            <div className="d-flex" style={{ alignItems: "baseline", justifyContent: "space-between" }}>
              <h3>Contact Information</h3>
              <h5>
                Already have an Account?<b style={{ marginLeft: 5 }}>Log In</b>
              </h5>
            </div>

            <div class="mb-3">
              <input type="email" class="form-control" placeholder="Email address" />
            </div>

            <div class="mb-3">
              <input type="email" class="form-control" placeholder="Phone No" />
            </div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div class="mb-3">
                <input class="form-control" style={{ width: "300px" }} placeholder="First Name" />
              </div>

              <div class="mb-3">
                <input type="email" class="form-control" style={{ width: "300px" }} placeholder="Last Name" />
              </div>
            </div>

            <div class="mb-3">
              <input type="email" class="form-control" placeholder="Address" />
            </div>

            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div class="mb-3">
                <input type="email" class="form-control" style={{ width: "200px" }} placeholder="City" />
              </div>

              <select class="form-select" style={{ width: "200px", height: "38px" }}>
                <option selected>State</option>
              </select>

              <div class="mb-3">
                <input type="email" class="form-control" style={{ width: "200px" }} placeholder="Pin Code" />
              </div>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Save this information for next time
              </label>
            </div>

            <div
              className="d-flex"
              style={{ justifyContent: "space-between", marginTop: "20px", alignItems: "baseline" }}
            >
              <div className="d-flex">
                <FaArrowLeft />
                <p style={{ marginLeft: "10px", fontWeight: "600" }}>Return to Cart</p>
              </div>
              <button class="review-button" type="button">
                Continue to Shopping
              </button>
            </div>
          </div>
          <div className="col-md-6 cart-checkout">
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div className="d-flex">
                <img src={Model3} alt="Img" />
                <p style={{ alignSelf: "center" }}>Model-3</p>
              </div>
              <div style={{ alignSelf: "center" }}>$ 100000</div>
            </div>

            <hr></hr>

            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <p>Sub Total</p>
              <p>$ 100000</p>
            </div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr></hr>

            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <h3>Total</h3>
              <h3>$ 100000</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactinformation;
