const products = [
    {
        name: "The Bold Beautiful Box",
        price: "Rs. 3,600.00",
        image: "https://ekatrahandmade.com/cdn/shop/files/her-littler-things-sustainable-gift-hamper-248611.jpg?v=1735800192&width=360",
      },
      {
        name: "Wellness Journal - Ekatra X Realign",
        price: "Rs. 850.00",
        image: "https://ekatrahandmade.com/cdn/shop/files/french-flax-table-linen-set-wedding-favors-house-warming-soiree-home-911310.jpg?v=1735819611&width=360",
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
        image: "https://ekatrahandmade.com/cdn/shop/files/ekatra-premium-corporate-gift-set-time-management-850011.jpg?v=1735799532&width=360",
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
  
  const ShopAll = () => {
    return (
      <div className="container mx-auto p-4">
       <header className="border-b">
       
      </header>
      <div className="bg-gray-100 text-center py-2">
          <p>Use SHARKTANK10 for 10% discount</p>
        </div>
        <main>
          <h1 className="text-1xl font-bold my-4 ">All</h1>
          <div className="flex-1">
            <aside className="w-1/4 p-4">
              <h2 className="text-lg font-bold">Filter:</h2>
              <div className="mt-4">
                <h3 className="font-semibold">Price</h3>
                <div className="mt-2">
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Under 500
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Under 1000
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Under 2000
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Above 2000
                  </label>
                </div>
              </div>
            </aside>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-lg text-gray-700 mb-4">{product.price}</p>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg  hover:bg-gray-100 hover:text-black">Add to cart</button>
              </div>
            ))}
          </div>
        </div>
          
        </main>
      </div>
    );
  };
  
  export default ShopAll;