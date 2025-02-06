
import Image from "next-images"
const stories = [
  {
    id: 1,
    image: 'https://ekatrahandmade.com/cdn/shop/files/stories1.png?v=1736964408',
  },
  {
    id: 2,
    image: 'https://ekatrahandmade.com/cdn/shop/files/stories2.png?v=1736964408',
  },
  {
    id: 3,
    image: 'https://ekatrahandmade.com/cdn/shop/files/stories3.png?v=1736964408',
  },
  {
    id: 4,
    image: 'https://ekatrahandmade.com/cdn/shop/files/stories4.png?v=1736964408',
  },
];

export default function RealWomenStories() {
  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Women, Real Stories</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Empowering lives through handmade crafts, these are the stories of resilience, courage, and creativity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <div key={story.id} className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={story.image}
                alt={`Story ${story.id}`}
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
