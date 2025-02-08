import  { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="default"className="text-3xl font-serif text-neutral-900">EKATRA</a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
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
            <a href="stockists" className="text-gray-600 hover:text-gray-900">
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
            <a href="visit" className="text-gray-600 hover:text-gray-900">
              VISIT US
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                // Close Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="px-4 pt-4 pb-4 space-y-4">
            <li>
              <a href="new-arrivals" className="block text-gray-600 hover:text-gray-900">
                NEW ARRIVALS
              </a>
            </li>
            <li>
              <a href="shop" className="block text-gray-600 hover:text-gray-900">
                SHOP
              </a>
            </li>
            <li>
              <a href="peopleofekatra" className="block text-gray-600 hover:text-gray-900">
                PEOPLE
              </a>
            </li>
            <li>
              <a href="corporate-gifting" className="block text-gray-600 hover:text-gray-900">
                CORPORATE GIFTING
              </a>
            </li>
            <li>
              <a href="stockists" className="block text-gray-600 hover:text-gray-900">
                STOKIST
              </a>
            </li>
            <li>
              <a href="Wellness-journal" className="block text-gray-600 hover:text-gray-900">
                EKATRA X HUMANS OF BOMBAY
              </a>
            </li>
            <li>
              <a href="contact" className="block text-gray-600 hover:text-gray-900">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="visit" className="block text-gray-600 hover:text-gray-900">
                VISIT US
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
