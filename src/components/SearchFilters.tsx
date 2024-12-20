import { useState } from 'react';
import { Camera, Mic, Music, Users, DollarSign, SlidersHorizontal } from 'lucide-react';
import { useSearchStore } from '../store/searchStore';

const categories = [
  { icon: Camera, label: 'Photo Shoots' },
  { icon: Music, label: 'Events' },
  { icon: Mic, label: 'Podcasts' },
  { icon: Users, label: 'Meetings' },
];

export default function SearchFilters() {
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const { priceRange, filters, setSearchParams } = useSearchStore();

  const handlePriceChange = (values: [number, number]) => {
    setSearchParams({ priceRange: values });
  };

  const handleFilterChange = (filterType: string, value: any) => {
    setSearchParams({
      filters: {
        ...filters,
        [filterType]: value,
      },
    });
  };

  return (
    <div className="sticky top-20 bg-white z-40 border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex space-x-4">
          {categories.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100 transition"
            >
              <Icon className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsPriceOpen(!isPriceOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100"
            >
              <DollarSign className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Price Range</span>
            </button>
            
            {isPriceOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange([Number(e.target.value), priceRange[1]])}
                      className="w-28 px-3 py-2 border rounded-md"
                    />
                    <span className="self-center">to</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange([priceRange[0], Number(e.target.value)])}
                      className="w-28 px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100"
            >
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">More Filters</span>
            </button>
            
            {isFiltersOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Capacity</label>
                    <input
                      type="number"
                      value={filters.capacity}
                      onChange={(e) => handleFilterChange('capacity', Number(e.target.value))}
                      className="mt-1 w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Minimum Rating</label>
                    <select
                      value={filters.rating}
                      onChange={(e) => handleFilterChange('rating', Number(e.target.value))}
                      className="mt-1 w-full px-3 py-2 border rounded-md"
                    >
                      <option value="0">Any</option>
                      <option value="3">3+ Stars</option>
                      <option value="4">4+ Stars</option>
                      <option value="4.5">4.5+ Stars</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}