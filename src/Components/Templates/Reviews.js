import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h1 className="review-topic">Customers Love Us</h1>
            </div>
            <div class="card rev-card">
              <div class="card-body">
                <p class="card-name">Name</p>
                <div className="ratings ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h6 class="card-title">Card title</h6>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
            <div className="rev-arrow-icon">
              <span className="rev-left-arrow">
                <FaArrowLeft />
              </span>
              <span>
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
