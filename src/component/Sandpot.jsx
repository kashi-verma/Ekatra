import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sandpot = () => {
  //   const images = [
  //     "https://ekatrahandmade.com/cdn/shop/files/7._DESIGN_AND_CREATION_WITH_INTENTION.jpg?v=1710353398",
  //   ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="relative  text-white w-full h-full">
      {/* <Slider {...settings} className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <div key={index} className="w-full h-full">
            <img src={img} alt="slide" className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider> */}
      <Slider {...settings} className="absolute inset-0 w-full h-full">
        <div className="w-full h-full">
          <img
            src="https://ekatrahandmade.com/cdn/shop/files/7._DESIGN_AND_CREATION_WITH_INTENTION.jpg?v=1710353398"
            alt="Ceramic Vases"
          />
        </div>
        {/* Add more items as needed */}
      </Slider>
      {/* <div className="absolute inset-0 flex items-center justify-center text-center px-6 bg-black bg-opacity-50">
        <div>
          <h1 className="text-5xl font-bold mb-4">Handmade with Love</h1>
          <p className="text-lg mb-6">
            Discover unique, handcrafted products made with care.
          </p>
          <a
            href="#shop"
            className="bg-gray-800 text-white py-3 px-6 rounded-lg text-lg hover:bg-gray-700"
          >
            Shop Now
          </a>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Sandpot;
