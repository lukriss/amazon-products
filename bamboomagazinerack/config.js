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
        title: 'Giantex Foldable Bamboo Magazine Rack with Adjustable Positions',
        asin: 'B0H7HQZC42',
        description: `Keep your living room, office, or reading nook organized and stylish with the Giantex Foldable Bamboo Magazine Rack. Crafted from 100% natural, eco-friendly bamboo with a smooth waterproof finish, this multi-tier organizer pops open in seconds with no tools required and folds flat effortlessly for space-saving storage.`,
        price: '$45.99',
        priceNote: 'Price may vary. Check Amazon for current price.',
        rating: 4.7,
        reviewCount: '1,482',
        isPrime: true,

        features: [
            {
                icon: '🌱',
                text: '100% Natural Bamboo Construction - Eco-friendly, highly durable, and features a smooth waterproof protective finish'
            },
            {
                icon: '📦',
                text: 'Instant Tool-Free Setup - Pops open and locks securely into place in seconds with zero assembly required'
            },
            {
                icon: '🔄',
                text: 'Foldable Space-Saving Design - Effortlessly collapses flat for quick storage behind doors or under furniture'
            },
            {
                icon: '📐',
                text: 'Multi-Tier Adjustable Pockets - Multi-tier design holds magazines, books, brochures, and documents neatly'
            },
            {
                icon: '🛡️',
                text: 'Stable Base with Floor Protection - Non-slip feet maintain steady placement while protecting flooring from scratches'
            },
            {
                icon: '✨',
                text: 'Modern Aesthetic Appeal - Warm natural wood aesthetic seamlessly elevates modern, bohemian, and rustic decor'
            }
        ],

        images: {
            main: 'https://m.media-amazon.com/images/I/716lfaCkPHL._AC_SL1500_.jpg',
            gallery: [
                'https://m.media-amazon.com/images/I/716lfaCkPHL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81VAXVOjbhL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81VZjDg5c0L._AC_SL1500_.jpg'
            ]
        }
    },

    meta: {
        pageTitle: 'Giantex Foldable Bamboo Magazine Rack - Adjustable Multi-Tier Organizer',
        description: 'Giantex Foldable Bamboo Magazine Rack. Sturdy multi-tier magazine holder with adjustable positions and instant tool-free setup.',
        keywords: 'Giantex bamboo magazine rack, foldable magazine holder, wooden brochure rack, eco-friendly magazine stand, B0H7HQZC42',
        badge: '🔥 Trending Home Decor'
    },

    cta: {
        buttonText: '🛒 View on Amazon',
        altText: 'Check Latest Price on Amazon'
    },

    trustSignals: [
        {
            icon: '✓',
            title: 'Amazon Prime',
            text: 'Fast & Free Delivery'
        },
        {
            icon: '⭐',
            title: 'Top Rated',
            text: '4.7/5 from 1,482 reviews'
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
