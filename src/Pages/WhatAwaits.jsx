const WhatAwaits = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Here&apos;s what awaits you:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <img src="https://cdn.shopify.com/s/files/1/0685/6110/9295/files/Engage_with_Our_Artisans.png?v=1738061963" alt="Engage with Our Artisans" className="mb-4" />
            <h2 className="text-xl font-semibold">Engage with Our Artisans:</h2>
            <p className="text-center">Interact with our skilled team and witness their passion as they bring handcrafted products to life.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://cdn.shopify.com/s/files/1/0685/6110/9295/files/Create_Your_Own.png?v=1738061963" alt="Create Your Own" className="mb-4" />
            <h2 className="text-xl font-semibold">Create Your Own:</h2>
            <p className="text-center">Get hands-on and design your very own unique item with the help of our experienced artisans.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://cdn.shopify.com/s/files/1/0685/6110/9295/files/Block_Printing.png?v=1738061963" alt="Block Printing" className="mb-4" />
            <h2 className="text-xl font-semibold">Block Printing:</h2>
            <p className="text-center">Dive into the traditional art of block printing and make your own stunning prints to take home.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://cdn.shopify.com/s/files/1/0685/6110/9295/files/Tie-Dye.png?v=1738061963" alt="Tie-Dye" className="mb-4" />
            <h2 className="text-xl font-semibold">Tie-Dye:</h2>
            <p className="text-center">Play with colors and patterns as you learn the art of tie-dye to create vibrant, personalized fabric pieces.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhatAwaits