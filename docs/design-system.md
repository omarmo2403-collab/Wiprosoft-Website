# Design System

## Design Tokens

### Colors

#### Primary
- **Accent:** `#5955FF` (primary brand color, CTAs, interactive elements)

#### Backgrounds
- **Background Primary:** `#0A0A0F` (main page background, deepest layer)
- **Background Secondary:** `#12121A` (card backgrounds, elevated surfaces)
- **Background Tertiary:** `#1A1A25` (hover states, subtle highlights)

#### Text
- **Text Primary:** `#FFFFFF` (headings, primary content)
- **Text Secondary:** `#E4E4E7` (body text, descriptions)
- **Text Muted:** `#94949C` (captions, metadata, placeholders)

#### Semantic
- **Success:** `#10B981`
- **Warning:** `#F59E0B`
- **Error:** `#EF4444`
- **Info:** `#3B82F6`

#### Borders
- **Border Default:** `rgba(255, 255, 255, 0.08)`
- **Border Hover:** `rgba(255, 255, 255, 0.15)`
- **Border Accent:** `rgba(89, 85, 255, 0.5)`

### Typography

#### Font Family
- **Primary:** `Inter` (sans-serif)
- **Fallback Stack:** `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

#### Font Sizes
| Token         | Size    | Line Height | Usage                     |
|---------------|---------|-------------|---------------------------|
| `text-xs`     | 0.75rem | 1rem        | Labels, captions          |
| `text-sm`     | 0.875rem| 1.25rem     | Small body text           |
| `text-base`   | 1rem    | 1.5rem      | Body text                 |
| `text-lg`     | 1.125rem| 1.75rem     | Large body text           |
| `text-xl`     | 1.25rem | 1.75rem     | Subheadings               |
| `text-2xl`    | 1.5rem  | 2rem        | Section subheadings       |
| `text-3xl`    | 1.875rem| 2.25rem     | Section headings          |
| `text-4xl`    | 2.25rem | 2.5rem      | Page headings             |
| `text-5xl`    | 3rem    | 1.1         | Hero subheadings          |
| `text-6xl`    | 3.75rem | 1.1         | Hero headings             |
| `text-7xl`    | 4.5rem  | 1.05        | Display text              |

#### Font Weights
| Token          | Weight | Usage                          |
|----------------|--------|--------------------------------|
| `font-normal`  | 400    | Body text                      |
| `font-medium`  | 500    | Emphasized body, nav links     |
| `font-semibold`| 600    | Subheadings, buttons           |
| `font-bold`    | 700    | Headings                       |
| `font-extrabold`| 800   | Hero headings, display text    |

### Spacing Scale

| Token | Value   | Pixels |
|-------|---------|--------|
| `0`   | 0       | 0px    |
| `1`   | 0.25rem | 4px    |
| `2`   | 0.5rem  | 8px    |
| `3`   | 0.75rem | 12px   |
| `4`   | 1rem    | 16px   |
| `5`   | 1.25rem | 20px   |
| `6`   | 1.5rem  | 24px   |
| `8`   | 2rem    | 32px   |
| `10`  | 2.5rem  | 40px   |
| `12`  | 3rem    | 48px   |
| `16`  | 4rem    | 64px   |
| `20`  | 5rem    | 80px   |
| `24`  | 6rem    | 96px   |
| `32`  | 8rem    | 128px  |

### Border Radius
| Token          | Value    |
|----------------|----------|
| `rounded-sm`   | 0.25rem  |
| `rounded`      | 0.375rem |
| `rounded-md`   | 0.5rem   |
| `rounded-lg`   | 0.75rem  |
| `rounded-xl`   | 1rem     |
| `rounded-2xl`  | 1.5rem   |
| `rounded-full` | 9999px   |

## Component Inventory

### Navigation
- **Navbar** - Fixed top navigation with logo, nav links, and CTA button
- **Mobile Menu** - Full-screen overlay menu for mobile devices
- **Footer** - Multi-column footer with links, social icons, and newsletter signup

### Hero Sections
- **Hero Home** - Full-viewport hero with animated heading, subtitle, and dual CTAs
- **Hero Page** - Smaller page-level hero with breadcrumbs and heading

### Content Sections
- **Service Card** - Icon, title, description, and link with hover animation
- **Portfolio Card** - Image, title, category tag, and overlay with hover effect
- **Blog Card** - Image, date, category, title, excerpt, and read-more link
- **Testimonial Card** - Quote, author name, role, company, and star rating
- **FAQ Accordion** - Expandable question/answer pairs

### UI Elements
- **Button Primary** - Accent background, white text, hover glow effect
- **Button Secondary** - Transparent with border, hover fill effect
- **Button Ghost** - No border, subtle hover background
- **Input Field** - Dark background, border, focus accent glow
- **Textarea** - Multi-line input with same styling as input
- **Badge** - Small tag/label component for categories and tags
- **Divider** - Subtle horizontal rule with gradient fade

### Layout Components
- **Section Wrapper** - Consistent padding and max-width container
- **Grid Layout** - Responsive grid system for cards and content
- **Scroll Animation Wrapper** - Component that handles intersection observer animations
