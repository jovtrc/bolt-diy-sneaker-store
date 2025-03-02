import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, LogOut, User } from 'lucide-react';

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-5 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Sneaker Store
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/cart" className="text-gray-700 hover:text-gray-900">
                Cart
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile" className="text-gray-700 hover:text-gray-900 flex items-center">
                    <User className="mr-1" size={16} />
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={signOut} className="text-gray-700 hover:text-gray-900 flex items-center">
                    <LogOut className="mr-1" size={16} />
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="text-gray-700 hover:text-gray-900 flex items-center">
                  <LogIn className="mr-1" size={16} />
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
