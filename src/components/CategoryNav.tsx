import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';
import { Smartphone, Home, Dumbbell, ShirtIcon } from 'lucide-react';

const iconMap = {
  Smartphone,
  Home,
  Dumbbell,
  ShirtIcon
};

const CategoryNav: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-8">
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  <span className="text-sm font-medium">{category.name}</span>
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <Link to="/offers" className="text-orange-600 hover:text-orange-700 font-medium">
              Top Offers
            </Link>
            <Link to="/mobiles" className="text-gray-700 hover:text-blue-600">
              Mobiles
            </Link>
            <Link to="/electronics" className="text-gray-700 hover:text-blue-600">
              Electronics
            </Link>
            <Link to="/fashion" className="text-gray-700 hover:text-blue-600">
              Fashion
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;