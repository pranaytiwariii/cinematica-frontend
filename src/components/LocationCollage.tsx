import { useEffect, useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
];

export default function LocationCollage() {
  const [activeIndices, setActiveIndices] = useState<number[]>([0, 1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndices(current => {
        const next = current.map(index => (index + 1) % images.length);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Discover Amazing Spaces
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From professional studios to unique outdoor venues
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden">
        {activeIndices.map((imageIndex, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg transition-transform duration-500 hover:scale-105"
          >
            <img
              src={images[imageIndex]}
              alt={`Location ${imageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
              style={{
                animation: `fade-slide-up 0.5s ease-out ${index * 0.1}s both`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}