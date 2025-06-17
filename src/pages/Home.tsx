import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { featuredProducts, bestSellers, newArrivals, categories } from '../data/mockData';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, TrendingUp, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600">Explore our wide range of product categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {category.subcategories.length} subcategories
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            </div>
            <Link
              to="/products"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-6 h-6 text-green-500" />
              <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
            </div>
            <Link
              to="/bestsellers"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-12 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="w-6 h-6" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Special Offer</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Up to 70% Off on Electronics
                </h3>
                <p className="text-orange-100 mb-6">
                  Don't miss out on our biggest sale of the year. Limited time offer on all electronic items.
                </p>
                <Link
                  to="/offers"
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Shop Now
                </Link>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Special Offer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
            </div>
            <Link
              to="/new-arrivals"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductGrid products={newArrivals} />
        </div>
      </section>
    </div>
  );
};

export default Home;