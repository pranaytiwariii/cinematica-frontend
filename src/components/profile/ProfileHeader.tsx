// import { User } from 'firebase/auth';


interface ProfileHeaderProps {

  user: {

    uid: string;

    email: string;

    emailVerified: boolean;

    isAnonymous: boolean;

    providerData: never[];

    refreshToken: string;

    username: string;

    likedLocations: string[];

    listedLocations: string[];

    bookings: string[];

    // metadata: {

    //   creationTime: string;

    // };

  };

}


export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-purple-600">
            {user.email?.[0].toUpperCase()}
          </span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{user.username}</h1>
          <p className="text-gray-500">{user.email}</p>
          {/* <p className="text-gray-500">Member since {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}</p> */}
        </div>
      </div>
    </div>
  );
}