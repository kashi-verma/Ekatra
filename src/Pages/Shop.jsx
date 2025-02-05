
import { Card, CardContent } from '@/components/ui/card';

const products = [
  {
    id: 1,
    name: 'The Bold & Beautiful Box - Womens Day Edit',
    price: '₹1,200.00',
    image: 'https://ekatrahandmade.com/cdn/shop/files/70.jpg?v=1737121384&width=360',
  },
  {
    id: 2,
    name: 'Wellness Journal – Ekatra x Realign',
    price: '₹1,200.00',
    image: 'https://ekatrahandmade.com/cdn/shop/files/wellness-journal-ekatra-x-realign-842507.jpg?v=1735806427&width=360',
  },
  {
    id: 3,
    name: 'The Ritual Collection – Limited Edit',
    price: '₹1,650.00',
    image: 'https://ekatrahandmade.com/cdn/shop/files/the-ritual-collection-limited-edit-120904.png?v=1735807700&width=360',
  },
  {
    id: 4,
    name: 'Minimalist Corduroy Shoppers Tote',
    price: '₹1,300.00',
    image: 'https://ekatrahandmade.com/cdn/shop/files/minimalist-corduroy-shoppers-tote-245668.jpg?v=1735807695&width=360',
  },
];

const Shop = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Shop All</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            <CardContent>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">Add to Cart</button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
