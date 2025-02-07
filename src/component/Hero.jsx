import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const images = [
    "https://ekatrahandmade.com/cdn/shop/files/Website_Banner_Desktop_4.png?v=1724741359",
    "https://ekatrahandmade.com/cdn/shop/files/Website_Banner_Desktop_6_f47aa998-b0a3-4159-b406-5fc620839946.png?v=1735216237",
    "https://ekatrahandmade.com/cdn/shop/files/Website_Banner_Desktop_7.png?v=1731319666",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  return (
    <section className="relative text-white w-full h-screen">
      <Slider {...settings} className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={img}
              alt={`slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      {/* Overlay with responsive padding and background for legibility */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-6">
        <div className="bg-black bg-opacity-50 p-4 md:p-6 rounded">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Handmade with Love
          </h1>
          <p className="text-sm md:text-lg mb-6">
            Discover unique, handcrafted products made with care.
          </p>
          <a
            href="#shop"
            className="bg-gray-800 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg text-sm md:text-lg hover:bg-gray-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
