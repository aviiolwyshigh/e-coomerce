import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`} className={`block group ${className}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
              {discountPercentage}% OFF
            </div>
          )}
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        {/* Product Details */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-600">{product.brand}</span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;