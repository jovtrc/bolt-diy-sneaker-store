import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BrandCategory = () => {
  const { brandName } = useParams();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-6 flex-grow">
        <h1 className="text-3xl font-bold mb-4">{brandName} Sneakers</h1>
        {/* Add sneaker listing for the specific brand here */}
      </main>
      <Footer />
    </div>
  );
};

export default BrandCategory;
