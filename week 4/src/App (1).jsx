import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const products = [
  { id: 1, name: 'Laptop', price: 'Rs 60,000', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Mobile', price: 'Rs 20,000', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Television', price: 'Rs 30,000', image: 'https://via.placeholder.com/150' },
];

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyStore</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MyStore</h1>
        <p className="text-xl">Discover amazing products at great prices!</p>
      </div>
    </div>
  );
}

function Product({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-700">{product.price}</p>
      <Link to={`/products/${product.id}`} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 block text-center">
        View Details
      </Link>
    </div>
  );
}

function ProductSection() {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
          <a href="https://facebook.com" className="hover:text-blue-400">Facebook</a>
          <a href="https://instagram.com" className="hover:text-blue-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProductSection />
            </>
          } />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;