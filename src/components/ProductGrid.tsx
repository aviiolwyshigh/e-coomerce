import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  title?: string;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title, className = '' }) => {
  if (products.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-gray-500 text-lg">No products found</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <div className="w-16 h-1 bg-blue-600 rounded"></div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;