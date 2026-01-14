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
        title: 'BLOIMP Essential Oil Diffuser - Unique Jellyfish Mist & Sound Pickup - 250ML',

        // AMAZON ASIN
        asin: 'B0DYV256JG',

        // PRODUCT DESCRIPTION
        description: `Elevate your home ambiance with the BLOIMP Jellyfish Diffuser. Featuring a unique 5-nozzle mist dispersion that mimics jellyfish movement and sound-activated lighting, it's the perfect blend of aromatherapy and visual art for any room.`,

        // CURRENT PRICE
        price: '$39.99',
        priceNote: 'Price may vary. Check Amazon for current price.',

        // PRODUCT RATING
        rating: 4.2,

        // NUMBER OF REVIEWS
        reviewCount: '155',

        // IS THIS A PRIME PRODUCT?
        isPrime: true,

        // ============================================
        // KEY FEATURES
        // ============================================
        features: [
            {
                icon: '🌊',
                text: 'Unique Jellyfish Mist: 5-nozzle biomimetic design mimics soothing jellyfish movement.'
            },
            {
                icon: '🎵',
                text: 'Sound Pickup Tech: Mist output synchronizes with ambient music and sounds for a dynamic experience.'
            },
            {
                icon: '🌈',
                text: '7-Color Mood Lighting: Customizable colors with independent brightness control to match your vibe.'
            },
            {
                icon: '🤫',
                text: 'Whisper-Quiet Operation: Operates at just 32dB, perfect for peaceful sleep, work, or meditation.'
            },
            {
                icon: '🛡️',
                text: 'Safe & Leakproof: Auto power-off and food-grade PP materials ensure safety for the whole family.'
            },
            {
                icon: '🎮',
                text: 'Remote Control: Easy operation of timer (4H/8H), colors, and mist modes from across the room.'
            }
        ],

        // ============================================
        // PRODUCT IMAGES
        // ============================================
        images: {
            main: 'https://m.media-amazon.com/images/I/71zrdLSX5ML._AC_SY450_.jpg',

            gallery: [
                'https://m.media-amazon.com/images/I/41I1WefhpfL.jpg',
                'https://m.media-amazon.com/images/I/51Iw7mZJTML.jpg',
                'https://m.media-amazon.com/images/I/41UozzftFjL.jpg',
                'https://m.media-amazon.com/images/I/514La1H+nRL.jpg'
            ]
        }
    },

    // ============================================
    // PAGE METADATA (SEO & Pinterest)
    // ============================================
    meta: {
        pageTitle: 'BLOIMP Jellyfish Essential Oil Diffuser - Unique Sound Pickup Aroma Humidifier',

        description: `Experience the mesmerizing BLOIMP Jellyfish Diffuser. Features sound-activated lighting, 5-nozzle mist dispersion, and whisper-quiet operation. Perfect for any home or office.`,

        keywords: 'jellyfish diffuser, essential oil diffuser, aromatherapy humidifier, sound pickup diffuser, BLOIMP, home decor gift, relaxation',

        badge: '⭐ Highly Rated'
    },

    // ============================================
    // CALL-TO-ACTION SETTINGS
    // ============================================
    cta: {
        buttonText: '🛒 View on Amazon',
        altText: 'Check Latest Price'
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
            text: '4.2/5 from 155 reviews'
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
