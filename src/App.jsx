
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import ConnectSection from "./component/ConnectSection";
import ProductSection from "./component/ProductSection";
import PillarsOfEkatra from "./component/PillarsOfEkatra";
import DesignCreationSection from "./component/DesignCreationSection";
import CommunitySlider from "./component/CommunitySlider";
import BlogSection from "./component/BlogSection";
import Footer from "./component/Footer";

import NewArrivals from "./Pages/NewArrivals";  // Import NewArrivals component
import PeopleOfEkatra from './Pages/PeopleOfEkatra';
import EkatraPage from './Pages/EkatraPage';


const Home = () => (
  <>
  <Navbar />
    <Hero />
    <ConnectSection />
    <ProductSection />
    <PillarsOfEkatra />
    <DesignCreationSection />
    <CommunitySlider />
    <BlogSection />
    <Footer />
  </>
);
const People = () => (<>
     <PeopleOfEkatra/>
     <EkatraPage/>
</>);
const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-100 text-gray-900">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<NewArrivals/>} />
          <Route path= "/peopleofekatra" element={<People/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
