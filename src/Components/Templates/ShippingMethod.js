import { FaArrowLeft } from "react-icons/fa";

const ShippingMethod = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">Shipping Method</h2>

            <div class="card mb-4">
              <div class="card-body">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label d-flex" style={{ justifyContent: "space-between" }}>
                    <p style={{ fontSize: "larger" }}>Free Shipping</p>
                    <p style={{ fontSize: "larger", fontWeight: 800 }}>Free</p>
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label class="form-check-label d-flex" style={{ justifyContent: "space-between" }}>
                    <p>Cash On Delivery (COD)</p>
                    <p style={{ fontSize: "larger", fontWeight: 800 }}>$ 100000</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div className="d-flex">
                <FaArrowLeft />
                <p style={{ marginLeft: "10px", fontWeight: "600" }}>Return to Information</p>
              </div>

              <button class="cart-button" type="button">
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingMethod;
