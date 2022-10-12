import Model3 from "../../Image/Model-3.jpg";
import ModelS from "../../Image/Model-S.jpg";
import ModelX from "../../Image/Model-X.jpg";
import ModelY from "../../Image/Model-Y.jpg";

const ProductCard = () => {
  return (
    <section className="product-card" style={{ textAlign: "center" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 product-card-column">
            <h1 className="product-card-title">Our Bestsellers</h1>
            <ul className="product-image">
              <li>
                <img src={Model3} alt="Model-3"></img>
                <h3 className="product-name">Model-3</h3>
                <p className="product-price">$ 100000</p>
                <button class="cart-button" type="button">
                  ADD TO CART
                </button>
              </li>

              <li>
                <img src={ModelS} alt="Model-S"></img>
                <h3 className="product-name">Model-S</h3>
                <p className="product-price">$ 200000</p>
                <button class="cart-button" type="button">
                  ADD TO CART
                </button>
              </li>
              <li>
                <img src={ModelX} alt="Model-X"></img>
                <h3 className="product-name">Model-X</h3>
                <p className="product-price">$ 300000</p>
                <button class="cart-button" type="button">
                  ADD TO CART
                </button>
              </li>
              <li>
                <img src={ModelY} alt="Model-Y"></img>
                <h3 className="product-name">Model-Y</h3>
                <p className="product-price">$ 400000</p>
                <button class="cart-button" type="button">
                  ADD TO CART
                </button>
              </li>
            </ul>

            <button class="button all-product-button" type="button">
              SHOP ALL PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
