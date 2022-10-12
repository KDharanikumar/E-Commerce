const Tracking = () => {
  return (
    <section className="tract-order">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="track-title">
              <h3>Track your order</h3>
              <div className="card track-box">
                <div className="card-body">
                  <h6 className="card-title track-card-title ">Order Number</h6>
                  <p className="card-text track-text">
                    Enter the information in the box below to check the status of your order
                  </p>
                  <div>
                    <label for="inputnumber" class="form-label">
                      Order No:
                      <input className="form" />
                    </label>
                  </div>

                  <div>
                    <label for="inputnumber" class="form-label">
                      Phone No:
                      <input className="form" />
                    </label>
                  </div>

                  <div className="track-button">
                    <a href={{}} class="btn btn-primary ">
                      Track
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
