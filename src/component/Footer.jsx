const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h2 className="font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                STOCKIST
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                CORPORATE GIFTING
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ`s
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Download Ekatra Year End Catalog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Our Mission</h2>
          <p>
            We create elevated, thoughtfully designed products to help you
            realize your potential and live a happier, more fulfilling life.
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Manufacturer Details</h2>
          <p>All products manufactured & sold by:</p>
          <p>Ekatra Collective Pvt Ltd</p>
          <p>CIN: U21 000RJ2022PTC083030</p>
          <p>
            Address: Ekatra Facility, 2nd Floor, Chawani Circle, Kota (Raj) -
            324007
          </p>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="container mx-auto mt-8 px-4">
        <h2 className="font-semibold mb-4">Subscribe to our newsletter</h2>
        <form className="flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-md sm:rounded-r-none sm:flex-grow"
          />
          <button
            type="submit"
            className="p-2 mt-2 sm:mt-0 sm:ml-2 bg-gray-800 text-white rounded-md sm:rounded-l-none"
          >
            →
          </button>
        </form>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-8 px-4 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025, ekatrahandmade.com Powered by Shopify</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
