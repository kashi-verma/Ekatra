
const products = [
  {
    name: "The Bold Beautiful Box",
    price: "Rs. 3,600.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/70.jpg?v=1737121384&width=360",
  },
  {
    name: "Wellness Journal - Ekatra X Realign",
    price: "Rs. 850.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/wellness-journal-ekatra-x-realign-842507.jpg?v=1735806427&width=360",
  },
  {
    name: "Timeless Beginnings Hamper",
    price: "Rs. 4,250.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/timeless-beginnings-hamper-356151.jpg?v=1735806398&width=360",
  },
  {
    name: "Corduroy Small Pouch",
    price: "Rs. 400.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/corduroy-small-pouch-401756.png?v=1735799526&width=360",
  },
  {
    name: "The Bare Book",
    price: "Rs. 1,200.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/the-bare-book-716693.png?v=1735806883&width=360",
  },
  {
    name: "The Ritual Collection - Limited Edit",
    price: "Rs. 2,500.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/the-ritual-collection-limited-edit-120904.png?v=1735807700&width=360",
  },
  {
    name: "Corduroy I-Pad Sleeve",
    price: "Rs. 950.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/corduroy-i-pad-sleeve-404837.jpg?v=1735798166&width=360",
  },
  {
    name: "Ekatra Wellbeing Hamper - Soothing and Calm",
    price: "Rs. 1,700.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/ekatra-wellbeing-hamper-soothing-and-calm-418592.jpg?v=1735799526&width=360",
  },
  {
    name: "Minimalist Corduroy Shoppers Tote",
    price: "Rs. 1,250.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/minimalist-corduroy-shoppers-tote-245668.jpg?v=1735807695&width=360",
  },
  {
    name: "Minimalist Corduroy Sling Bag",
    price: "Rs. 1,400.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/minimalist-corduroy-sling-bag-796690.jpg?v=1735800178&width=360",
  },
  {
    name: "I-Pad Sleeve",
    price: "Rs. 1,000.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/i-pad-sleeve-628398.jpg?v=1735800184&width=360",
  },
  {
    name: "Minimalist Corduroy Day Tote",
    price: "Rs. 1,750.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/minimalist-corduroy-day-tote-960680.jpg?v=1735800177&width=360",
  },
  {
    name: "Gratitude Journal - Intentional & Conscious",
    price: "Rs. 900.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/gratitude-journal-intentional-conscious-216836.png?v=1735827176&width=360",
  },
  {
    name: "Messenger Bag",
    price: "Rs. 1,750.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/messenger-bag-301886.jpg?v=1735807695&width=360",
  },
  {
    name: "Boxy Sling - Woven Cotton",
    price: "Rs. 450.00",
    image: "https://ekatrahandmade.com/cdn/shop/files/boxy-sling-woven-cotton-555586.jpg?v=1735798169&width=360",
  },
];

const NewArrivals = () => {
  return (
    <div>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8">New Arrivals</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-lg text-gray-700 mb-4">{product.price}</p>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-black">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

  );
};

export default NewArrivals