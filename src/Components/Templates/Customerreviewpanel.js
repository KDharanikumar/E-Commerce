import { FaStar } from "react-icons/fa";

const Customerreviewpanel = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div class="mb-3">
            <label>Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div>
            <p>Ratings</p>
            <p className="ratings ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Review Title
            </label>

            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Give Your Review Title"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Review
            </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <button class="review-button" type="button">
            SUBMIT REVIEWS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customerreviewpanel;
