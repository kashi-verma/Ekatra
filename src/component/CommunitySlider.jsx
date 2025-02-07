/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    img: "https://ekatrahandmade.com/cdn/shop/files/our_community1.jpg?v=1709651295",
    text: "It was so warm to meet you and your mom, I had curated Netflix boxes from you guys and it turned out absolutely brilliant, looking forward!",
  },
  {
    img: "https://ekatrahandmade.com/cdn/shop/files/our_community2.jpg?v=1709651307",
    text: "I had met you at the Jaipur Lit fest last year and got some goodies from Ekatra. I then ordered  for my daughter's birthday which I loved.",
  },
  {
    img: "https://ekatrahandmade.com/cdn/shop/files/our_community3.jpg?v=1709651349",
    text: "Hey, I received my order... It’s absolutely beautiful, colours are an exact match and the quality is top-notch... Just wanted to let you know !",
  },
  {
    img: "https://ekatrahandmade.com/cdn/shop/files/our_community4.jpg?v=1709651357",
    text: "Hi I just received the product and I really loveeee it. I never say this when I receive products but I loved the case and the packaging, really felt close!",
  },
  {
    img: "https://ekatrahandmade.com/cdn/shop/files/our_community5.jpg?v=1709651391",
    text: "Thank you for the amazing products! The craftsmanship is exquisite, and I absolutely adore them. Keep up the great work!",
  },
  {
    img: "https://ekatrahandmade.com/cdn/shop/files/our_community6.png?v=1709651397",
    text: "Ekatra never fails to amaze me with their handmade products. The quality and design are impeccable. Can’t wait to order more!",
  },
  {
    img: "https://ekatrahandmade.com/cdn/shop/files/our_community7.jpg?v=1709651405",
    text: "I absolutely love the quality and craftsmanship of your products. They are super comfortable and look amazing.Thanks so much!",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition z-10"
  >
    <FaChevronRight size={20} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition z-10"
  >
    <FaChevronLeft size={20} />
  </button>
);

const CommunitySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-500 rounded-full cursor-pointer transition hover:bg-gray-700"></div>
    ),
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Hear From Our Community
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-6">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img
                  src={item.img}
                  alt="Community Member"
                  className="w-full aspect-[3/4] object-cover rounded-md"
                />
                <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CommunitySlider;
