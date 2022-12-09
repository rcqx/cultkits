import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Advert from '../components/Advert';
import Various from '../components/Various';
import Merch from '../components/Merch';
import Advert2 from '../components/Advert2';

const Home = () => (
  <div>
    <Announcement />
    <Navbar />
    <Slider />
    <Advert />
    <Products />
    <Various />
    <Merch />
    <Advert2 />
  </div>
);

export default Home;
