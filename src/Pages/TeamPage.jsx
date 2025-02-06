
import backgroundImage from '../assets/BackgroundImage.jpg'; // Make sure to replace this with the correct path to your image

export default function TeamPage() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full font-serif text-white text-center">
        <h1 className="text-3xl font-bold mb-4">MEET THE TEAM</h1>
        {/* Add more content here if needed */}
      </div>
    </div>
  );
}
