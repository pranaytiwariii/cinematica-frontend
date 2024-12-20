import { useState } from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearchStore } from '../store/searchStore';
import { cities } from '../data/cities';
import { categoryData } from '../data/categories'; // Ensure this import is correct

interface SearchBarProps {
  className?: string;
  variant?: 'hero' | 'navbar';
}

export default function SearchBar({ className = '', variant = 'hero' }: SearchBarProps) {
  const navigate = useNavigate();
  const setSearchParams = useSearchStore((state) => state.setSearchParams);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [date, setDate] = useState('');
  const selectedCityData = cities.find(city => city.name === selectedCity);

  const handleSearch = () => {
    const location = selectedArea ? `${selectedArea}, ${selectedCity}` : selectedCity;
    setSearchParams({
      category: selectedCategory,
      date,
      location
    });
    navigate('/search', { 
      state: { 
        category: selectedCategory,
        location,
        date 
      }
    });
    setIsExpanded(false);
  };

  const baseStyles = "flex items-center bg-white rounded-full overflow-hidden shadow-lg transition-all duration-300";
  const variantStyles = {
    hero: "w-full max-w-4xl p-2",
    navbar: isExpanded ? "w-full max-w-2xl p-1" : "w-48 p-1 cursor-pointer hover:bg-gray-50"
  };

  if (variant === 'navbar' && !isExpanded) {
    return (
      <div
        onClick={() => setIsExpanded(true)}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        <div className="flex items-center px-4 w-full">
          <Search className="w-5 h-5 text-gray-400" />
          <span className="ml-3 text-gray-500">Search spaces...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <div className="flex-1 flex items-center px-4 border-r border-gray-200">
        <Search className="w-5 h-5 text-gray-400" />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full ml-3 text-gray-900 focus:outline-none bg-transparent"
        >
          <option value="">Select Category</option>
          {categoryData.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex-1 flex items-center px-4 border-r border-gray-200">
        <Calendar className="w-5 h-5 text-gray-400" />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full ml-3 text-gray-900 placeholder-gray-500 focus:outline-none"
        />
      </div>
      
      <div className="flex-1 flex items-center px-4">
        <MapPin className="w-5 h-5 text-gray-400" />
        <div className="w-full flex space-x-2">
          <select
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setSelectedArea('');
            }}
            className="w-1/2 ml-3 text-gray-900 focus:outline-none bg-transparent"
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          
          {selectedCityData && (
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-1/2 text-gray-900 focus:outline-none bg-transparent"
            >
              <option value="">Select Area</option>
              {selectedCityData.areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      
      <button 
        onClick={handleSearch}
        className="btn ml-2 rounded-full"
        disabled={!selectedCategory || !selectedCity}
      >
        Search
      </button>

      {variant === 'navbar' && (
        <button
          onClick={() => setIsExpanded(false)}
          className="p-2 hover:bg-gray-100 rounded-full ml-2"
        >
          <span className="sr-only">Close search</span>
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}