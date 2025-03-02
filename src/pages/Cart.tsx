import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [productDetails, setProductDetails] = useState<{ [id: string]: { name: string; image_url: string; price: number } }>({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const details: { [id: string]: { name: string; image_url: string; price: number } } = {};
      for (const item of cart) {
        if (!productDetails[item.id]) {
          const { data, error } = await supabase
            .from('products')
            .select('name, image_url, price')
            .eq('id', item.id)
            .single();

          if (error) {
            console.error('Error fetching product details:', error);
          } else if (data) {
            details[item.id] = {
              name: data.name,
              image_url: data.image_url,
              price: data.price,
            };
          }
        }
      }
      setProductDetails(prevDetails => ({ ...prevDetails, ...details }));
    };

    if (cart.length > 0) {
      fetchProductDetails();
    }
  }, [cart]);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = productDetails[item.id]?.price || 0;
      return total + item.quantity * price;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const estimatedTotal = subtotal; // For now, assuming no extra fees

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-6 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  {/* Product image */}
                  <img
                    src={productDetails[item.id]?.image_url || "https://via.placeholder.com/50"}
                    alt={productDetails[item.id]?.name || "Product"}
                    className="w-12 h-12 object-cover mr-4"
                  />
                  <span className="mr-4">{productDetails[item.id]?.name || `Product ID: ${item.id}`}</span>
                </div>
                <div className="flex items-center">
                  <label htmlFor={`quantity-${item.id}`} className="mr-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    className="w-20 px-2 py-1 border rounded"
                    value={item.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);
                      if (newQuantity > 0) {
                        updateQuantity(item.id, newQuantity);
                      }
                    }}
                  />
                  <button
                    className="ml-4 text-red-500 hover:text-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6">
              <p className="text-xl font-bold">Subtotal: ${subtotal}</p>
              <p className="text-xl font-bold">Estimated Total: ${estimatedTotal}</p>
              <Link to="/checkout" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Proceed to Checkout (Pay on Delivery)
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
