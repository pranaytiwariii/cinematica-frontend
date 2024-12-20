import { Space } from '../../types/space';
import SpaceCard from '../SpaceCard';
import { Heart } from 'lucide-react';

interface LikedSpacesProps {
  spaces: Space[];
}

export default function LikedSpaces({ spaces }: LikedSpacesProps) {
  if (spaces.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-sm">
        <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Liked Spaces Yet</h3>
        <p className="text-gray-500">Start exploring and save your favorite spaces!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {spaces.map((space) => (
        <SpaceCard key={space.id} {...space} />
      ))}
    </div>
  );
}