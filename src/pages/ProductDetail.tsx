import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-lg font-semibold">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviewCount} reviews)</span>
                <span className="text-sm text-gray-500">Brand: {product.brand}</span>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-semibold">
                        {discountPercentage}% OFF
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-green-600">Inclusive of all taxes</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Buy Now
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Free delivery by Tomorrow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">1 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-orange-600" />
                  <span className="text-sm">7 Days Return Policy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="border-t p-6">
            <h3 className="text-xl font-bold mb-4">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;