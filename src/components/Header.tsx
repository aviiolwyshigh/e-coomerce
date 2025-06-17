import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const { getTotalItems } = useCart();

  const handleLogout = async () => {
    try {
      await logout();
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-1 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />Deliver to 110001</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Download App</span>
            <span>|</span>
            <span>24x7 Support</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-blue-600">FlipMart</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-6">
            {/* User Account */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="hidden md:block text-sm">
                  {currentUser ? currentUser.displayName || 'Account' : 'Login'}
                </span>
              </button>

              {/* User Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {currentUser ? (
                    <>
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        My Profile
                      </Link>
                      <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        My Orders
                      </Link>
                      <Link to="/wishlist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Wishlist
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Login
                      </Link>
                      <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link to="/wishlist" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Heart className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-md">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link to="/categories" className="block py-2 text-gray-700 hover:text-blue-600">
              Categories
            </Link>
            <Link to="/offers" className="block py-2 text-gray-700 hover:text-blue-600">
              Offers
            </Link>
            <Link to="/help" className="block py-2 text-gray-700 hover:text-blue-600">
              Help
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;