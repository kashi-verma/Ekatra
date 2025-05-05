const WhyChooseUs = () => {
    return (
      <div className="bg-white min-h-screen">
      
        <main className="container mx-auto py-8">
          <section className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">WHY CHOOSE US</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-6">
                <h3 className="font-bold text-xl mb-2">SUSTAINABLE GIFTING</h3>
                <p>We prioritize eco-friendly materials and practices for thoughtful, responsible gifts.</p>
              </div>
              <div className="bg-gray-100 p-6">
                <h3 className="font-bold text-xl mb-2">SCALABLE OPTIONS</h3>
                <p>Whether you need 30 or 30,000 gifts, we can accommodate orders of any size.</p>
              </div>
              <div className="bg-gray-100 p-6">
                <h3 className="font-bold text-xl mb-2">TAILORED SOLUTIONS</h3>
                <p>Our gifts are customized to reflect your brand and meet your specific goals.</p>
              </div>
              <div className="bg-gray-100 p-6">
                <h3 className="font-bold text-xl mb-2">CREATIVE EXPERTISE</h3>
                <p>Our designs are creatively led to make a lasting impression on your recipients.</p>
              </div>
              <div className="bg-gray-100 p-6">
                <h3 className="font-bold text-xl mb-2">PERSONALIZED TOUCH</h3>
                <p>Each gift feels unique and personal, as if it`s coming directly from your team.</p>
              </div>
              <div className="bg-gray-100 p-6">
                <h3 className="font-bold text-xl mb-2">SEAMLESS EXPERIENCE</h3>
                <p>From one-time gifting to ongoing programs, we provide a hassle-free, end-to-end service.</p>
              </div>
            </div>
          </section>
          <section className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">TRY YOUR LOGO</h2>
            <p>Upload your logo in PNG format for optimal quality:</p>
            <input type="file" className="my-4 p-2 border" />
            <div className="my-4">
              <img src="https://ekatrahandmade.com/cdn/shop/t/32/assets/mockup.png?v=165792861056235658471740412371" alt="Gift Box" className="mx-auto" />
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default WhyChooseUs
