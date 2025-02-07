

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-lg font-semibold font-serif">ekatra</div>
          <nav className="space-x-4">
            <a href="new-arrivals" className="hover:underline">NEW ARRIVALS</a>
            <a href="#" className="hover:underline">SHOP</a>
            <a href="#" className="hover:underline">SALE</a>
            <a href="peopleofekatra" className="hover:underline">PEOPLE</a>
            <a href="corporate-gifting" className="hover:underline">CORPORATE GIFTING</a>
            <a href="#" className="hover:underline">STOCKIST</a>
            <a href="#" className="hover:underline">EKATRA X HUMANS OF BOMBAY</a>
            <a href="contact" className="hover:underline">CONTACT US</a>
            <a href="#" className="hover:underline">TRACK ORDER</a>
            <a href="#" className="hover:underline">VISIT US</a>
          </nav>
        </div>
      </header>
      <div className="bg-gray-100 text-center py-2">
        <p>Use SHARKTANK10 for 10% discount</p>
      </div>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <form className="max-w-lg mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
            <input type="tel" id="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea id="comment" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="hover:bg-slate-900 bg-slate-700 text-white px-4 py-2 rounded-lg">Send</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
