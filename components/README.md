# ADmyBRAND Components Documentation

This document provides comprehensive documentation for all reusable components in the ADmyBRAND AI Suite landing page.

## UI Components

### Button

A versatile button component with multiple variants and states.

**Props:**
- `variant?: 'primary' | 'secondary' | 'outline' | 'ghost'` - Button style variant
- `size?: 'sm' | 'md' | 'lg'` - Button size
- `loading?: boolean` - Shows loading spinner when true
- `children: React.ReactNode` - Button content
- All standard HTML button attributes

**Usage:**
\`\`\`tsx
<Button variant="primary" size="lg" loading={isSubmitting}>
  Submit Form
</Button>
\`\`\`

### Card

A flexible card container with glassmorphism effects and hover animations.

**Props:**
- `glass?: boolean` - Applies glassmorphism effect
- `hover?: boolean` - Enables hover animations (default: true)
- `children: React.ReactNode` - Card content
- All standard HTML div attributes

**Usage:**
\`\`\`tsx
<Card glass hover className="p-6">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
\`\`\`

### Input

A styled input field with label and error state support.

**Props:**
- `label?: string` - Input label text
- `error?: string` - Error message to display
- All standard HTML input attributes

**Usage:**
\`\`\`tsx
<Input
  label="Email Address"
  type="email"
  error={errors.email}
  placeholder="Enter your email"
  required
/>
\`\`\`

### Modal

A modal dialog with backdrop blur and smooth animations.

**Props:**
- `isOpen: boolean` - Controls modal visibility
- `onClose: () => void` - Function called when modal should close
- `title?: string` - Optional modal title
- `children: React.ReactNode` - Modal content

**Usage:**
\`\`\`tsx
<Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Demo Video">
  <video controls>
    <source src="/demo.mp4" type="video/mp4" />
  </video>
</Modal>
\`\`\`

### Carousel

An auto-playing carousel with navigation controls and indicators.

**Props:**
- `children: React.ReactNode[]` - Array of carousel slides
- `autoPlay?: boolean` - Enable auto-play (default: true)
- `interval?: number` - Auto-play interval in ms (default: 5000)
- `showDots?: boolean` - Show dot indicators (default: true)
- `showArrows?: boolean` - Show navigation arrows (default: true)

**Usage:**
\`\`\`tsx
<Carousel autoPlay interval={6000}>
  {testimonials.map((testimonial, index) => (
    <TestimonialCard key={index} testimonial={testimonial} />
  ))}
</Carousel>
\`\`\`

### FAQAccordion

An accordion component for frequently asked questions.

**Props:**
- `items: FAQItem[]` - Array of FAQ items with question and answer

**FAQItem Interface:**
\`\`\`tsx
interface FAQItem {
  question: string
  answer: string
}
\`\`\`

**Usage:**
\`\`\`tsx
<FAQAccordion items={faqItems} />
\`\`\`

## Layout Components

### Navbar

A responsive navigation bar with mobile menu and scroll effects.

**Features:**
- Sticky positioning with backdrop blur on scroll
- Mobile-responsive hamburger menu
- Smooth scroll to anchor links
- Brand logo with hover animation

**Usage:**
\`\`\`tsx
<Navbar />
\`\`\`

### Footer

A comprehensive footer with links, contact information, and social media.

**Features:**
- Multi-column layout with organized link sections
- Contact information with icons
- Social media links with hover animations
- Responsive design

**Usage:**
\`\`\`tsx
<Footer />
\`\`\`

## Section Components

### Hero

The main hero section with video background and call-to-action.

**Features:**
- Full-screen video background with overlay
- Animated text and statistics
- Dual CTA buttons
- Modal integration for demo video

### Features

A grid layout showcasing AI tools and capabilities.

**Features:**
- 8 feature cards with icons and descriptions
- Staggered animations on scroll
- Gradient icon backgrounds
- Hover effects

### Pricing

Interactive pricing section with plan comparison.

**Features:**
- 3 pricing tiers with feature lists
- Annual/monthly billing toggle
- Popular plan highlighting
- Responsive card layout

### Testimonials

Customer testimonials in a carousel format.

**Features:**
- Auto-rotating testimonial carousel
- Customer photos and ratings
- Statistics section
- Smooth transitions

### FAQ

Collapsible FAQ section with smooth animations.

**Features:**
- Expandable question/answer pairs
- Smooth height animations
- Icon state changes
- Glassmorphism styling

### ContactForm

A validated contact form with Supabase integration.

**Features:**
- Form validation with error states
- Loading states during submission
- Success confirmation
- Responsive design

### PricingCalculator

Interactive pricing calculator with real-time updates.

**Features:**
- Slider controls for users and content
- Toggle switches for add-ons
- Radio buttons for support levels
- Real-time price calculation
- Sticky summary card

## Styling Guidelines

### Color Palette
- Primary: Blue (#2563eb) to Purple (#7c3aed)
- Secondary: Orange (#ea580c) to Red (#dc2626)
- Neutral: Gray scale from #f9fafb to #111827

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold weights (600-700)
- Body: Regular weight (400)
- Gradient text for emphasis

### Effects
- Glassmorphism: `bg-white/10 backdrop-blur-md border border-white/20`
- Hover animations: Scale and translate transforms
- Smooth transitions: 200-300ms duration
- Rounded corners: 0.75rem (12px) default

## Performance Considerations

### Image Optimization
- Use Next.js Image component for automatic optimization
- WebP format support
- Lazy loading by default
- Proper sizing and aspect ratios

### Animation Performance
- Use Framer Motion for smooth animations
- Implement `viewport={{ once: true }}` for scroll animations
- Avoid animating expensive properties
- Use transform and opacity for best performance

### Code Splitting
- Components are automatically code-split by Next.js
- Lazy load heavy components when possible
- Use dynamic imports for non-critical features

## Accessibility

### ARIA Support
- Proper ARIA labels and roles
- Screen reader announcements for dynamic content
- Keyboard navigation support
- Focus management in modals

### Color Contrast
- WCAG AA compliant color combinations
- Sufficient contrast ratios
- Alternative text for images
- Semantic HTML structure

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- React 18+
- Next.js 14+
- Framer Motion 10+
- Tailwind CSS 3+
- Lucide React (icons)
- TypeScript 5+
\`\`\`

Finally, let's add the package.json with all dependencies:
