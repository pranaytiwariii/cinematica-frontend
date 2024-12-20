import { useEffect, useState } from 'react';
import { spaces } from '../data/spaces';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTabs from '../components/profile/ProfileTabs';
import LikedSpaces from '../components/profile/LikedSpaces';
import ListedSpaces from '../components/profile/ListedSpaces';
import AccountSettings from '../components/profile/AccountSettings';

interface DemoProfileProps {
  user: {
    uid: string;
    email: string;
    username: string;
    likedLocations: string[];
    listedLocations: string[];
    bookings: string[];
    metadata: {
      creationTime: string;
    };
  };
}

export default function DemoProfile({ user }: DemoProfileProps) {
  const [activeTab, setActiveTab] = useState('liked');
  const [userListings] = useState(spaces.filter(space => space.hostId.toString() === user.uid));
  const [likedSpaces, setLikedSpaces] = useState(user.likedLocations);

  useEffect(() => {
    // Simulate fetching liked spaces
    setLikedSpaces(user.likedLocations);
    // Alert user details
    alert(`User details: ${JSON.stringify(user, null, 2)}`);
  }, [user.likedLocations, user]);

  const likedSpaceDetails = spaces.filter(space => 
    likedSpaces.includes(space.id.toString())
  );

  const handleChangePassword = () => {
    // Implement password change logic
    alert('Change password functionality is not implemented in demo.');
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProfileHeader user={user} />
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'liked' && <LikedSpaces spaces={likedSpaceDetails} />}
        {activeTab === 'listed' && <ListedSpaces spaces={userListings} />}
        {activeTab === 'settings' && <AccountSettings user={user} onChangePassword={handleChangePassword} />}
      </div>
    </div>
  );
}