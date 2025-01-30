import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import ConnectSection from "./component/ConnectSection";
import ProductSection from "./component/ProductSection";
import PillarsOfEkatra from "./component/PillarsOfEkatra";
import DesignCreationSection from "./component/DesignCreationSection";
import CommunitySlider from "./component/CommunitySlider";
import BlogSection from "./component/BlogSection";
import Footer from "./component/Footer";

// import Sandpot from "./component/Sandpot";
const App = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <ConnectSection />
      <ProductSection />
      <PillarsOfEkatra />
      <DesignCreationSection />
      <CommunitySlider />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default App;
