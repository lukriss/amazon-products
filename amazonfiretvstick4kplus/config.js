// ============================================
// PRODUCT CONFIGURATION TEMPLATE
// ============================================
// Copy this template to create new product pages quickly!

const productConfig = {
    // ============================================
    // YOUR AMAZON ASSOCIATES ID (Don't change this)
    // ============================================
    associatesId: 'chlu02-20',

    // ============================================
    // PRODUCT DETAILS
    // ============================================
    product: {
        // PRODUCT TITLE
        // Make it compelling! Focus on the main benefit.
        // Good: "Premium Wireless Headphones - 30Hr Battery Life"
        // Bad: "Headphones Model XYZ-123"
        title: 'YOUR PRODUCT NAME HERE',

        // AMAZON ASIN
        // Find this in the Amazon URL: amazon.com/dp/ASIN
        // Example: B08N5WRWNW
        asin: 'B0XXXXXXXXX',

        // PRODUCT DESCRIPTION
        // 2-3 sentences highlighting key benefits
        // Focus on what the customer gets, not technical specs
        description: 'Write a compelling description here. Focus on benefits and how this product solves problems or improves life. Make it emotional and relatable.',

        // CURRENT PRICE
        // Update this regularly or use "Check Amazon for current price"
        price: '$XX.XX',
        priceNote: 'Price may vary. Check Amazon for current price.',

        // PRODUCT RATING
        // Find on Amazon product page
        // Use decimals: 4.5, 4.7, etc.
        rating: 4.5,

        // NUMBER OF REVIEWS
        // Format with commas: '1,234' or '12,847'
        reviewCount: '1,234',

        // IS THIS A PRIME PRODUCT?
        // true = shows Prime badge
        // false = hides Prime badge
        isPrime: true,

        // ============================================
        // KEY FEATURES (3-6 features recommended)
        // ============================================
        features: [
            {
                icon: '✨',  // Use emojis that match the feature
                text: 'Feature 1 - Focus on benefits'
            },
            {
                icon: '🚀',
                text: 'Feature 2 - What makes this special'
            },
            {
                icon: '💪',
                text: 'Feature 3 - Why customers love it'
            },
            {
                icon: '🎯',
                text: 'Feature 4 - Unique selling point'
            },
            {
                icon: '⭐',
                text: 'Feature 5 - Additional benefit'
            },
            {
                icon: '🔥',
                text: 'Feature 6 - Final compelling point'
            }
        ],

        // ============================================
        // PRODUCT IMAGES
        // ============================================
        images: {
            // MAIN IMAGE (Most important!)
            // Use the highest quality image available
            // Right-click on Amazon image → Copy image address
            main: 'https://your-main-product-image-url.jpg',

            // GALLERY IMAGES (3-4 recommended)
            // Show product from different angles or in use
            gallery: [
                'https://gallery-image-1.jpg',
                'https://gallery-image-2.jpg',
                'https://gallery-image-3.jpg',
                'https://gallery-image-4.jpg'
            ]
        }
    },

    // ============================================
    // PAGE METADATA (SEO & Pinterest)
    // ============================================
    meta: {
        // PAGE TITLE (Appears in browser tab and Pinterest)
        // Include keywords and make it click-worthy
        // Format: "Product Name - Key Benefit - Year"
        pageTitle: 'Product Name - Key Benefit - Best Choice 2026',

        // META DESCRIPTION (Appears in search results and Pinterest)
        // 150-160 characters, include keywords
        description: 'Compelling description with keywords that makes people want to click and learn more about this amazing product.',

        // KEYWORDS (For SEO)
        // 5-10 relevant keywords, comma-separated
        keywords: 'keyword1, keyword2, keyword3, product category, brand name',

        // BADGE TEXT (Appears at top of page)
        // Create urgency or highlight special status
        // Examples: '🔥 Trending', '⭐ Best Seller', '💎 Premium Choice'
        badge: '🔥 Trending Product'
    },

    // ============================================
    // CALL-TO-ACTION SETTINGS
    // ============================================
    cta: {
        // PRIMARY BUTTON TEXT
        // Keep it action-oriented and clear
        buttonText: '🛒 View on Amazon',

        // ALTERNATIVE CTA TEXT
        // Used for secondary buttons
        altText: 'Check Latest Price on Amazon'
    },

    // ============================================
    // TRUST SIGNALS (Social Proof)
    // ============================================
    trustSignals: [
        {
            icon: '✓',
            title: 'Amazon Prime',
            text: 'Fast & Free Delivery'
        },
        {
            icon: '⭐',
            title: 'Top Rated',
            text: 'X.X/5 from XX,XXX reviews'  // Update with actual rating
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
// EMOJI SUGGESTIONS FOR FEATURES
// ============================================
/*
Technology: 📱 💻 🖥️ ⌚ 🎧 📷 🔋 ⚡ 🔌 📡
Quality: ⭐ 💎 👑 🏆 ✨ 🌟 💫 ⚡
Performance: 🚀 ⚡ 💪 🔥 ⏱️ 📈 💯
Features: ✅ ✓ 🎯 🎨 🎵 🎬 📸 🔊
Comfort: 😊 💆 🛋️ ☁️ 🌙 💤
Travel: ✈️ 🧳 🌍 🗺️ 🚗 🏖️
Health: 💪 ❤️ 🏃 🧘 💚 🌿
Home: 🏠 🛋️ 🍳 🧹 💡 🔧
Style: 👔 👗 👟 💄 💅 🎨
Value: 💰 💵 💳 🏷️ 🎁 📦
*/

// ============================================
// QUICK CUSTOMIZATION CHECKLIST
// ============================================
/*
Before going live, make sure you've updated:

[ ] Product title (line 18)
[ ] Amazon ASIN (line 24)
[ ] Product description (line 29)
[ ] Current price (line 33)
[ ] Rating and review count (lines 38-42)
[ ] Prime status (line 47)
[ ] All 6 features (lines 54-79)
[ ] Main product image (line 88)
[ ] 4 gallery images (lines 93-96)
[ ] Page title (line 107)
[ ] Meta description (line 112)
[ ] Keywords (line 116)
[ ] Badge text (line 121)
[ ] Trust signals rating (line 139)

After updating, save and commit to GitHub!
*/

// ============================================
// HELPER FUNCTIONS (Don't edit below)
// ============================================

function getAmazonLink() {
    return `https://www.amazon.com/dp/${productConfig.product.asin}?tag=${productConfig.associatesId}`;
}

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

function initializePage() {
    document.title = productConfig.meta.pageTitle;
    document.querySelector('meta[name="description"]').content = productConfig.meta.description;
    document.querySelector('meta[name="keywords"]').content = productConfig.meta.keywords;

    document.querySelector('meta[property="og:title"]').content = productConfig.meta.pageTitle;
    document.querySelector('meta[property="og:description"]').content = productConfig.meta.description;
    document.querySelector('meta[property="og:image"]').content = productConfig.product.images.main;

    document.getElementById('badge').textContent = productConfig.meta.badge;
    document.getElementById('product-title').textContent = productConfig.product.title;
    document.querySelector('h1').textContent = productConfig.product.title;

    document.getElementById('stars').textContent = generateStars(productConfig.product.rating);
    document.getElementById('rating-text').textContent = `${productConfig.product.rating} (${productConfig.product.reviewCount} reviews)`;

    document.getElementById('price').textContent = productConfig.product.price;
    document.getElementById('price-note').textContent = productConfig.product.priceNote;

    document.getElementById('description').textContent = productConfig.product.description;

    document.getElementById('main-image').src = productConfig.product.images.main;
    document.getElementById('main-image').alt = productConfig.product.title;

    if (!productConfig.product.isPrime) {
        document.getElementById('prime-badge').style.display = 'none';
    }

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

    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = '';
    productConfig.product.images.gallery.forEach((image, index) => {
        const galleryDiv = document.createElement('div');
        galleryDiv.className = 'gallery-item';
        galleryDiv.innerHTML = `<img src="${image}" alt="${productConfig.product.title} - Image ${index + 1}">`;
        galleryContainer.appendChild(galleryDiv);
    });

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

    const amazonLink = getAmazonLink();
    document.querySelectorAll('.cta-button').forEach(button => {
        button.href = amazonLink;
        button.textContent = productConfig.cta.buttonText;
    });
}

document.addEventListener('DOMContentLoaded', initializePage);
