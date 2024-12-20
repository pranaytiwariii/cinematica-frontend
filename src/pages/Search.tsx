import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchFilters from '../components/SearchFilters';
import SpaceCard from '../components/SpaceCard';
// import SearchBar from '../components/SearchBar';
import { spaces } from '../data/spaces';

interface LocationState {
  category: string;
  location: string;
  date: string;
}

export default function Search() {
  const location = useLocation();
  const searchParams = location.state as LocationState;
  const [filteredSpaces, setFilteredSpaces] = useState(spaces);

  useEffect(() => {
    if (searchParams) {
      const filtered = spaces.filter(space => {
        const categoryMatch = searchParams.category ? 
          space.categories.includes(searchParams.category) : true;
        
        const locationMatch = searchParams.location ?
          space.location.includes(searchParams.location) : true;

        return categoryMatch && locationMatch;
      });
      setFilteredSpaces(filtered);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* <div className="mb-8">
          <SearchBar variant="navbar" />
        </div> */}
        <SearchFilters />
        <main className="mt-8">
          {filteredSpaces.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No spaces found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSpaces.map((space) => (
                <SpaceCard key={space.id} {...space} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}