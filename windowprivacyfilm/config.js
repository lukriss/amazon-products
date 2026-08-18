// ============================================
// PRODUCT CONFIGURATION TEMPLATE
// ============================================
// Copy this template to create new product pages quickly!

const productConfig = {
    // ============================================
    // YOUR AMAZON ASSOCIATES ID & GOOGLE ANALYTICS ID
    // ============================================
    associatesId: 'chlu02-20',
    gaMeasurementId: 'G-SHQBKEX9C2',

    // ============================================
    // PRODUCT DETAILS
    // ============================================
    product: {
        title: 'One-Way Window Privacy & Heat Blocking Solar Film',
        asin: 'B0FJRLY2NT',
        description: `Transform your home into a private, energy-efficient sanctuary with Upgraded One-Way Window Privacy Film. Designed to reject intense solar heat and block harmful UV rays, this static-cling film creates daytime mirror privacy while reducing glare and lowering indoor cooling bills.`,
        price: '$21.99',
        priceNote: 'Price may vary. Check Amazon for current price.',
        rating: 4.6,
        reviewCount: '2,140',
        isPrime: true,

        features: [
            {
                icon: '🛡️',
                text: 'Daytime One-Way Privacy - Creates a reflective exterior mirror effect while letting bright natural light in'
            },
            {
                icon: '☀️',
                text: 'Superior Heat Blocking - Rejects up to 85% of solar heat to keep indoor spaces cool and cut AC energy costs'
            },
            {
                icon: '🕶️',
                text: '99% UV Ray Protection - Protects your skin and prevents indoor furniture, carpets, and artwork from fading'
            },
            {
                icon: '💧',
                text: 'Static Cling Non-Adhesive - Applies easily with soapy water and leaves zero sticky residue when removed'
            },
            {
                icon: '👁️',
                text: 'Anti-Glare Comfort - Reduces screen reflection and eye strain for TV watching and remote work'
            },
            {
                icon: '🏡',
                text: 'Versatile Glass Tinting - Perfect for living room windows, sliding patio doors, sunrooms, and home offices'
            }
        ],

        images: {
            main: 'https://m.media-amazon.com/images/I/71IqcE1FOKL._AC_SL1500_.jpg',
            gallery: [
                'https://m.media-amazon.com/images/I/71IqcE1FOKL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/719yfIUun-L._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71Pe7pICPYL._AC_SL1275_.jpg'
            ]
        }
    },

    meta: {
        pageTitle: 'One-Way Window Privacy & Heat Blocking Film - Solar Control Tint',
        description: 'Upgraded One-Way Window Privacy Film. Heat blocking, 99% UV rejection, static cling non-adhesive installation for home and office.',
        keywords: 'One-way window privacy film, heat blocking window film, solar window tint, static cling glass film, UV protection window film, B0FJRLY2NT',
        badge: '🔥 Top Solar Protection'
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
            text: '4.6/5 from 2,140 reviews'
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
    ],

    relatedBlogs: [
        {
            title: 'Smart Home Efficiency & Privacy Guides',
            description: 'Discover practical home improvement ideas, energy-saving tips, and space optimization guides for modern living.',
            url: 'https://citymoveguide.com/',
            anchorText: 'Visit City Move Guide →'
        },
        {
            title: 'Home Decor & Interior Accent Tips',
            description: 'Explore eco-friendly interior design ideas and natural home styling inspiration to elevate your living space.',
            url: 'http://bamboofurnituretalk.com/',
            anchorText: 'Visit Bamboo Furniture Talk →'
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
        button.addEventListener('click', () => {
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'click_amazon_cta', {
                    'product_asin': productConfig.product.asin,
                    'product_title': productConfig.product.title
                });
            }
        });
    });

    const blogsContainer = document.getElementById('related-blogs-grid');
    const blogsSection = document.getElementById('related-blogs-section');
    if (blogsContainer && productConfig.relatedBlogs && productConfig.relatedBlogs.length > 0) {
        blogsContainer.innerHTML = '';
        productConfig.relatedBlogs.forEach(blog => {
            const card = document.createElement('div');
            card.className = 'blog-card';
            card.innerHTML = `
                <div>
                    <div class="blog-title">${blog.title}</div>
                    <div class="blog-description">${blog.description}</div>
                </div>
                <a href="${blog.url}" target="_blank" rel="noopener" class="blog-link">${blog.anchorText}</a>
            `;
            blogsContainer.appendChild(card);
        });
    } else if (blogsSection) {
        blogsSection.style.display = 'none';
    }

    // Load Google Analytics dynamically if configured
    if (productConfig.gaMeasurementId && !window.gtag) {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${productConfig.gaMeasurementId}`;
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', productConfig.gaMeasurementId);
    }
}

document.addEventListener('DOMContentLoaded', initializePage);
