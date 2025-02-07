const Navbar = () => {
  return (
    <section>
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-serif from-neutral-900">EKATRA</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="new-arrivals" className="text-gray-600 hover:text-gray-900">
              NEW ARRIVALS
            </a>
          </li>
          <li>
            <a href="shop" className="text-gray-600 hover:text-gray-900">
              SHOP
            </a>
          </li>
          <li>
            <a href="peopleofekatra" className="text-gray-600 hover:text-gray-900">
              PEOPLE
            </a>
          </li>

          <li>
            <a href="corporate-gifting" className="text-gray-600 hover:text-gray-900">
              CORPORATE GIFTING
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              STOKIST
            </a>
          </li>
          <li>
            <a href="Wellness-journal" className="text-gray-600 hover:text-gray-900">
              EKATRA X HUMANS OF BOMBAY
            </a>
          </li>
          <li>
            <a href="contact" className="text-gray-600 hover:text-gray-900">
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
