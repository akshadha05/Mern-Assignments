import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$19.99', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$29.99', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$39.99', image: 'https://via.placeholder.com/150' },
];

function ProductDetails({ match }) {
  const productId = match.params.id;
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-xl">Price: {product.price}</p>
      <p className="mt-4">More details about the product...</p>
    </div>
  );
}

export default ProductDetails;