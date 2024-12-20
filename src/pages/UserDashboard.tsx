import { useEffect } from 'react';
import { useLikesStore } from '../store/likesStore';
import { spaces } from '../data/spaces';
import SpaceCard from '../components/SpaceCard';

export default function UserDashboard() {
  const { likedSpaces, fetchLikedSpaces, isLoading } = useLikesStore();

  useEffect(() => {
    fetchLikedSpaces();
  }, []);

  const likedSpaceDetails = spaces.filter(space => 
    likedSpaces.includes(space.id.toString())
  );

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Liked Spaces</h1>
        
        {likedSpaceDetails.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">You haven't liked any spaces yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {likedSpaceDetails.map((space) => (
              <SpaceCard key={space.id} {...space} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}