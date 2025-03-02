import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-6 flex-grow">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        {user ? (
          <div>
            <p>Email: {user.email}</p>
            {/* Add user details and order history here */}
          </div>
        ) : (
          <p>Please login to view your profile.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
