/* eslint-disable react/prop-types */

const products = [
  {
    name: "The Ritual Collection",
    price: "Rs. 1,650",
    image:
      "	https://ekatrahandmade.com/cdn/shop/files/6_216fd27e-ff33-4a44-ba88-1722def9f734.png?v=1726209415",
  },
  {
    name: "Day Tote",
    price: "Rs. 700",
    image: "	https://ekatrahandmade.com/cdn/shop/files/d_15.jpg?v=1716297451",
  },
  {
    name: "Teal laptop sleeve",
    price: "Rs. 900",
    image:
      "https://ekatrahandmade.com/cdn/shop/files/4_best_seller_-_laptop_sleeve_3.jpg?v=1709647868",
  },
  {
    name: "Sling Bag",
    price: "Rs. 1,200",
    image: "https://ekatrahandmade.com/cdn/shop/files/c_24.jpg?v=1716297752",
  },
  {
    name: "Pouches",
    price: "Rs. 280",
    image:
      "https://ekatrahandmade.com/cdn/shop/files/4_best_seller-_pouch_5.jpg?v=1709647906",
  },
  {
    name: "Productivity Set",
    price: "Rs. 1,000",
    image:
      "https://ekatrahandmade.com/cdn/shop/files/4_best_seller-_hampers_6.jpg?v=1709647914",
  },
  {
    name: "Messenger bag",
    price: "Rs. 1,750",
    image:
      "https://ekatrahandmade.com/cdn/shop/files/4_best_seller-_messengar_bag_7.jpg?v=1709647923",
  },
  {
    name: "Gratitude Journal",
    price: "Rs. 900",
    image:
      "https://ekatrahandmade.com/cdn/shop/files/4_best_seller-_gratitude_journal_8.png?v=1709647928",
  },
];

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded-lg">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover mb-4"
    />
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.price}</p>
    </div>

    <button className="border border-gray-400 rounded-full px-6 py-2 text-gray-700">
      Add to cart
    </button>
  </div>
);

const ProductSection = () => (
  <div className="container mx-auto py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
    <div className="text-center mt-8">
      <button className="border border-gray-400 rounded-full px-6 py-2 text-gray-700">
        View all
      </button>
    </div>
  </div>
);

export default ProductSection;
