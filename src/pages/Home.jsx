import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Advert from '../components/Advert';

const Home = () => (
  <div>
    <Announcement />
    <Navbar />
    <Slider />
    <Products />
    <Advert />
  </div>
);

export default Home;
