import React from 'react';

export default function ProductCard({ image, title, originalPrice, salePrice, rating, ratingsCount, badges }) {
  const styles = {
    card: {
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      width: '100%', // fill grid column
      maxWidth: '250px', // reduced width for 4 cards in row
      margin: '0 auto', // center in grid column
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
    },
    imageContainer: { position: 'relative', width: '100%', height: '200px', overflow: 'hidden' },
    image: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
    badge: {
      position: 'absolute',
      padding: '4px 10px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      top: '10px',
    },
  
    details: { padding: '10px 15px 20px' },
    ratingContainer: { display: 'flex', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' },
    star: { color: 'gold', fontSize: '1rem', lineHeight: 1 },
    halfStar: { position: 'relative', display: 'inline-block', color: '#ccc' },
    ratingText: { marginLeft: '6px', fontWeight: 'bold', fontSize: '1rem' },
    ratingsCount: { marginLeft: '6px', color: '#aaa', fontSize: '0.85rem' },
    title: { fontSize: '1.2rem', fontWeight: 900, margin: '5px 0', lineHeight: 1.2 },
    priceContainer: { marginBottom: '10px' },
    originalPrice: { color: '#aaa', textDecoration: 'line-through', fontSize: '0.9rem', marginRight: '8px' },
    salePrice: { color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' },
    description: { color: '#ccc', fontSize: '0.85rem', lineHeight: 1.4, margin: '0 0 15px 0' },
    button: {
      width: '100%',
      backgroundColor: '#ead181',
      color: '#000',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '6px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color 0.2s, box-shadow 0.2s',
    },
    cartIcon: { marginRight: '6px', fontSize: '1rem' },
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
        {badges?.map((badge, index) => (
          <div
            key={index}
            style={{
            
            }}
          >
            {badge}
          </div>
        ))}
      </div>

      <div style={styles.details}>
        <div style={styles.ratingContainer}>
          {[...Array(4)].map((_, i) => (
            <span key={i} style={styles.star}>
              ★
            </span>
          ))}
          <span style={styles.halfStar}>★</span>
          <span style={styles.ratingText}>{rating}</span>
          <span style={styles.ratingsCount}>{ratingsCount} ratings</span>
        </div>

        <h1 style={styles.title}>{title}</h1>

        <div style={styles.priceContainer}>
          <span style={styles.originalPrice}>{originalPrice}</span>
          <span style={styles.salePrice}>{salePrice}</span>
        </div>

        <p style={styles.description}>
          The bottle is a convenient, pet-themed water bottle designed for dog lovers to stay hydrated on the go.
        </p>

        <button style={styles.button}>
          <span style={styles.cartIcon}>🛒</span> Add to Cart
        </button>
      </div>
    </div>
  );
}
