import { FaStar } from "react-icons/fa";

const Customerreviews = () => {
  return (
    <section className="customer-reviews mt-5">
      <div className="container ">
        <div className="row ">
          <div class="card cutomer-reviewwrite">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "xx-large", fontWeight: "700" }}>
                Customer Reviews
              </h5>
              <div className=" ratings d-flex justify-content-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                <button class="cart-button" type="button">
                  WRITE REVIEWS
                </button>
              </div>

              <div>
                <hr style={{ width: 1300 }} />
              </div>
            </div>
            <div className="reviews-words">
              <p style={{ fontSize: "20px" }}>Starflit</p>
              <p className="ratings ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
              <h6>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</h6>
              <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customerreviews;
