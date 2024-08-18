import React from 'react';
import ProductCard from './ProductCard';

const ParentComponent = () => {
  const handleAddToCart = (item, size, color) => {
    // Add the item to the cart with the selected size and color
    console.log('Item added to cart:', item, size, color);
  };

  const item = {
    id: 1,
    name: 'T-Shirt',
    price: 499,
    description: 'A comfortable cotton t-shirt',
    material: 'Cotton',
    stock: 10,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Blue', 'Green'],
    images: ['image1.jpg', 'image2.jpg'],
  };

  return (
    <div>
      <ProductCard item={item} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ParentComponent;
