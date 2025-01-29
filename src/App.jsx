import ConnectSection from "./component/ConnectSection";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import ProductSection from "./component/ProductSection";
// import Sandpot from "./component/Sandpot";
const App = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <ConnectSection />

      <ProductSection />
    </div>
  );
};

export default App;
