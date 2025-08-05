# 🌐 ADmyBRAND AI Suite – Modern SaaS Landing Page & Component System

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/manas-kolaskars-projects/v0-modern-saas-for-admybrand)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/9zJAyAgFmtP)

**Live Demo:**  
🔗 [View Deployed Site on Vercel](https://vercel.com/manas-kolaskars-projects/v0-modern-saas-for-admybrand)  
**Edit on v0.dev:**  
💬 [Continue Building in v0](https://v0.dev/chat/projects/9zJAyAgFmtP)

---

## 📌 Overview

This is a modern, AI-assisted SaaS landing page for **ADmyBRAND AI Suite** — a fictional marketing intelligence platform. The goal was to build a **visually stunning, mobile-first landing page** with reusable components, modern UI patterns, and subtle animations, optimized for real-world SaaS use cases.

---

## 🌟 Features

### 🔖 Landing Page Sections
- **Hero** — Gradient typography, bold headline, CTA, looping demo video  
- **Features** — 6+ cards with icons, titles, and descriptions  
- **Pricing Cards** — 3-tier comparison layout with CTAs  
- **Testimonials Carousel** — Client reviews with photos and roles  
- **FAQ** — Collapsible animated accordions  
- **Footer** — Navigation links, social icons, and contact info  

### ✨ Bonus Features
- **Interactive Pricing Calculator** — Real-time updates based on users/campaigns  
- **Demo Animation/Video** — Embedded Lottie or MP4 playback  
- **Blog/Resources Section** — 3 starter posts with reusable layout  

---

## 🎨 UI/UX Highlights

- **2025 Aesthetic** — Glassmorphism, soft glowing elements, gradient accents  
- **Dark Mode Design** — Inspired by Magic UI style (black/dark gray, vibrant gradients)  
- **Typography** — Inter font with clear hierarchy and large bold headlines  
- **Framer Motion Animations** — Smooth scroll reveals, hover transitions  
- **Responsive Design** — Fully mobile-first using Tailwind breakpoints  
- **Glowing CTAs** — Vibrant buttons with soft outer glows and transitions  

---

## ⚙️ Tech Stack

- **Framework:** Next.js 14+ (App Router) with TypeScript  
- **Styling:** Tailwind CSS (utility-first, responsive)  
- **Animations:** Framer Motion  
- **Backend:** Supabase (for contact form data)  
- **Image Optimization:** Next.js `<Image>` with lazy loading and WebP  
- **Hosting:** Vercel  

---

## 🧩 Component Library

Reusable components (`/components`) include:
- `<Button />`
- `<Card />`
- `<Modal />`
- `<Input />`
- `<Navbar />`
- `<Footer />`
- `<Carousel />`
- `<FAQAccordion />`

Each component is fully typed with clean interfaces and documented in `/components/README.md`.

---

## 📬 Contact Form

- Fields: Name, Email, Message  
- Validation: Required fields + email format  
- Storage: Supabase `contacts` table with schema  
- Status: Fully working with submission and reset handling  

---

## 📈 Performance

- Optimized for fast load and high Lighthouse scores (>90)  
- Lazy-loaded images and non-critical sections  
- CLS (Cumulative Layout Shift) minimized  
- Mobile responsiveness tested across Tailwind breakpoints  

---

## 🤖 AI Usage Report

### AI Tools Used
- **Primary tools:** v0.dev, ChatGPT-4, GitHub Copilot  
- **Key use cases:** Layout generation, responsive design prompts, animation suggestions, component typing

### Sample Prompts
1. “Create a dark glassmorphic SaaS landing page with hero, features, and pricing in Tailwind CSS.”  
2. “Fix invalid @apply usage in Tailwind for backdrop-blur glass cards.”  
3. “Build a reusable pricing calculator component using sliders and real-time totals.”

### AI vs Manual Work Split
- **AI-generated:** ~70% — layout scaffolding, component templates, styling ideas  
- **Manual coding:** ~30% — component integration, Supabase setup, logic tweaks  
- **Customization:** Heavily adapted AI output for visual polish, accessibility, and UX integrity  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/YOUR-USERNAME/modern-saas-admybrand
cd modern-saas-admybrand
```


2. Install dependencies
```bash

npm install
```
3. Run the dev server
```bash

npm run dev
```

### 4. Connect Supabase (optional)
Set up Supabase and connect it via .env.local.

### 📋 Submission Checklist
✅ Beautiful UI with glassmorphism and dark mode

✅ Live deployed Vercel link

✅ Reusable component library

✅ Functional contact form with validation

✅ Bonus features (calculator, blog, animation)

✅ AI usage report included

### 💡 Credits & Inspiration
Design inspired by Magic UI, Dribbble trends, and top SaaS products

Built with AI tools and human polish for a developer-grade handoff
