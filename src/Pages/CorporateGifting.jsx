const CorporateGifting = () => {
    return (
      <div className="bg-white text-black">
        <header className="border-b">
          <div className="container mx-auto flex justify-between items-center py-4">
            <div className="text-xl font-bold">ekatra</div>
            <nav className="space-x-4">
              <a href="#" className="hover:underline">NEW ARRIVALS</a>
              <a href="#" className="hover:underline">SHOP</a>
              <a href="#" className="hover:underline">SALE</a>
              <a href="#" className="hover:underline">PEOPLE</a>
              <a href="#" className="hover:underline">CORPORATE GIFTING</a>
              <a href="#" className="hover:underline">STOCKIST</a>
              <a href="#" className="hover:underline">EKATRA X HUMANS OF BOMBAY</a>
              <a href="#" className="hover:underline">CONTACT US</a>
              <a href="#" className="hover:underline">TRACK ORDER</a>
            </nav>
          </div>
        </header>
        <div className="bg-gray-100 text-center py-2">
          <p>Use SHARKTANK10 for 10% discount</p>
        </div>
        <main className="container mx-auto py-8 justify-center text-center">
          <h1 className="text-3xl font-bold mb-4">CREATE A LASTING IMPRESSION</h1>
          <h2 className="text-2xl mb-4">CORPORATE GIFTING</h2>
          <p className="mb-4">
            We’re here to help you find the perfect sustainable gifts for your team. Our tailored solutions ensure each gift makes a lasting impression. At Ekatra Handmade, we create sustainable Corporate Gift Boxes that reflect your brand and support your goals. Each gift feels personal, as if it’s coming directly from your team.
          </p>
          <p className="mb-8">
            Contact us to explore our sustainable corporate gifting options: <a href="mailto:aishwarya@ekatrahandmade.com" className="text-blue-500 hover:underline">aishwarya@ekatrahandmade.com</a>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <img src="https://ekatrahandmade.com/cdn/shop/t/29/assets/img3.jpg?v=45629727729306826421738351013" alt="Corporate Gift Box 1" className="w-full h-auto" />
            <img src="https://ekatrahandmade.com/cdn/shop/t/29/assets/img2.jpg?v=145799247645821788391738351013" alt="Corporate Gift Box 2" className="w-full h-auto" />
            <img src="https://ekatrahandmade.com/cdn/shop/t/29/assets/img8.jpeg?v=14687140538352588501738351013" alt="Corporate Gift Box 3" className="w-full h-auto" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">BRANDS THAT TRUST US</h3>
            <div className="flex justify-center space-x-4">
              <img src="https://ekatrahandmade.com/cdn/shop/t/29/assets/microsoft.webp?v=22694885329933621281738351013" alt="Microsoft" className="h-8" />
              <img src="https://ekatrahandmade.com/cdn/shop/t/29/assets/netflix.webp?v=3799241940880448751738351013" alt="Netflix" className="h-8" />
              <img src="https://ekatrahandmade.com/cdn/shop/t/29/assets/infosys.webp?v=21456372828500236451738351013" alt="Infosys" className="h-8" />
              <img src="https://ekatrahandmade.com/cdn/shop/t/29/assets/linkedin.webp?v=129656725660041318341738351013" alt="LinkedIn" className="h-8" />
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default CorporateGifting;