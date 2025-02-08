
const BlogSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-9 bg-white">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        ALL THINGS WARM, CALM & SUSTAINABLE
      </h2>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl mb-15">
        <div className="flex flex-col items-center">
          <img
            src="https://ekatrahandmade.com/cdn/shop/files/icon_1.png?v=1711623894"
            alt="Block Printed"
            className="w-20 h-20 mb-4"
          />
          <p className="text-2xl text-center">Block Printed</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://ekatrahandmade.com/cdn/shop/files/icon_2.png?v=1711623894"
            alt="Women Tribe"
            className="overflow-clip w-20 h-20 mb-4"
          />
          <p className="text-2xl text-center">Women Tribe</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://ekatrahandmade.com/cdn/shop/files/icon_3.png?v=1711623895"
            alt="Pure Cotton"
            className="w-20 h-20 mb-4"
          />
          <p className="text-2xl text-center">Pure Cotton</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://ekatrahandmade.com/cdn/shop/files/icon_4.png?v=1711623894"
            alt="Hand-made"
            className="w-20 h-20 mb-4"
          />
          <p className="text-2xl text-center">Hand-made</p>
        </div>
      </div>
      <div className="text-center mb-8 px-4">
        <p className="text-lg mb-3">
          Sign up for Ekātra weekly a boost of inspiration sent to your inbox
          every week.
        </p>
        <p className="text-2xl">
          Join 200,000+ people who receive our Conscious letter - our curated
          newsletter of personal development tips on happiness, productivity,
          relationships, and more.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded-l-md mb-4 md:mb-0"
        />
        <button className="bg-slate-500 text-white p-2 rounded-r-md">→</button>
      </div>
    </div>
  );
};

export default BlogSection;
