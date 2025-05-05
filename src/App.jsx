
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
import TeamPage from './Pages/TeamPage';
import Empoweiring from './Pages/Empowering';
import PersonImage from './Pages/PersonImage';
// import RealWomenStories from './Pages/RealWomenStories';
import CorporateGifting from './Pages/CorporateGifting';
import WhyChooseUs from './Pages/WhyChooseUs';
import Sustainable from './Pages/Sustainable';
import ContactUs from './Pages/ContactUs';
import Collaborate from './Pages/Collaborate';
import BecomeStockist from './Pages/BecomeStokist';
import ShopAll from './Pages/ShopAll';
import WellEdit from './Pages/WellEdit';
import WellJournal from './Pages/WellJournal';
import WelBooks from './Pages/WelBooks';
import Jodhpur from './Pages/Jodhpur';
import VisitUs from './Pages/VisitUs';
import WhatAwaits from './Pages/WhatAwaits';
import Unique from './Pages/Unique';
import StockPerson from './Pages/StockPerson';


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
const Shopping = () => (
  <>
  <Navbar />
  <ShopAll/>
  <Footer />
  </>
);
const People = () => (<>
     <Navbar />
     <PeopleOfEkatra/>
     <EkatraPage/>
     <TeamPage/>
     <Empoweiring/>
     <PersonImage/>
     {/* <RealWomenStories/> */}
     <Footer />
     
</>);
const CorporateGiftings = ()=>(
  <>
  <Navbar/>
  <CorporateGifting/>
  <WhyChooseUs/>
  <Sustainable/>
  <Footer />
  </>
)
const Contact = ()=>(
<>
  <Navbar />
  <ContactUs/>
  <Collaborate/>
  <BecomeStockist/>
  <Footer/>
</>
)
const EkatraXBombay = () =>(
  <>
  <Navbar />
  <WellEdit/>
  <WellJournal/>
  <WelBooks/>
  <Footer/>
  </>
) 
const NewProducts = () => (
  <>
  <Navbar />
  <NewArrivals/>
  <Footer />
  </>
)
const Visitation = () => (
  <>
  <Navbar />
  <Jodhpur/>
  <VisitUs/>
  <WhatAwaits/>
  <Unique/>
  <Footer />
  </>
)
const Stockists = ()=> (
  <>
  <Navbar />
  <StockPerson/>
  <Footer />
  </>
)

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-100 text-gray-900">
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/default" element={<Home/>} />
          <Route path="/new-arrivals" element={<NewProducts/>} />
          <Route path= "/peopleofekatra" element={<People/>}/>
          <Route path="/corporate-gifting" element={<CorporateGiftings/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/shop" element={<Shopping/>} />
          <Route path="Wellness-journal" element={<EkatraXBombay/>}/>
          <Route path="visit" element={<Visitation/>} />
          <Route path="stockists" element={<Stockists/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
