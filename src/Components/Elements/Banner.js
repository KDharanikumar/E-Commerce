import BannerImg from "../../Image/Desktop-ModelY-Banner.jpg";
import Roadster from "../../Image/Revolutionize Your Commute.mp4";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" style={{ padding: 0 }}>
            <div className="fullscreen-video-wrap">
              <video autoPlay loop muted>
                <source src={Roadster} />
              </video>
            </div>

            <div className="banner-img">
              <img src={BannerImg} alt="Banner-Img"></img>
              {/* <h1>Welcome to the Tesla Family</h1> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
