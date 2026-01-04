# 🚀 Quick Start - GitHub Pages Deployment

## Step-by-Step Instructions

### 1️⃣ Create GitHub Account (if needed)
- Go to https://github.com
- Click "Sign up"
- Follow the registration process

### 2️⃣ Create New Repository
1. Click the "+" icon (top right) → "New repository"
2. **Repository name**: `amazon-products` (or your choice)
3. **Description**: "Amazon Associates Landing Pages"
4. Select **Public**
5. ✅ Check "Add a README file"
6. Click **"Create repository"**

### 3️⃣ Upload Files (Easy Method)
1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag these 3 files from your computer:
   - `index.html`
   - `styles.css`
   - `config.js`
3. Click **"Commit changes"**

### 4️⃣ Enable GitHub Pages
1. Click **"Settings"** (top menu in your repository)
2. Click **"Pages"** (left sidebar)
3. Under "Source":
   - Branch: Select **"main"**
   - Folder: Select **"/ (root)"**
4. Click **"Save"**
5. ⏱️ Wait 1-2 minutes

### 5️⃣ Get Your Live URL
Your site will be live at:
```
https://YOUR-USERNAME.github.io/amazon-products/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

## 📝 Customizing Your First Product

### Find Your Product's ASIN
1. Go to the product page on Amazon
2. Look at the URL: `amazon.com/dp/B0XXXXXXXXX`
3. The ASIN is the code after `/dp/` (10 characters)

### Edit config.js
1. In your GitHub repository, click on `config.js`
2. Click the pencil icon ✏️ (Edit)
3. Update these fields:
   ```javascript
   title: 'Your Product Name',
   asin: 'B0XXXXXXXXX',  // Your product's ASIN
   description: 'Why this product is amazing...',
   price: '$XX.XX',
   ```
4. Scroll down and click **"Commit changes"**

### Get Product Images
1. Go to the Amazon product page
2. Right-click on the main image
3. Select "Copy image address"
4. Paste in `config.js` under `images.main`

---

## 🎯 Using with Pinterest

### Create a Pin
1. Use a high-quality product image (vertical format works best)
2. Add text overlay with key benefits
3. Link to your GitHub Pages URL

### Pin Description Template
```
🔥 [Product Name] - [Main Benefit]

✅ Feature 1
✅ Feature 2
✅ Feature 3

💰 Price: $XX.XX
⭐ Rated X.X/5

👉 Click for details!

#keyword1 #keyword2 #keyword3
```

---

## ✅ Checklist

- [ ] Created GitHub account
- [ ] Created new repository
- [ ] Uploaded index.html, styles.css, config.js
- [ ] Enabled GitHub Pages
- [ ] Verified site is live
- [ ] Updated config.js with first product
- [ ] Got product ASIN from Amazon
- [ ] Added product images
- [ ] Created first Pinterest pin
- [ ] Linked pin to landing page

---

## 🎉 You're Ready!

Your landing page is now live and ready to convert Pinterest traffic into Amazon sales!

**Your Associates ID is already configured**: `chlu02-20`

All links will automatically include your affiliate tag. 💰
