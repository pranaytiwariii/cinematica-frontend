// import { User } from 'firebase/auth';


interface AccountSettingsProps {

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

    metadata: {

      creationTime: string;

    };

  };

  onChangePassword: () => void;

  onDeleteAccount: () => void;

}


export default function AccountSettings({ user, onChangePassword, onDeleteAccount }: AccountSettingsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Account Settings</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={user.email || ''}
            disabled
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <button 
            onClick={onChangePassword}
            className="mt-1 btn-secondary"
          >
            Change Password
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Delete Account</label>
          <button 
            onClick={onDeleteAccount}
            className="mt-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}