import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { useLikesStore } from '../store/likesStore';
import { spaces } from '../data/spaces';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTabs from '../components/profile/ProfileTabs';
import LikedSpaces from '../components/profile/LikedSpaces';
import ListedSpaces from '../components/profile/ListedSpaces';
import AccountSettings from '../components/profile/AccountSettings';

export default function ProfilePage() {
  const { user } = useAuthStore();
  const { likedSpaces, fetchLikedSpaces } = useLikesStore();
  const [activeTab, setActiveTab] = useState('liked');
  const [userListings, setUserListings] = useState(spaces.filter(space => space.hostId.toString() === user?.uid));

  useEffect(() => {
    fetchLikedSpaces();
  }, []);

  const likedSpaceDetails = spaces.filter(space => 
    likedSpaces.includes(space.id.toString())
  );

  const handleChangePassword = () => {
    // Implement password change logic
    console.log('Change password');
  };

  const handleDeleteAccount = () => {
    // Implement account deletion logic
    console.log('Delete account');
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Please login to view your profile</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProfileHeader user={user} />
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="space-y-8">
          {activeTab === 'liked' && <LikedSpaces spaces={likedSpaceDetails} />}
          {activeTab === 'listings' && <ListedSpaces spaces={userListings} />}
          {activeTab === 'settings' && (
            <AccountSettings
              user={user}
              onChangePassword={handleChangePassword}
              onDeleteAccount={handleDeleteAccount}
            />
          )}
        </div>
      </div>
    </div>
  );
}