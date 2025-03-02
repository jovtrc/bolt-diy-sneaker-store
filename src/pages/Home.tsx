import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('*');

        if (error) {
          console.error('Error fetching products:', error);
        }

        if (data) {
          setProducts(data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-6 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Welcome to Sneaker Store</h1>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product.id} className="border p-4 rounded shadow">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover mb-2" />
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                </Link>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
