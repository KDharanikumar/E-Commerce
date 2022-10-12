import Slider from "../Elements/Slider";
import Banner from "../Elements/Banner";
import Productcard from "../Templates/Productcard";
import Reviews from "../Templates/Reviews";

const Home = () => {
  return (
    <div>
      <Slider />
      <Banner />
      <Productcard />
      <Reviews />
    </div>
  );
};

export default Home;
