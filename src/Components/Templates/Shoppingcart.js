import Model3 from "../../Image/Model-3.jpg";

const Shoppingcart = () => {
  return (
    <section className="Shoppingcart">
      <div className="container">
        <div className="row">
          <h1 style={{ textAlign: "center", marginBottom: 50 }}>Shopping Cart</h1>
          <hr></hr>
          <div className="p-0">
            <ul className="d-flex" style={{ justifyContent: "space-between", listStyle: "none", fontWeight: "bold" }}>
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Total</li>
            </ul>
            <hr></hr>
            <div className="cart-inside-item">
              <div className="d-flex" style={{ alignItems: "center" }}>
                <div>
                  <img src={Model3} alt="Model-3" className="cart-img"></img>
                </div>
                <div>
                  <p>Model-3</p>
                  <p>Remove</p>
                </div>
              </div>
              <div>$ 100000</div>
              <ul className="product-count-button" style={{ height: "fit-content" }}>
                <li> - </li>
                <li> 1 </li>
                <li> + </li>
              </ul>
              <div>$ 100000</div>
            </div>
          </div>
          <hr></hr>
          <div className="row" style={{ justifyContent: "end" }}>
            <div class="card" style={{ width: "fit-content", boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}>
              <div class="card-body">
                <h2 style={{ textAlign: "start", marginBottom: "10px" }}>Order Summery</h2>
                <div className="d-flex" style={{ justifyContent: "space-between", marginBottom: "10px" }}>
                  <h5>Shipping</h5>
                  <h5>Free</h5>
                </div>
                <div className="d-flex" style={{ justifyContent: "space-between", marginBottom: "20px" }}>
                  <h4>SubTotal</h4>
                  <h4>$ 100000</h4>
                </div>
                <div>
                  <button className="cart-checkout-button" type="button">
                    CHECK OUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shoppingcart;
