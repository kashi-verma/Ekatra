
export default function PeopleOfEkatra(){
    return (
        <div className="relative">
          <img 
            src="https://ekatrahandmade.com/cdn/shop/files/IMG_3170.jpg?v=1709723237&width=1500" 
            alt="People of Ekatra" 
            className="w-full h-screen object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            
            <h1 className="text-5xl font-bold">PEOPLE OF EKATRA</h1>
          </div>
          <div className="absolute bottom-4 right-4">
            <button className="bg-green-500 text-white p-2 rounded-full">Chat with us</button>
          </div>
        </div>
    );
}