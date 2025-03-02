import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '../supabaseClient';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', productId)
          .single();

        if (error) {
          console.error('Error fetching product:', error);
        }

        if (data) {
          setProduct(data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    if (!selectedColor) {
      alert('Please select a color.');
      return;
    }

    if (product) {
      addToCart(productId);
    }
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-6 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src={product.image_url} alt={product.name} className="w-full rounded shadow" />
            {/* Image gallery with multiple product photos */}
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">${product.price}</p>

            {/* Size selection options */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Size:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Select Size</option>
                <option value="US 7">US 7</option>
                <option value="US 8">US 8</option>
                <option value="US 9">US 9</option>
                <option value="US 10">US 10</option>
              </select>
            </div>

            {/* Color selection options */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Color:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="">Select Color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </div>

            {/* "Add to Cart" button */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
