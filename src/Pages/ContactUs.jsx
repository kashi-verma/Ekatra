

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
     
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
