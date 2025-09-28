# Luxe Jewelry - Elegant Jewelry Showcase Website

A beautiful, modern jewelry showcase website built with Next.js, TypeScript, and Framer Motion. Features elegant animations, responsive design, and a sophisticated product gallery.

## ✨ Features

- **Elegant Design**: Modern, luxury-focused design with gold accents and sophisticated typography
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Responsive Layout**: Fully responsive design that works on all devices
- **Product Showcase**: Interactive product gallery with filtering and detailed modal views
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image optimization

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (version 18 or higher) installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jewellery-shop
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Collection.tsx     # Product collection
│   ├── ProductCard.tsx    # Individual product card
│   ├── ProductModal.tsx   # Product detail modal
│   ├── About.tsx          # About section
│   ├── ContactForm.tsx    # Contact form
│   └── Footer.tsx         # Footer
├── data/                  # Static data
│   └── products.ts        # Product data
└── types/                 # TypeScript types
    └── index.ts           # Type definitions
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.ts`. You can modify the gold and rose color schemes to match your brand.

### Products
Update the product data in `src/data/products.ts` to showcase your own jewelry pieces. Make sure to use high-quality images for the best visual impact.

### Content
Modify the text content in each component to match your brand story and messaging.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1280px and up)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Key Features Explained

### Animations
- Smooth page transitions using Framer Motion
- Hover effects on interactive elements
- Scroll-triggered animations for sections
- Loading states and micro-interactions

### Product Gallery
- Category-based filtering
- Grid and list view modes
- Interactive product cards with hover effects
- Detailed product modal with image carousel

### Contact Form
- Form validation
- Animated submission states
- Responsive design
- Multiple contact options

## 📄 License

This project is for demonstration purposes. Feel free to use it as a starting point for your own jewelry website.

## 🤝 Contributing

If you'd like to contribute to this project, please feel free to submit a pull request or open an issue.

---

Built with ❤️ using Next.js and TypeScript
