
const Collaborate = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold mb-2">Let&apos;s Collaborate.</h1>
      <h2 className="text-xl mb-6">Don&apos;t Hesitate to Get in Touch!</h2>
      <div className="flex flex-col md:flex-row items-start md:items-start md:space-x-8">
        <div className="text-left mb-6 md:mb-0">
          <p className="mb-2">Confused? Happy?</p>
          <p className="mb-4">We&apos;d love to hear from you!</p>
          <p className="mb-2">For shipping related queries: <a href="mailto:care@ekatrahandmade.com" className="text-blue-500">care@ekatrahandmade.com</a></p>
          <p className="mb-2">For everything else: <a href="tel:+917297822077" className="text-blue-500">+91-72978 22077</a></p>
          <p className="mb-2">For bulk order - Connect on: <a href="tel:+917891728027" className="text-blue-500">+91-7891728027</a></p>
          <p className="mb-2"><a href="mailto:aishwarya@ekatrahandmade.com" className="text-blue-500">aishwarya@ekatrahandmade.com</a></p>
          <p className="mb-2">We prefer WhatsApp :</p>
          <p className="font-bold">WE SHIP WORLDWIDE!</p>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <img src="https://ekatrahandmade.com/cdn/shop/files/IMG_2334_JPG.webp?v=1670503296&width=750" alt="Person holding a notebook" className="rounded shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
