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
        title: 'Amazon Fire TV Stick 4K Plus (newest model) with AI-powered Fire TV Search',

        // AMAZON ASIN
        // Find this in the Amazon URL: amazon.com/dp/ASIN
        // Example: B08N5WRWNW
        asin: 'B0F7Z4QZTT',

        // PRODUCT DESCRIPTION
        // 2-3 sentences highlighting key benefits
        // Focus on what the customer gets, not technical specs
        description: 'Transform Any TV Into Your Personal Entertainment Hub

Tired of juggling multiple remotes and paying for expensive cable? The Fire TV Stick 4K Plus turns your ordinary TV into a smart entertainment powerhouse that puts you in complete control.

Why You'll Love It:

Instant Gratification: Say goodbye to endless channel surfing - just ask Alexa to find exactly what you want to watch
Cinema-Quality Experience: Enjoy stunning 4K Ultra HD with Dolby Vision that makes every movie night feel special
Smart Home Harmony: Control your lights, check your security cameras, and adjust your thermostat without leaving the couch
Family-Friendly: Access over 400,000 free movies and shows, plus all your favorite streaming services in one place
Future-Proof: Wi-Fi 6 support ensures smooth streaming even when the whole family is online
Whether you're catching up on the latest series, hosting movie night with friends, or helping your parents cut the cable cord, this tiny device delivers big entertainment. Setup takes just minutes, and suddenly that older TV feels brand new again.

Perfect for cord-cutters, tech enthusiasts, or anyone who values convenience and quality entertainment.',

        // CURRENT PRICE
        // Update this regularly or use "Check Amazon for current price"
        price: '$49.99',
        priceNote: 'Price may vary. Check Amazon for current price.',

        // PRODUCT RATING
        // Find on Amazon product page
        // Use decimals: 4.5, 4.7, etc.
        rating: 4.7,

        // NUMBER OF REVIEWS
        // Format with commas: '1,234' or '12,847'
        reviewCount: '98,771',

        // IS THIS A PRIME PRODUCT?
        // true = shows Prime badge
        // false = hides Prime badge
        isPrime: true,

        // ============================================
        // KEY FEATURES (3-6 features recommended) 
            // ============================================
            features: [ { icon: '🎬', text: 'AI-Powered Smart Search - Find movies by actor, plot, even iconic quotes with voice commands' }, { icon: '🌟', text: 'Stunning 4K Ultra HD - Cinematic experience with Dolby Vision, HDR10+, and Dolby Atmos audio' }, { icon: '🚀', text: 'Lightning-Fast Wi-Fi 6 - Smooth streaming even when the whole family is online' }, { icon: '🎮', text: 'Xbox Gaming - Stream hundreds of games with no console required via cloud gaming' }, { icon: '🏠', text: 'Smart Home Control - Manage lights, cameras, and devices with your voice remote' }, { icon: '🆓', text: 'Endless Entertainment - Access 1.8M+ movies/shows plus 400K+ free content' } ] 


        // ============================================
        // PRODUCT IMAGES
        // ============================================
        images: {
            // MAIN IMAGE (Most important!)
            // Use the highest quality image available
            // Right-click on Amazon image → Copy image address
            main: 'https://m.media-amazon.com/images/I/51WtNy0OxLL._AC_SL1500_.jpg',

            // GALLERY IMAGES (3-4 recommended)
            // Show product from different angles or in use
            gallery: [
                'https://m.media-amazon.com/images/I/61DlnQ8q-gL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/816DajgEtzL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71lFUA-mszL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/51U7drCB6UL._AC_SL1500_.jpg'
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
        pageTitle: 'Amazon Fire TV Stick 4K Plus with AI-powered Fire TV Search - Stream over 1.8 million movies and shows, free & live TV - Best Choice 2026',

        // META DESCRIPTION (Appears in search results and Pinterest)
        // 150-160 characters, include keywords
        description: 'Amazon Fire TV Stick 4K Plus with AI-powered search, Wi-Fi 6, Xbox gaming, and 1.8M+ movies. Transform any TV into a smart entertainment hub.
',

        // KEYWORDS (For SEO)
        // 5-10 relevant keywords, comma-separated
        keywords: 'Amazon Fire TV Stick 4K Plus, streaming stick 4K, Fire TV 4K device, Wi-Fi 6 media player, Alexa streaming device, smart TV adapter, HDMI streaming stick, 4K TV stick, Amazon streaming device',

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
            text: '4.7/5 from 98,771 reviews'  // Update with actual rating
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


