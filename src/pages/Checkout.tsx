import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-6 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        {/* Add checkout form here */}
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
