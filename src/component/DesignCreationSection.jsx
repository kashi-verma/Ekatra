export default function DesignCreationSection() {
  return (
    <div className="relative w-full h-screen text-white flex items-center">
      <img
        src="https://ekatrahandmade.com/cdn/shop/files/7._DESIGN_AND_CREATION_WITH_INTENTION.jpg?v=1710353398"
        alt="Design & Creation"
        className="absolute inset-0 w-full h-full object-cover "
      />
      <div className="relative z-10 max-w-xl p-6">
        <h2 className="text-4xl from-neutral-500 mb-4">
          DESIGN & CREATION WITH INTENTION
        </h2>
        <p className="text-lg mb-6">
          Our hand-crafted products are created and curated by keeping the needs
          of our writers and users in mind. From serene, deep blues to earthy
          browns that set the mind in meditation & focus, our design language
          pivots and focuses on the mental health & well-being of our consumer.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
