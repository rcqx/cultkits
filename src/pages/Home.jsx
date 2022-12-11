import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Advert from '../components/Advert';
import Various from '../components/Various';
import Merch from '../components/Merch';
import Advert2 from '../components/Advert2';
import Slider2 from '../components/Slider2';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import Region from '../components/Region';

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
    <Slider2 />
    <Welcome />
    <Footer />
    <Region />
  </div>
);

export default Home;
