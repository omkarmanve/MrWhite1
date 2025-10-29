import React from 'react';

const ReviewPage = () => {
  // Component for a single review item
  const ReviewItem = ({ name, location, rating, text }) => (
    <div style={styles.reviewCard}>
      <div style={styles.reviewHeader}>
        {/* Placeholder for a user avatar/image */}
        <div style={styles.avatar}></div>
        <div style={styles.userInfo}>
          <div style={styles.nameLocation}>
            <span style={styles.reviewerName}>{name}</span>
            <span style={styles.reviewerLocation}>{location}</span>
          </div>
          <div style={styles.ratingInfo}>
            <span style={styles.stars}>{ratingStars(rating)}</span>
            <span style={styles.ratingScore}>{rating}/5</span>
          </div>
        </div>
      </div>
      <p style={styles.reviewText}>{text}</p>
    </div>
  );

  // Helper function to render stars based on rating
  const ratingStars = (rating) => {
    // A simplified representation. In a real app, this would use a star icon component.
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} style={styles.starIcon}>★</span>
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} style={styles.emptyStarIcon}>★</span>
        ))}
      </>
    );
  };

  // Sample data to render the four identical reviews
  const sampleReview = {
    name: 'John Doe',
    location: 'Seattle, Washington',
    rating: 4.1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  };

  const reviews = [
    sampleReview,
    sampleReview,
    sampleReview,
    sampleReview,
  ];

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Word on the Streets</h1>

      {/* --- Leave a Review Section --- */}
      <div style={styles.reviewFormSection}>
        <h2 style={styles.formTitle}>Leave a review</h2>
        <div style={styles.ratingArea}>
          <span style={styles.largeStars}>
            {[...Array(5)].map((_, i) => (
              <span key={`input-star-${i}`} style={styles.largeStarIcon}>★</span>
            ))}
          </span>
          <p style={styles.ratingText}>Your rating here</p>
        </div>

        <div style={styles.inputGroup}>
          <input type="text" placeholder="Name" style={styles.textInput} />
        </div>
        <div style={styles.inputGroup}>
          <input type="text" placeholder="Location" style={styles.textInput} />
        </div>
        <div style={styles.inputGroup}>
          <textarea placeholder="Your Message here" style={styles.textArea}></textarea>
        </div>

        <button style={styles.submitButton}>
          <span style={styles.buttonStar}>★</span>
          Leave Review
        </button>
      </div>

      {/* --- Existing Reviews Section --- */}
      <div style={styles.reviewsList}>
        {reviews.map((review, index) => (
          <ReviewItem
            key={index}
            name={review.name}
            location={review.location}
            rating={review.rating}
            text={review.text}
          />
        ))}
      </div>
    </div>
  );
};

// --- Basic Inline Styles to Mimic the Look ---
// NOTE: For a real application, use a proper CSS-in-JS library, CSS modules, or a separate stylesheet.
const styles = {
  pageContainer: {
    backgroundColor: '#000', // Black background
    color: '#fff', // White text
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bold',
    paddingBottom: '20px',
  },

  // Form Section Styles
  reviewFormSection: {
    backgroundColor: '#111', // Slightly lighter black for the form area
    padding: '30px 20px',
    borderRadius: '5px',
    marginBottom: '30px',
    borderBottom: '1px solid #333' // Separator line above the first review
  },
  formTitle: {
    textAlign: 'center',
    fontSize: '1.5em',
    marginBottom: '15px',
  },
  ratingArea: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  largeStars: {
    fontSize: '2.5em',
    color: '#333', // Dim gray for unselected stars in input
    letterSpacing: '5px',
    cursor: 'pointer',
  },
  largeStarIcon: {
      // You would use a JavaScript handler here to change the color on hover/click
  },
  ratingText: {
    color: '#aaa',
    marginTop: '5px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  textInput: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    backgroundColor: '#222',
    border: 'none',
    color: '#fff',
    fontSize: '1em',
    borderRadius: '3px',
  },
  textArea: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    height: '100px',
    backgroundColor: '#222',
    border: 'none',
    color: '#fff',
    fontSize: '1em',
    borderRadius: '3px',
    resize: 'none',
  },
  submitButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#d8b74c', // Gold/yellow color
    color: '#000',
    border: 'none',
    borderRadius: '3px',
    fontSize: '1.1em',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStar: {
    marginRight: '10px',
    fontSize: '1.2em',
  },

  // Reviews List Styles
  reviewsList: {
    paddingTop: '10px',
  },
  reviewCard: {
    backgroundColor: '#000',
    padding: '20px 0',
    borderBottom: '1px solid #333', // Separator between reviews
  },
  reviewHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#444', // Placeholder for user avatar
    marginRight: '15px',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameLocation: {
    display: 'flex',
    alignItems: 'center',
  },
  reviewerName: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  reviewerLocation: {
    fontSize: '0.9em',
    color: '#aaa',
  },
  ratingInfo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
  },
  stars: {
    marginRight: '10px',
    fontSize: '1.1em',
  },
  starIcon: {
    color: '#d8b74c', // Gold for filled stars
  },
  emptyStarIcon: {
    color: '#444', // Gray for empty stars
  },
  ratingScore: {
    fontSize: '0.9em',
    fontWeight: 'bold',
    color: '#d8b74c', // Gold for the score
  },
  reviewText: {
    lineHeight: '1.5',
    fontSize: '0.95em',
    color: '#ccc',
  }
};

export default ReviewPage;