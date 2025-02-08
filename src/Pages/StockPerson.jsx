
const stockists = [
    {
      city: "Pan India",
      name: "Fab India Overseas Pvt.",
      address: "Fabindia stores located in various cities"
    },
    {
      city: "Delhi",
      name: "Amala Earth",
      address: "Amala Earth, 1st Floor, Block C3, Habitat India Qutub institutional Area, Katwaria Sarai, New Delhi, Delhi 110016",
      map: "https://www.google.com/maps"
    },
    {
      city: "Gurgaon",
      name: "Korea Store",
      address: "Unit No. 23, Ground Floor, Global Foyer Mall, Golf Course Rd, Sector 43, Gurugram, Haryana 122022"
    },
    {
      city: "Vadodara",
      name: "Story of India",
      address: "Story Of India, Police Chauki, 15, Lane Besides, near The Baroda Residency, Alkapuri Society, Alkapuri, Vadodara, Gujarat 390007"
    },
    {
      city: "Jaipur",
      name: "LADU - Tapri",
      address: "2nd Floor, Tapri Central, B4-E Gate, No. 4, Prithviraj Rd, opp. Albert Hall Museum, C Scheme, Jaipur, Rajasthan 302001"
    },
    {
      city: "Jaipur",
      name: "The Art Ghar",
      address: "A-129, Saket Nagar, Shyam Nagar, Jaipur, Rajasthan 302019"
    },
    {
      city: "Mumbai",
      name: "Mango Stationery",
      address: "Opp: Titan Showroom, Pradhan Building, 4/5, Gokhale Rd, Shivaji Path, Shivaji Nagar, Thane West, Thane, Maharashtra 400602"
    },
    {
       city: "United Kingdoms",
       name: "The Cali Collection",
       address: "46 The Crescent Abbots LangleyHerts WD50DS United Kingdom "
    },
    {
        city: "United States",
        name: "The Kitchen & Dining",
        address: "215 E. 57th Street, 12th Floor, New York, NY 10022"
      },
    
  ];
  
  const StockPerson = () => {
    return (
      <div className="bg-white text-gray-900 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Stockist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stockists.map((stockist, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{stockist.city}</h2>
              <p className="font-medium">{stockist.name}</p>
              <p>{stockist.address}</p>
              {stockist.map && <a href={stockist.map} className="text-blue-500">Google Maps</a>}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default StockPerson