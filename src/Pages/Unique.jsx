
const Unique = () => {
  return (
    <div className="bg-rose-50 min-h-screen p-4">
      <main className="container mx-auto">
        <div className="text-center mb-8">
         
          <p className="text-lg mb-4">Enjoy a unique experience where you spend the day learning, creating, and connecting with local artisans. All products are made using eco-friendly materials and sustainable practices, allowing you to explore the rich heritage of traditional crafts while savoring authentic local cuisine. Make your visit truly personal by taking home handcrafted products that you create yourself.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col items-center">
            <img src="https://cdn.shopify.com/s/files/1/0685/6110/9295/files/JLF_Flea.png?v=1738141206" alt="JLF Flea" className="mb-4" />
            <h2 className="text-xl font-semibold">Explore at JLF Flea:</h2>
            <p className="text-center">Engage with our artisans at the JLF Flea, where you can witness the magic of handcrafted products.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://cdn.shopify.com/s/files/1/0685/6110/9295/files/JLF_Flea_1.png?v=1738141206" alt="Create Your Own" className="mb-4" />
            <h2 className="text-xl font-semibold">Create Your Own:</h2>
            <p className="text-center">Get hands-on and design your very own unique item with the help of our experienced artisans.</p>
          </div>
        </div>
       
       
       
      </main>
    </div>
  );
};

export default Unique;
