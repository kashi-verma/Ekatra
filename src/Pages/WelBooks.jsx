const WelBooks = () => {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 md:px-12 lg:px-24 bg-white">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img
            src="https://ekatrahandmade.com/cdn/shop/t/32/assets/EkatraXRealign1.png?v=113513489135811283871740412371"
            alt="Wellness Journal 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://ekatrahandmade.com/cdn/shop/t/32/assets/EkatraXRealign2.png?v=94853596349251407911740412371"
            alt="Wellness Journal 2"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://ekatrahandmade.com/cdn/shop/t/32/assets/EkatraXRealign3.png?v=150561392062395903021740412371"
            alt="Wellness Journal 3"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center mt-12">
          Realign. Relax. Radiate.
        </h2>
      </div>
    );
  };
  
  export default WelBooks;
