import { FaArrowLeft } from "react-icons/fa";

const BillingAddress = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">Billing Address</h2>

            <div class="card mb-4">
              <div class="card-body">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label d-flex" style={{ justifyContent: "space-between" }}>
                    <p style={{ fontSize: "larger" }}>Same as Shipping Address</p>
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label class="form-check-label d-flex" style={{ justifyContent: "space-between" }}>
                    <p style={{ fontSize: "larger" }}>Use Different Billing Address</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div className="d-flex">
                <FaArrowLeft />
                <p style={{ marginLeft: "10px", fontWeight: "600" }}>Return to Shipping</p>
              </div>

              <button class="cart-button" type="button">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingAddress;
