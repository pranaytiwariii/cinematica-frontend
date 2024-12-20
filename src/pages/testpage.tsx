import React from 'react';
import DemoProfile from '../components/demoProfile';

const demoUser = {
  uid: '12345',
  email: 'demo@example.com',
  username: 'demoUser',
  likedLocations: ['1','2'],
  listedLocations: ['3','4'],
  bookings: ['Booking1', 'Booking2'],
  metadata: {
    creationTime: '2023-01-01T00:00:00Z',
  },
};

const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <DemoProfile user={demoUser} />
    </div>
  );
};

export default TestPage;