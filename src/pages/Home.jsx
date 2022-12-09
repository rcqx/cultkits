import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Advert from '../components/Advert';
import Various from '../components/Various';

const Home = () => (
  <div>
    <Announcement />
    <Navbar />
    <Slider />
    <Advert />
    <Products />
    <Various />
  </div>
);

export default Home;
