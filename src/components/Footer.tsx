import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-white">FlipMart</span>
            </div>
            <p className="text-sm leading-relaxed">
              India's largest online marketplace, bringing you the best deals on millions of products across categories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-blue-400 transition-colors">Press</Link></li>
              <li><Link to="/bulk-orders" className="hover:text-blue-400 transition-colors">Bulk Orders</Link></li>
              <li><Link to="/gift-cards" className="hover:text-blue-400 transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-blue-400 transition-colors">Help Center</Link></li>
              <li><Link to="/returns" className="hover:text-blue-400 transition-colors">Returns</Link></li>
              <li><Link to="/shipping" className="hover:text-blue-400 transition-colors">Shipping Info</Link></li>
              <li><Link to="/track-order" className="hover:text-blue-400 transition-colors">Track Your Order</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">support@flipmart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Bangalore, India</span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-white font-medium mb-2">Download Our App</h4>
              <div className="flex space-x-2">
                <img src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=120&h=40" alt="Google Play" className="h-10 rounded" />
                <img src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=120&h=40" alt="App Store" className="h-10 rounded" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 FlipMart. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;