import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Truck, Shield, Headphones } from 'lucide-react';

const Hero: React.FC = () => {
  const features = [
    { icon: Zap, title: 'Lightning Fast', description: 'Quick delivery' },
    { icon: Truck, title: 'Free Shipping', description: 'On orders over ₹500' },
    { icon: Shield, title: 'Secure Payment', description: '100% protected' },
    { icon: Headphones, title: '24/7 Support', description: 'Always here to help' }
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                India's Biggest Online Store
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Discover millions of products at incredible prices. From electronics to fashion, we have everything you need.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/categories"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/offers"
                className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
              >
                View Offers
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Shopping Experience"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">50% OFF</div>
              <div className="text-sm">On selected items</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white text-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;