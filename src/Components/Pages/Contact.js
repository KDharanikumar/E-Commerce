import Phone from "../../Image/pexels-chepté-cormani-1416530.jpg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-30">Contact</h1>
          <div className="contact-img" style={{ textAlign: "center" }}>
            <img
              src={Phone}
              alt="Phone-Img"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                alignItems: "center",
                marginBottom: "50px",
              }}
            ></img>
          </div>
          <div className="col-md-6 mr-30">
            <h4 style={{ fontWeight: 400 }}>For questions, feedback & enquiries:</h4>
            <p>Please fill out the form below and a member from our team will be in touch with you shortly.</p>

            <div class="mb-3">
              Name
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
            </div>

            <div class="mb-3">
              Email address
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-Mail" />
            </div>

            <div class="mb-3">
              Message
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button class="cart-button" type="button">
              SUBMIT
            </button>
          </div>

          <div className="col-md-6 " style={{ paddingLeft: "150px" }}>
            <div style={{ marginBottom: "40px" }}>
              <h4 style={{ marginBottom: "10px" }}>Address</h4>
              <p>XXX Floor, XXX Road, XXXXXXXXXXXX, 000000.</p>
            </div>
            <div style={{ marginBottom: "40px" }}>
              <h4 style={{ marginBottom: "0px" }}>Social Media</h4>
              <p>
                <span style={{ marginRight: "40px", fontSize: "40px" }}>
                  <FaInstagram />
                </span>
                <span style={{ fontSize: "40px" }}>
                  <FaLinkedin />
                </span>
              </p>
            </div>
            <div style={{ marginBottom: "40px" }}>
              <h4>Company Information</h4>
              <p>Company Legal Name: STARFLIT</p>
              <p>PAN : XXXXX-0000-X</p>
              <p>GSTIN: XXXXXXXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
