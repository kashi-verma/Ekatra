const Navbar = () => {
  return (
    <section>
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">EKATRA</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              NEW ARRIVALS
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              SHOP
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              PEOPLE
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              CORPORATE GIFTING
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              STOKIST
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              EKATRA X HUMANS OF BOMBAY
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              CONTACT US
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              TRACK ORDER
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
