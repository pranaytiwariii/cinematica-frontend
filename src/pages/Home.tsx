import { categoryData } from '../data/categories';
import HeroSection from '../components/HeroSection';
import CategoryCard from '../components/CategoryCard';
import LocationFinder from '../components/LocationFinder';
import HostTimeline from '../components/HostTimeline';
import LocationCollage from '../components/LocationCollage';
import AnimatedTestimonials from '../components/AnimatedTestimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore Spaces by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {categoryData.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
              href={`/category/${category.slug}`}
            />
          ))}
        </div>

        {/* Location Finder Section */}
        <LocationFinder />

        {/* Photo Collage */}
        <LocationCollage />

        {/* Host Timeline */}
        <HostTimeline />
      </div>

      {/* Testimonials Section */}
      <AnimatedTestimonials />
    </div>
  );
}
