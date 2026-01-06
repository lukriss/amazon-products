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
        title: 'Pacifica Dream Moon Spray Perfume',

        // AMAZON ASIN
        asin: 'B09NLDS27D',

        // PRODUCT DESCRIPTION
        description: `Experience a mesmerizing blend of pink rose, velvety sandalwood, and earthy patchouli. Inspired by the full moon, this complex floral-woody fragrance is designed to ground you and ignite feelings of love and gratitude. 100% vegan, cruelty-free, and formulated without harsh chemicals.`,

        // CURRENT PRICE
        price: '$17.97',
        priceNote: 'Price may vary. Check Amazon for current price.',

        // PRODUCT RATING
        rating: 4.5,

        // NUMBER OF REVIEWS
        reviewCount: '5,000+',

        // IS THIS A PRIME PRODUCT?
        isPrime: true,

        // ============================================
        // KEY FEATURES
        // ============================================
        features: [
            {
                icon: '🌹',
                text: 'Mesmerizing Scent - Pink rose, sandalwood, and patchouli'
            },
            {
                icon: '�',
                text: 'Mood Enhancing - Inspired by the full moon to ignite love'
            },
            {
                icon: '🌿',
                text: 'Clean Beauty - 100% Vegan, Cruelty-Free & Phthalate-Free'
            },
            {
                icon: '✨',
                text: 'Aromapower - Neuroscience-backed to elevate your mood'
            },
            {
                icon: '🌎',
                text: 'Eco-Friendly - Recyclable glass bottle, Made in USA'
            },
            {
                icon: '🎒',
                text: 'Travel Ready - 1 fl oz size perfect for on-the-go'
            }
        ],

        // ============================================
        // PRODUCT IMAGES
        // ============================================
        images: {
            // MAIN IMAGE
            main: 'https://m.media-amazon.com/images/I/71ANbTevnPL._SL1500_.jpg',

            // GALLERY IMAGES
            gallery: [
                'https://m.media-amazon.com/images/I/81x2QuiHRFL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81HeY1jgVGL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81udIVdJCfL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/816q54Bvd6L._SL1500_.jpg'
            ]
        }
    },

    // ============================================
    // PAGE METADATA (SEO & Pinterest)
    // ============================================
    meta: {
        // PAGE TITLE
        pageTitle: 'Pacifica Dream Moon Perfume - Floral Woody Scent - Best Budget Choice',

        // META DESCRIPTION
        description: `Discover Pacifica Dream Moon, a mesmerizing floral woody perfume with rose, patchouli, and sandalwood. 100% Vegan & Cruelty-Free. The perfect budget-friendly luxury scent.`,

        // KEYWORDS
        keywords: 'Pacifica perfume, Dream Moon, vegan fragrance, cruelty-free perfume, woody floral scent, patchouli rose perfume, budget perfume, best cheap perfume',

        // BADGE TEXT
        badge: '🔥 Amazon\'s Choice'
    },

    // ============================================
    // CALL-TO-ACTION SETTINGS
    // ============================================
    cta: {
        // PRIMARY BUTTON TEXT
        buttonText: '🛒 View on Amazon',

        // ALTERNATIVE CTA TEXT
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
            text: '4.5/5 Stars on Amazon'
        },
        {
            icon: '�',
            title: 'Cruelty Free',
            text: '100% Vegan & No Animal Testing'
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

[x] Product title (line 18)
[x] Amazon ASIN (line 24)
[x] Product description (line 29)
[x] Current price (line 33)
[x] Rating and review count (lines 38-42)
[x] Prime status (line 47)
[x] All 6 features (lines 54-79)
[x] Main product image (line 88)
[x] 4 gallery images (lines 93-96)
[x] Page title (line 107)
[x] Meta description (line 112)
[x] Keywords (line 116)
[x] Badge text (line 121)
[x] Trust signals rating (line 139)

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
