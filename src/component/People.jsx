

const peopleData = [
  {
    name: "Arshi",
    title: "Real women Real stories",
    description: "Arshi, a mother of five, joined Ekatra after her husband’s health declined, determined to support her family. Inspired by the confidence she saw on a trip to Mumbai, she now dreams of giving her children a brighter future through English education and computer classes.",
    image: "https://ekatrahandmade.com/cdn/shop/files/stories1.png?v=1736964408",
  },
  {
    name: "Tasneem",
    title: "Title 2",
    description: "Tasneem, the sweet soul of our team, is the icebreaker and a source of inspiration during challenges. A mother of four, she shares the responsibility of providing for her family with her husband, both striving to secure a bright future through their children's education.",
    image: "https://ekatrahandmade.com/cdn/shop/files/stories2.png?v=1736964408",
  },
  {
    name: "Farzana",
    title: "Title 3",
    description: "Farzana, a COVID-19 survivor, faced severe hardships after losing her family's dairy business and land to disputes, leaving them with no income. Determined to support her family, she stepped up and now proudly ensures her two sons can attend school.",
    image: "https://ekatrahandmade.com/cdn/shop/files/stories3.png?v=1736964408",
  },
];

const People = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Meet Our People</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {peopleData.map((person, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{person.name}</h2>
                <h3 className="text-xl mb-2">{person.title}</h3>
                <p className="text-gray-700">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
