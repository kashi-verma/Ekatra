// src/components/ClientBaseSlider.js

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";

const clients = [
  {
    name: "Client 1",
    logo: "https://ekatrahandmade.com/cdn/shop/files/EMPOWERING.png?v=1710764927",
  },
  {
    name: "Client 2",
    logo: "https://ekatrahandmade.com/cdn/shop/files/DEEPER.png?v=1710764926",
  },
  // Add the remaining 21 client logos here
  // { name: 'Client 3', logo: 'URL' },
  // { name: 'Client 4', logo: 'URL' },
  // ...
];

const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const ClientBaseSlider = () => {
  return (
    <div className="overflow-hidden py-8">
      <h1 className="text-4xl font-semibold text-center mb-8">
        OUR CLIENT BASE
      </h1>
      <Slider {...settings} className="flex items-center">
        {clients.map((client, index) => (
          <div key={index} className="flex-shrink-0 px-4">
            <img src={client.logo} alt={client.name} className="h-16 mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientBaseSlider;
