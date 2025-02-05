import { FaSearch, FaUser } from "react-icons/fa";

export default function PeopleOfEkatra(){
    return (
        <div className="relative">
          <img 
            src="https://ekatrahandmade.com/cdn/shop/files/IMG_3170.jpg?v=1709723237&width=1500" 
            alt="People of Ekatra" 
            className="w-full h-screen object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            <nav className="absolute top-0 w-full flex justify-between items-center p-4 bg-transparent">
              <div className="text-2xl font-bold">ekatra</div>
              <div className="flex space-x-4">
                <a href="#" className="hover:underline">NEW ARRIVALS</a>
                <a href="#" className="hover:underline">SHOP</a>
                <a href="#" className="hover:underline">SALE</a>
                <a href="#" className="hover:underline">PEOPLE</a>
                <a href="#" className="hover:underline">CORPORATE GIFTING</a>
                <a href="#" className="hover:underline">STOCKIST</a>
                <a href="#" className="hover:underline">EKATRA X HUMANS OF BOMBAY</a>
                <a href="#" className="hover:underline">CONTACT US</a>
                <a href="#" className="hover:underline">TRACK ORDER</a>
                <a href="#" className="hover:underline">VISIT</a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:underline bg-black">{FaSearch}</a>
                <a href="#" className="hover:underline">{FaUser}</a>
              </div>
            </nav>
            <h1 className="text-5xl font-bold">PEOPLE OF EKATRA</h1>
          </div>
          <div className="absolute bottom-4 right-4">
            <button className="bg-green-500 text-white p-2 rounded-full">Chat with us</button>
          </div>
        </div>
    );
}