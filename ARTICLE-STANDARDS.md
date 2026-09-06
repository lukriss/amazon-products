# 📋 Article & Listicle Page Standards
## Reference Document — Read Before Creating Any New Page

---

## 🧠 Page Format Types

| Type | When to Use | Example Title Format |
|---|---|---|
| **How-To Guide** | 1 main problem, 1–3 supporting products | "How to [Solve X] Without [Common Obstacle]" |
| **Listicle** | 3–7 products as ranked solutions | "5 Best [Products] to [Achieve Result]" |
| **Comparison** | 2–4 products in same category | "[Product A] vs [Product B]: Which One Actually Works?" |
| **Problem-Solution** | Hidden problem most don't know has an easy fix | "The #1 Reason Your [Thing] Keeps Failing (And How to Fix It for $XX)" |

---

## 📥 What to Collect From the User BEFORE Writing

### Required:
- [ ] **Pinterest Title** — the headline the user already has in mind
- [ ] **Short Description** — the user's brief on the angle/problem/solution
- [ ] **Amazon Product URL(s)** — 1 to 5 products
- [ ] **Product Images** — Main image + at least 1 supporting image per product

### Optional (Agent auto-handles if missing):
- [ ] **Blog to link to** — Agent auto-matches niche; skips if no match
- [ ] **Article tone** — defaults to friendly/educational if not specified
- [ ] **Specific steps or tips** — Agent writes them based on product research

---

## ✍️ Required Sections (Every Article Must Have All)

### 1. 📌 Hero Section
- Category badge (e.g. 🏠 Home Guide, 🌿 Eco Living, 💪 Fitness)
- Reading time estimate (calculate as ~200 words/min)
- H1 headline (= Pinterest title)
- Subheadline hook (pain point driven)
- 3 Hero Stats Cards (shocking facts about the problem)
- Pinterest Save button (pre-loaded with article title + URL)

### 2. ⚠️ The Problem Section
- Why this problem matters more than people realize
- Cost, risk, or frustration angle
- 2–4 illustrated problem cards

### 3. 💡 The Solution Section
- Brief intro to the category of tools/products being recommended
- Why this approach is better than the traditional/dangerous method
- What the user will be able to do after reading this

### 4. 🪜 Step-by-Step Guide
- Numbered steps (minimum 5)
- Each step has: Step number, Step Title, 1–2 paragraph explanation
- Relevant product card embedded at the step where it naturally fits
- Pro Tip callout boxes embedded within the steps

### 5. 🛍️ Product Recommendation Cards
Embedded within the guide AND in a dedicated section. Each card must include:
- Product image (main image provided by user)
- Product title (compelling, benefit-focused, not raw Amazon title)
- "Editor's Pick" / "Best Value" / "Budget Pick" badge
- Price note ("Check Amazon for current price")
- Rating stars + review count (use real data where possible)
- 3 key benefit bullets (NOT specs — explain WHY each matters to the reader)
- Amazon affiliate CTA button (with `?tag=chlu02-20`)
- GA4 click event tracking on every button

### 6. 📊 Comparison Table (If 2+ products)
- Columns: Product name, Best For, Price Range, Key Feature, Rating, CTA
- Visual design: alternating rows, highlight "Best Pick" column
- Mobile-scrollable

### 7. 💡 Pro Tips Section
- Minimum 2 callout cards
- Format: tip title + 2–3 sentences
- Style: colored background card, icon, standout from body text

### 8. ❓ FAQ Section
- Minimum 4 questions
- Written as real questions a first-time buyer would ask
- Accordion style (collapsible on click)
- FAQ schema markup (JSON-LD) for Google rich results

### 9. 📖 Blog Backlinks (Only If Relevant)
- Niche matching rules:
  - babysleepoptimizer.com → Baby products, nursery, infant sleep, family wellness
  - bamboofurnituretalk.com → Bamboo, eco home decor, wooden furniture, natural materials
  - citymoveguide.com → Home organization, storage, moving, space-saving, home improvement
  - boatinsurancetalk.com → Outdoor, marine, waterproof gear, boating accessories
- **Skip entirely if no clear match** — never force an irrelevant link
- Must be embedded naturally inside article body text (not just a footer link)

### 10. 🔻 Sticky Bottom CTA Bar
- Shows the #1 recommended product
- Product thumbnail + name + price note + CTA button
- Appears after user scrolls 30% of page
- Dismissible with an X button

### 11. 📈 Analytics & Tracking
- GA4 Measurement ID: `G-SHQBKEX9C2` — always included
- Track: page views + every Amazon CTA click as `click_amazon_cta` event
- Custom event data: product ASIN, product title, article slug

---

## 🎨 Design Standards

### Color Palettes by Niche
| Niche | Primary Gradient | Accent |
|---|---|---|
| Home Improvement | `#1a1a2e` → `#16213e` | `#f0a500` (amber) |
| Eco / Bamboo / Nature | `#1b4332` → `#2d6a4f` | `#95d5b2` (mint) |
| Baby / Family | `#4a0080` → `#7b2d8b` | `#f9c6d0` (blush) |
| Fitness / Sport | `#0f3460` → `#1a5276` | `#e94560` (red) |
| Tech / Gadgets | `#141e30` → `#243b55` | `#4facfe` (blue) |
| General / Default | `#667eea` → `#764ba2` | `#f093fb` (purple) |

### Typography
- Headlines: `Outfit` (Google Fonts) — weight 700–800
- Body: `Inter` — weight 400–600
- Min body size: 16px
- Max reading column width: 760px

### Spacing
- Section padding: 60px top/bottom on desktop, 40px on mobile
- Card gap: 24px
- Paragraph line-height: 1.8

---

## 📁 File & Folder Naming Convention
- Folder name: lowercase kebab-case, descriptive of the topic
  - ✅ `gutter-cleaning-guide`
  - ✅ `baby-sound-machine-tips`
  - ❌ `product1` / `article-jan` / `page2`
- Each article folder contains ONE `index.html` — fully self-contained (embedded CSS + JS)
- No dependency on parent `styles.css` (articles have unique designs per niche)

---

## 🗺️ Sitemap Update (Required Every Time)
- After creating each article, update `/sitemap.xml` with the new URL
- Format: `https://lukriss.github.io/amazon-products/[folder-name]/`
- `changefreq`: weekly
- `priority`: 0.8

---

## ✅ Pre-Launch Quality Checklist

- [ ] Hero headline matches user's Pinterest title exactly
- [ ] All product images load correctly (test URLs before embedding)
- [ ] All Amazon affiliate links include `?tag=chlu02-20`
- [ ] GA4 Measurement ID `G-SHQBKEX9C2` is present
- [ ] Every CTA button has GA4 click event attached
- [ ] Comparison table present if 2+ products
- [ ] FAQ section has at least 4 questions
- [ ] Sticky bottom CTA bar works and is dismissible
- [ ] Pinterest share button pre-loaded with article title
- [ ] Blog backlinks included only if niche-relevant
- [ ] Mobile responsive — tested at 375px width
- [ ] Sitemap.xml updated with new article URL
- [ ] All content is problem-first, solution-focused (NOT a raw product description)

---

## 🔁 How to Invoke This Standards Document

When prompting the agent, you can say:
> *"Reference ARTICLE-STANDARDS.md and create a new article for..."*

Or simply paste the product links and images — the agent will automatically follow all standards in this document.

---

*Last Updated: 2026-09-06 | Repository: lukriss/amazon-products*
