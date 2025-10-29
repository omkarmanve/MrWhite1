// Product.jsx
import React from 'react';
import ProductCard from '../components/ProductCart';
import bannerImage from '../assets/Product.png';
import product1 from '../assets/product1.png';
import product2 from '../assets/product1.png';
import product3 from '../assets/product1.png';
import product4 from '../assets/product1.png';

export default function Product() {
  const products = [
    { image: product1, title: "3-in-1 Portable Travel Water Bottle", originalPrice: "$29.99", salePrice: "$24.99", rating: "4.7/5", ratingsCount: 106, badges: ["Gravity-Fed", "Premium"] },
    { image: product2, title: "Travel Water Bottle XL", originalPrice: "$39.99", salePrice: "$34.99", rating: "4.8/5", ratingsCount: 88, badges: ["Premium"] },
    { image: product3, title: "Collapsible Pet Bottle", originalPrice: "$25.99", salePrice: "$19.99", rating: "4.5/5", ratingsCount: 72, badges: ["Gravity-Fed"] },
    { image: product4, title: "Portable Dog Water Bottle", originalPrice: "$32.99", salePrice: "$27.99", rating: "4.6/5", ratingsCount: 95, badges: ["Gravity-Fed", "Premium"] },
  ];

  const containerStyle = {
    display: 'flex',         // Make children align in a row
    flexWrap: 'wrap',        // Wrap to next line if screen is too small
    justifyContent: 'space-between', // Space between cards
    gap: '20px',
    margin: '20px auto',
    maxWidth: '1440px',
    padding: '0 10px'
  };

  return (
    <div>
      {/* Top Banner */}
      <div style={{ width: '100%', marginBottom: '2.5rem', textAlign: 'center' }}>
        <img src={bannerImage} alt="Banner" style={{ width: '100%', maxWidth: '1440px', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
      </div>

      {/* Products in a row */}
      <div style={containerStyle}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
