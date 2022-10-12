const Signin = () => {
  return (
    <section className="Account">
      <div className="container-fluid account-cont ">
        <div className="row">
          <div className="col-md-12">
            <div className="account-title">
              <h1>Sign Up</h1>
            </div>
            <div className="account-login">
              <h3>Log In</h3>
            </div>

            <div className="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="forgot mb-4">Forgot Your Password?</div>
            <div>
              <button className="login-button">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
