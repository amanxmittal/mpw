# Mittal Plastic Works (MPW)

Official website for **Mittal Plastic Works** — a precision plastic injection moulding manufacturer based in Meerut, Uttar Pradesh, India.

## Enterprise Overview
- **Location:** 509, Baghpat Rd, Sabun Godam, Chanderlok, Meerut, Uttar Pradesh 250002
- **Key Offerings:** Precision Plastic Cores (45mm, 6mm, 65mm), Protective Jalli Assemblies, Sports Goods Components, and Custom Injection Mould Tooling.
- **Direct Phone / WhatsApp:** +91-9837075324
- **Email:** mplasticw@gmail.com
- **Live Domain:** https://mittalplasticworks.com

## Architecture & Technology Stack
- **Zero-Build Modern Architecture:** Built with pure modern semantic HTML5, custom CSS design system (`assets/css/modern.css`), and lightweight vanilla JS (`assets/js/modern.js`).
- **Dark Mode Support:** Full dark mode with instant system-preference detection, persistent theme toggle (`localStorage`), zero flash of unstyled content (FOUC), and automatic dual-logo switching (`logo-dark.svg` / `logo-light.svg`).
- **Mobile-First Responsive Layout:** Fluid layouts tested across 320px mobile screens, tablets, and wide monitors. Features collapsible mobile drawer navigation, sticky bottom action bar (Call, WhatsApp, Quote), and horizontally scrollable technical specification tables.
- **Performance:** Sub-second load times, zero legacy dependencies (no jQuery, no external icon fonts, no heavy build pipelines).
- **Typography:** Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono* for technical specifications).
- **Icons:** Inline SVG icons for crisp 60fps rendering without render-blocking icon font downloads.
- **Hosting & Lead Capture:** Statically hosted on **Netlify**. B2B quotation inquiries are captured natively using Netlify Forms (`data-netlify="true"`) with honeypot spam filtering and seamless AJAX submission with loading state.
- **Search & AI SEO (GEO):** Comprehensive Schema.org JSON-LD structured data (`ManufacturingBusiness`, `Product`, `FAQPage`, `BreadcrumbList`), complete Open Graph & Twitter Cards, geotagging for Meerut/UP industrial clusters, `sitemap.xml`, permissive `robots.txt`, and standard `llms.txt` for AI search engines (Perplexity, ChatGPT, Claude).
- **Instant B2B Inquiry:** 1-tap WhatsApp buttons configured across all product cards and mobile quick-action bar (`+91 9837075324`).

## Pages
1. `index.html` - Homepage featuring hero banner, stats strip, interactive product catalog peek, capabilities, founder profile, and B2B buyer FAQ.
2. `about-us.html` - Enterprise history, founder story (Mr. Vineet Kumar), four manufacturing pillars, and facility capacity.
3. `products.html` - Complete technical product catalog with category filter pills, dimensional specifications, comparison table, and custom tooling workflow.
4. `contacts.html` - Direct contact details, operational hours, Netlify RFQ quotation form, and Google Maps location embed.
