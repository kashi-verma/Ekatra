const PillarsOfEkatra = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-semibold text-center mb-12">
        PILLARS OF EKATRA
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative flex flex-col  items-center ">
          <img
            src="https://ekatrahandmade.com/cdn/shop/files/EMPOWERING.png?v=1710764927"
            alt="Empowering Change-Makers"
            className="w-full h-66 object-cover mb-6"
          />
          <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-semibold text-white mb-4">
              EMPOWERING CHANGE-MAKERS
            </h2>
            <p className="text-white mb-4">
              The craft creation in our organisation is carried out by a
              tight-knit team of 62 women, native to Rajasthan, who are
              self-learned and self-skilled. These are the home-makers
              transmuting to CRAFT-CREATORS. What inspires them is their
              stories... HER-STORY
            </p>
            <button className="px-6 py-2 bg-[#103948] text-white rounded-full transition duration-500 ease border border-transparent hover:bg-white hover:text-[#103948]">
              KNOW MORE
            </button>
          </div>
        </div>
        <div className="relative flex flex-col items-center text-center">
          <img
            src="https://ekatrahandmade.com/cdn/shop/files/DEEPER.png?v=1710764926"
            alt="Deeper Than Surface Level"
            className="w-full h-66 object-cover mb-6"
          />
          <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-semibold text-white mb-4">
              DEEPER THAN SURFACE LEVEL
            </h2>
            <p className="text-white mb-4">
              As nature conscious creators, we are using sustainable fabrics and
              papers to fabricate alternative lifestyle products in accordance
              with the need of sustainability in the growing world. We are glad
              and excited to say that 750000m of fabrics have been recycled and
              stopped from reaching the landfills through our SECOND LIFE
              PROJECT!
            </p>
            <button className="px-6 py-2 bg-[#103948] text-white rounded-full transition duration-500 ease border border-transparent hover:bg-white hover:text-[#103948]">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarsOfEkatra;
