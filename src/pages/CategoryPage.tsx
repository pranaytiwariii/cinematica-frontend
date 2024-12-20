import { useParams } from 'react-router-dom';
import SpaceCard from '../components/SpaceCard';
import { categoryData } from '../data/categories';
import { spaces } from '../data/spaces';

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const category = categoryData.find(cat => cat.slug === categorySlug);

  if (!category) {
    return <div>Category not found</div>;
  }

  const categorySpaces = spaces.filter(space => space.categories.includes(categorySlug!));

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{category.description}</p>
        </div>
      </div>

      {/* Spaces Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categorySpaces.map((space) => (
            <SpaceCard key={space.id} {...space} />
          ))}
        </div>
      </div>
    </div>
  );
}