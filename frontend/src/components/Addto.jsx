import React, { useState } from 'react';
import productMain from '../assets/product1.png'; 
import thumb1 from '../assets/product1.png';
import thumb2 from '../assets/product1.png';
import thumb3 from '../assets/product1.png';
import Word from '../components/WordontheStreets';
const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('#1C1C1C');

  const colors = [
    { name: 'Black', hex: '#1C1C1C' },
    { name: 'Sage Green', hex: '#A3B49A' },
    { name: 'Blush Pink', hex: '#F0E0E0' },
  ];

  const containerStyle = {
    backgroundColor: '#1E1E1E',
    color: 'white',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
  };

  const priceStyle = {
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginLeft: '10px',
    color: '#EBB44D',
  };

  const oldPriceStyle = {
    textDecoration: 'line-through',
    fontSize: '1em',
    opacity: '0.7',
  };

  const featurePillStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    margin: '5px',
    borderRadius: '8px',
    backgroundColor: '#333333',
    fontWeight: '500',
    fontSize: '0.9em',
  };

  const iconStyle = {
    marginRight: '8px',
    fontSize: '1.2em',
  };

  const callToActionStyle = {
    backgroundColor: '#EBB44D',
    color: '#1E1E1E',
    padding: '15px',
    textAlign: 'center',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const shippingInfoStyle = {
    textAlign: 'center',
    color: '#50C878',
    marginBottom: '10px',
    fontWeight: 'bold',
  };

  const dogCarePillStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    margin: '15px 0',
    borderRadius: '8px',
    backgroundColor: '#282828',
    opacity: '0.8',
  };

  const colorSwatchStyle = (hex) => ({
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    backgroundColor: hex,
    border: hex === selectedColor ? '2px solid white' : '2px solid transparent',
    marginRight: '10px',
    cursor: 'pointer',
  });

  const collapsibleHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 0',
    borderBottom: '1px solid #333333',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      {/* LEFT SIDE: Images */}
      <div>
        {/* Main Product Image */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
          <img src={productMain} alt="Main Product" style={{ width: '100%', borderRadius: '12px' }} />
        </div>

        {/* Thumbnails */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {[productMain, thumb1, thumb2, thumb3].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumb ${index}`}
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '8px',
                border: '2px solid #333',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Product Info */}
      <div>
        {/* Reviews */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ color: '#EBB44D' }}>★★★★★</span>
          <span style={{ fontSize: '0.9em', marginLeft: '5px' }}>4.7/5</span>
          <span style={{ opacity: '0.7', marginLeft: '5px' }}>106 ratings</span>
        </div>

        {/* Title & Price */}
        <h1 style={{ fontSize: '2em', marginBottom: '5px' }}>
          32oz 3-in-1 Portable Travel Water Bottle
        </h1>
        <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '20px' }}>
          <span style={oldPriceStyle}>$29.99</span>
          <span style={priceStyle}>$24.99</span>
        </div>

        {/* Description */}
        <p style={{ marginBottom: '20px', lineHeight: '1.4' }}>
          The Tail-Wagging Love Hydration bottle is a convenient, pet-themed water bottle
          designed for dog lovers to stay hydrated on the go.
        </p>

        {/* Features */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
          <div style={featurePillStyle}><span style={iconStyle}>🥤</span> 2-in-1 Hydration & Feeding</div>
          <div style={featurePillStyle}><span style={iconStyle}>💧</span> Leak-Proof Portability</div>
          <div style={featurePillStyle}><span style={iconStyle}>✅</span> Safe, BPA-Free Material</div>
          <div style={featurePillStyle}><span style={iconStyle}>⚡</span> One-Button Dispensing</div>
        </div>

        {/* Shipping */}
        <div style={shippingInfoStyle}>
          <span style={{ marginRight: '5px' }}>🟢</span> Shipped within 24h
        </div>

        {/* CTA */}
        <button style={callToActionStyle}>
          <span style={{ marginRight: '10px' }}>🛒</span> Add to Cart
        </button>

        {/* Dog-Care Knowledge */}
        <div style={dogCarePillStyle}>
          🐶 Developed with 50 years of dog-care knowledge.
        </div>

        {/* Colors */}
        <h2 style={{ fontSize: '1.2em', marginTop: '30px', marginBottom: '10px' }}>Color</h2>
        <div style={{ display: 'flex', marginBottom: '30px' }}>
          {colors.map((color) => (
            <div
              key={color.name}
              style={colorSwatchStyle(color.hex)}
              onClick={() => setSelectedColor(color.hex)}
              title={color.name}
            />
          ))}
        </div>

        {/* Collapsible Sections */}
        <div style={{ borderTop: '1px solid #333333' }}>
          <div style={collapsibleHeaderStyle}>Details <span>&#8964;</span></div>
        </div>
        <div>
          <div style={collapsibleHeaderStyle}>Shipping <span>&#8964;</span></div>
        </div>
        <div>
          <div style={collapsibleHeaderStyle}>Cleaning <span>&#8964;</span></div>
        </div>
      </div>
      <Word/>
    </div>
  );
};

export default ProductPage;
