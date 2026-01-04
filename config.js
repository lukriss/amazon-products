// ============================================
// PRODUCT CONFIGURATION
// ============================================
// Edit this file to customize your landing page for different products
// No coding knowledge required - just update the values below!

const productConfig = {
  // Your Amazon Associates ID
  associatesId: 'chlu02-20',
  
  // Product Details
  product: {
    // Product title - make it compelling!
    title: 'Premium Wireless Noise Cancelling Headphones',
    
    // Amazon ASIN (found in product URL: amazon.com/dp/ASIN)
    asin: 'B0XXXXXXXXX',
    
    // Product description - highlight benefits
    description: 'Experience crystal-clear audio with industry-leading noise cancellation. Perfect for travel, work, or relaxation. These premium headphones deliver exceptional sound quality with up to 30 hours of battery life.',
    
    // Price (update regularly for accuracy)
    price: '$299.99',
    priceNote: 'Price may vary. Check Amazon for current price.',
    
    // Rating (out of 5)
    rating: 4.5,
    reviewCount: '12,847',
    
    // Is this a Prime product?
    isPrime: true,
    
    // Key Features (3-6 features work best)
    features: [
      {
        icon: '🎧',
        text: 'Industry-leading noise cancellation technology'
      },
      {
        icon: '🔋',
        text: 'Up to 30 hours of battery life'
      },
      {
        icon: '🎵',
        text: 'Premium sound quality with deep bass'
      },
      {
        icon: '📱',
        text: 'Bluetooth 5.0 for seamless connectivity'
      },
      {
        icon: '✈️',
        text: 'Perfect for travel with foldable design'
      },
      {
        icon: '🎤',
        text: 'Built-in microphone for crystal-clear calls'
      }
    ],
    
    // Product Images (URLs)
    // Main image should be high quality
    images: {
      main: 'https://via.placeholder.com/600x600?text=Main+Product+Image',
      gallery: [
        'https://via.placeholder.com/400x400?text=Gallery+Image+1',
        'https://via.placeholder.com/400x400?text=Gallery+Image+2',
        'https://via.placeholder.com/400x400?text=Gallery+Image+3',
        'https://via.placeholder.com/400x400?text=Gallery+Image+4'
      ]
    }
  },
  
  // Page Metadata (for SEO and Pinterest)
  meta: {
    // Page title (appears in browser tab and Pinterest)
    pageTitle: 'Premium Wireless Headphones - Best Noise Cancelling 2026',
    
    // Meta description (appears in search results and Pinterest)
    description: 'Discover the best wireless noise cancelling headphones of 2026. Premium sound quality, 30-hour battery, and industry-leading noise cancellation.',
    
    // Keywords for SEO
    keywords: 'wireless headphones, noise cancelling, premium audio, bluetooth headphones',
    
    // Badge text (appears at top of page)
    badge: '🔥 Trending Product'
  },
  
  // Call-to-Action Settings
  cta: {
    // Button text
    buttonText: '🛒 View on Amazon',
    
    // Alternative CTA text
    altText: 'Check Latest Price on Amazon'
  },
  
  // Trust Signals (social proof)
  trustSignals: [
    {
      icon: '✓',
      title: 'Amazon Prime',
      text: 'Fast & Free Delivery'
    },
    {
      icon: '⭐',
      title: 'Top Rated',
      text: '4.5/5 from 12K+ reviews'
    },
    {
      icon: '🔒',
      title: 'Secure Purchase',
      text: 'Amazon A-to-Z Guarantee'
    },
    {
      icon: '↩️',
      title: 'Easy Returns',
      text: '30-day return policy'
    }
  ]
};

// ============================================
// HELPER FUNCTIONS (Don't edit below)
// ============================================

// Generate Amazon affiliate link
function getAmazonLink() {
  return `https://www.amazon.com/dp/${productConfig.product.asin}?tag=${productConfig.associatesId}`;
}

// Generate star rating HTML
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  if (hasHalfStar) {
    stars += '½';
  }
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '☆';
  }
  
  return stars;
}

// Initialize page with product data
function initializePage() {
  // Update meta tags
  document.title = productConfig.meta.pageTitle;
  document.querySelector('meta[name="description"]').content = productConfig.meta.description;
  document.querySelector('meta[name="keywords"]').content = productConfig.meta.keywords;
  
  // Update Open Graph tags for Pinterest
  document.querySelector('meta[property="og:title"]').content = productConfig.meta.pageTitle;
  document.querySelector('meta[property="og:description"]').content = productConfig.meta.description;
  document.querySelector('meta[property="og:image"]').content = productConfig.product.images.main;
  
  // Update badge
  document.getElementById('badge').textContent = productConfig.meta.badge;
  
  // Update product title
  document.getElementById('product-title').textContent = productConfig.product.title;
  document.querySelector('h1').textContent = productConfig.product.title;
  
  // Update rating
  document.getElementById('stars').textContent = generateStars(productConfig.product.rating);
  document.getElementById('rating-text').textContent = `${productConfig.product.rating} (${productConfig.product.reviewCount} reviews)`;
  
  // Update price
  document.getElementById('price').textContent = productConfig.product.price;
  document.getElementById('price-note').textContent = productConfig.product.priceNote;
  
  // Update description
  document.getElementById('description').textContent = productConfig.product.description;
  
  // Update main image
  document.getElementById('main-image').src = productConfig.product.images.main;
  document.getElementById('main-image').alt = productConfig.product.title;
  
  // Update Prime badge visibility
  if (!productConfig.product.isPrime) {
    document.getElementById('prime-badge').style.display = 'none';
  }
  
  // Update features
  const featuresContainer = document.getElementById('features');
  featuresContainer.innerHTML = '';
  productConfig.product.features.forEach(feature => {
    const featureDiv = document.createElement('div');
    featureDiv.className = 'feature-item';
    featureDiv.innerHTML = `
      <div class="feature-icon">${feature.icon}</div>
      <div class="feature-text">${feature.text}</div>
    `;
    featuresContainer.appendChild(featureDiv);
  });
  
  // Update gallery
  const galleryContainer = document.getElementById('gallery');
  galleryContainer.innerHTML = '';
  productConfig.product.images.gallery.forEach((image, index) => {
    const galleryDiv = document.createElement('div');
    galleryDiv.className = 'gallery-item';
    galleryDiv.innerHTML = `<img src="${image}" alt="${productConfig.product.title} - Image ${index + 1}">`;
    galleryContainer.appendChild(galleryDiv);
  });
  
  // Update trust signals
  const trustContainer = document.getElementById('trust-signals');
  trustContainer.innerHTML = '';
  productConfig.trustSignals.forEach(signal => {
    const trustDiv = document.createElement('div');
    trustDiv.className = 'trust-item';
    trustDiv.innerHTML = `
      <div class="trust-icon">${signal.icon}</div>
      <div class="trust-title">${signal.title}</div>
      <div class="trust-text">${signal.text}</div>
    `;
    trustContainer.appendChild(trustDiv);
  });
  
  // Update all CTA buttons
  const amazonLink = getAmazonLink();
  document.querySelectorAll('.cta-button').forEach(button => {
    button.href = amazonLink;
    button.textContent = productConfig.cta.buttonText;
  });
}

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', initializePage);
