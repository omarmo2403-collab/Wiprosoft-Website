# Wiprosoft Design System

A comprehensive design guide for the Wiprosoft website. This document provides all design specifications, components, and guidelines for maintaining consistency across the platform.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Animation & Motion](#animation--motion)
6. [Icons & Imagery](#icons--imagery)
7. [Best Practices](#best-practices)

---

## Color Palette

### Brand Colors

| Name | Hex Code | RGB | Usage |
|------|----------|-----|-------|
| Primary | `#03A3B2` | rgb(3, 163, 178) | CTAs, highlights, accents |
| Primary Light | `#04BFD0` | rgb(4, 191, 208) | Hover states, light backgrounds |
| Primary Dark | `#028A97` | rgb(2, 138, 151) | Pressed states, dark backgrounds |
| Secondary | `#172F56` | rgb(23, 47, 86) | Headings, main text, dark elements |
| Secondary Light | `#1E3D6F` | rgb(30, 61, 111) | Alternative dark tones |

### Neutral Colors

| Name | Hex Code | RGB | Usage |
|------|----------|-----|-------|
| Surface (White) | `#FFFFFF` | rgb(255, 255, 255) | Primary background |
| Surface Alt | `#F7F9FA` | rgb(247, 249, 250) | Secondary background, alternating sections |
| Surface Card | `#FFFFFF` | rgb(255, 255, 255) | Card backgrounds |

### Text Colors

| Name | Hex Code | RGB | Usage |
|------|----------|-----|-------|
| Text Heading | `#172F56` | rgb(23, 47, 86) | Headings (h1-h6) |
| Text Body | `#475569` | rgb(71, 85, 105) | Body text, paragraphs |
| Text Muted | `#94A3B8` | rgb(148, 163, 184) | Secondary text, metadata |

### Borders

| Name | Hex Code | RGB | Usage |
|------|----------|-----|-------|
| Border | `#E8ECF0` | rgb(232, 236, 240) | Standard borders, dividers |
| Border Light | `#F1F4F7` | rgb(241, 244, 247) | Subtle borders, card borders |

### Footer Colors

| Name | Hex Code | RGB | Usage |
|------|----------|-----|-------|
| Footer Background | `#172F56` | rgb(23, 47, 86) | Footer bg |
| Footer Text | `#CBD5E1` | rgb(203, 213, 225) | Footer body text |
| Footer Heading | `#FFFFFF` | rgb(255, 255, 255) | Footer headings |
| Footer Muted | `#94A3B8` | rgb(148, 163, 184) | Footer secondary text |

### Gradients

- **Brand Gradient**: `linear-gradient(135deg, #03A3B2 0%, #172F56 100%)`
- **Hero Gradient**: `linear-gradient(135deg, #04BFD0, #03A3B2, #1E3D6F, #172F56, #028A97, #03A3B2)`

---

## Typography

### Font Family

- **Primary Font**: Inter
- **Fallback Fonts**: System UI, sans-serif

### Font Sizes

| Size | Desktop | Mobile | Use Case |
|------|---------|--------|----------|
| H1 | 48px | 32px | Page titles, hero sections |
| H2 | 36px | 28px | Section headers |
| H3 | 30px | 24px | Subsection headers |
| H4 | 24px | 20px | Cards, blocks |
| Body | 16px | 14px | Paragraph text |
| Small | 14px | 13px | Secondary text, captions |
| Tiny | 12px | 12px | Labels, metadata |

### Font Weights

- **Regular**: 400
- **Medium**: 500
- **Bold**: 700

### Line Heights

- **Headings**: 1.2
- **Body**: 1.6
- **Compact**: 1.4

### Text Hierarchy

```
H1: Bold, Secondary (#172F56), 48px/36px
H2: Bold, Secondary, 36px/28px
H3: Bold, Secondary, 30px/24px
Body: Regular, Text Body (#475569), 16px
Small: Regular, Text Muted (#94A3B8), 14px
```

---

## Spacing & Layout

### Space Scale

| Name | Value | Usage |
|------|-------|-------|
| xs | 4px | Small gaps, compact spacing |
| sm | 8px | Close elements |
| md | 12px | Standard spacing |
| lg | 16px | Component spacing |
| xl | 24px | Section spacing |
| 2xl | 32px | Large spacing |
| 3xl | 48px | Section padding |
| 4xl | 64px | Large padding |

### Container

- **Max Width**: 1280px (80rem)
- **Horizontal Padding**: 16px (sm), 24px (md), 32px (lg)
- **Horizontal Gap**: 12px (sm), 16px (md), 24px (lg)

### Section Spacing

- **Section Padding Top**: 128px (32rem)
- **Section Padding Bottom**: 48px (12rem)
- **Small Section Padding**: 48px (12rem) top/bottom

### Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1023px (sm:)
- **Desktop**: ≥ 1024px (lg:)

---

## Components

### Button

**Variants:**
- **Primary** (default): Teal background, white text, hover to dark teal
- **Secondary**: Border only, secondary text, hover with light background
- **Ghost**: Text only, muted color, hover to secondary

**Sizes:**
- **Small**: `px-4 py-2 text-sm`
- **Medium** (default): `px-6 py-3 text-base`
- **Large**: `px-8 py-4 text-lg`

**Styling:**
- Border Radius: Full (rounded-full)
- Transition: All properties, 200ms
- Font Weight: Medium

**Example:**
```tsx
<Button href="/contact" variant="primary" size="md">
  Start a Project
</Button>
```

### Badge

**Styling:**
- Background: Accent color at 10% opacity (bg-accent/10)
- Text Color: Accent color
- Border Radius: Full circle (rounded-full)
- Padding: `px-3 py-1`
- Font Size: Extra small
- Font Weight: Medium

**Example:**
```tsx
<Badge>Our Services</Badge>
```

### Card

**Styling:**
- Border Radius: 16px (rounded-2xl)
- Border: 1px light border (border-border-light)
- Background: Surface card (#FFFFFF)
- Padding: 24px (p-6)
- Shadow: Small shadow
- Hover: Shadow increases, border darkens (optional)

**Example:**
```tsx
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### Section Header

**Styling:**
- Optional Badge: Accent background, accent text
- Title: Bold, secondary color, 48px → 40px → 28px (lg → md → sm)
- Description: Text muted, 18px, max-width 2xl
- Margin Bottom: 40px (lg), 56px (md), 10px (base)

**Alignment Options:**
- `align="center"` (default): Centered text
- `align="left"`: Left-aligned text

**Example:**
```tsx
<SectionHeader 
  label="Services" 
  title="Solutions That Drive Growth"
  description="From strategy to execution..."
  align="center"
/>
```

### Page Header

**Styling:**
- Section padding: pt-32 pb-14
- Center wrapper: max-w-3xl mx-auto text-center
- Badge: Accent text, uppercase, small, medium weight
- Title: Bold, secondary, responsive sizes (h1)
- Description: Text muted, large text, max-width 2xl

**Example:**
```tsx
<PageHeader 
  label="Our Services" 
  title="Solutions That Drive Growth"
  description="From strategy to execution..."
/>
```

### Accordion

**Styling:**
- Smooth open/close transitions
- Border separators between items
- Hover effects
- Chevron icon rotation

### Animated Section

**Styling:**
- Fade in on scroll
- Stagger children animations

### Section Wrapper

**Container Utility:**
- Max width constraint
- Horizontal padding responsive to breakpoints
- Flex layout with gaps

---

## Animation & Motion

### Timing

- **Duration**: 600ms (0.6s) for most animations
- **Easing**: easeOut for natural movement
- **Delay**: Staggered at 100ms intervals

### Animation Presets

#### Fade Up
```
Hidden: opacity 0, translate Y 30px
Visible: opacity 1, translate Y 0
Duration: 600ms
```

#### Fade In
```
Hidden: opacity 0
Visible: opacity 1
Duration: 600ms
```

#### Slide In Left
```
Hidden: opacity 0, translate X -30px
Visible: opacity 1, translate X 0
Duration: 600ms
```

#### Slide In Right
```
Hidden: opacity 0, translate X 30px
Visible: opacity 1, translate X 0
Duration: 600ms
```

#### Scale on Hover
```
Hover: scale 1.02
Tap: scale 0.98
Transition: Spring (stiffness 300, damping 20)
```

#### Stagger Container
```
Trigger animation on children with 100ms stagger
Delay: 100ms before animation starts
```

### Special Effects

#### Hero Gradient Animation
- **Duration**: 18 seconds
- **Type**: Infinite loop
- **Effect**: Flowing gradient background position shift

#### Marquee (Scrolling Slider)
- **Duration**: 30 seconds
- **Type**: Linear infinite
- **Effect**: Continuous horizontal scroll

---

## Icons & Imagery

### Icon Sources

- **Primary Icon Library**: Lucide React
- **Common Icons Used**:
  - Code (development)
  - BarChart3 (analytics)
  - Palette (design)
  - Lightbulb, Shield, Users, Target (values)
  - And more as needed

### Image Formats

- **Fallback Formats**: AVIF, WebP
- **Directories**:
  - `/public/images/blog/` - Blog post images
  - `/public/images/portfolio/` - Project screenshots
  - `/public/images/team/` - Team photos

### Image Optimization

- Lazy loading enabled
- Responsive sizing via Next.js Image component
- Format optimization (AVIF > WebP > PNG/JPG)

---

## Best Practices

### Color Usage

1. **Primary Color (#03A3B2)**: Use for CTAs, links, active states
2. **Secondary Color (#172F56)**: Use for headings and important text
3. **Text Muted (#94A3B8)**: Use for secondary information, captions
4. **Maintain Contrast**: Ensure 4.5:1 contrast ratio for accessibility
5. **Gradients**: Use brand gradient for hero sections only

### Typography

1. **Hierarchy**: Use proper heading levels (h1 → h6)
2. **Line Length**: Keep paragraphs to 80 characters max for readability
3. **Font Sizes**: Use defined sizes from scale, don't create custom sizes
4. **Weight Balance**: Don't mix weights too frequently
5. **Line Height**: Maintain proper spacing for body text (1.6)

### Spacing

1. **Consistency**: Always use the space scale, avoid arbitrary values
2. **Vertical Rhythm**: Align spacing to 4px grid where possible
3. **Breathing Room**: Don't crowd elements; use adequate padding
4. **Responsive**: Always consider mobile spacing (usually 50% of desktop)

### Components

1. **Variants**: Use predefined button variants; don't create custom styles
2. **Reusability**: Use existing components from UI folder
3. **Props**: Leverage component props for customization
4. **Consistency**: Maintain visual consistency across pages

### Animations

1. **Subtlety**: Keep animations smooth and not distracting
2. **Performance**: Use GPU-accelerated transforms (scale, opacity)
3. **Duration**: Stick to 400-600ms for most animations
4. **Accessibility**: Respect `prefers-reduced-motion` setting
5. **Purpose**: Each animation should enhance UX, not detract

### Accessibility

1. **Color Alone**: Don't rely on color alone to convey meaning
2. **Contrast**: Maintain minimum 4.5:1 contrast for text
3. **Focus States**: All interactive elements must have visible focus
4. **Alt Text**: Always provide descriptive alt text for images
5. **Semantic HTML**: Use proper heading and semantic elements

### Responsive Design

1. **Mobile First**: Design for mobile, then enhance for larger screens
2. **Touch Targets**: Minimum 44px × 44px for interactive elements
3. **Flexible Layouts**: Use Flexbox/Grid for responsive layouts
4. **Breakpoints**: Use defined breakpoints (sm: 640px, lg: 1024px)
5. **Testing**: Test on real devices, not just browser DevTools

---

## Usage Examples

### Creating a New Section

```tsx
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function NewSection() {
  return (
    <section className="py-16 lg:py-20">
      <SectionWrapper>
        <SectionHeader 
          label="Label"
          title="Section Title"
          description="Brief description"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-2xl font-bold text-secondary">Title</h3>
            <p className="mt-4 text-text-muted">Description</p>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button href="/contact">Get Started</Button>
        </div>
      </SectionWrapper>
    </section>
  );
}
```

### Using Animations

```tsx
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function AnimatedContent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h2 variants={fadeUp}>Title</motion.h2>
      <motion.p variants={fadeUp}>Content</motion.p>
    </motion.div>
  );
}
```

---

## File Structure

```
src/
├── components/
│   ├── ui/              # Reusable components (Button, Card, etc.)
│   ├── layout/          # Layout components (Navbar, Footer)
│   └── sections/        # Page-specific sections
├── lib/
│   ├── animations.ts    # Animation presets
│   └── utils.ts         # Utility functions
├── app/
│   └── globals.css      # Global styles & design tokens
└── data/                # Data files (services, blog, etc.)
```

---

## Contact

For design system questions, updates, or clarifications, please refer to the main project documentation or contact the design lead.

---

**Last Updated**: March 14, 2026
**Version**: 1.0
