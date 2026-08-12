# STCCI Website

Modern, Apple-inspired website for the Sekondi-Takoradi Chamber of Commerce & Industry (STCCI) built with Next.js 16, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Apple-Inspired Design**: Clean, modern UI with smooth animations and glassmorphism effects
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **13 Core Programs**: Comprehensive pages for all STCCI programs and services
- **Performance Optimized**: Built with Next.js 16 and Turbopack for blazing-fast development
- **Accessibility**: WCAG compliant with keyboard navigation support
- **SEO Ready**: Optimized meta tags and semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 16.3.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Apple-inspired animations
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Font**: Inter (Google Fonts)

## 📋 Prerequisites

- Node.js 18.18 or later
- npm or yarn

## 🛠️ Installation & Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
stcci-website/
├── app/
│   ├── about/              # About STCCI page
│   ├── contact/            # Contact page
│   ├── membership/         # Membership information
│   ├── programs/           # Programs overview and individual pages
│   │   ├── chambers-market/
│   │   ├── newsletter/
│   │   ├── scholars-aid/
│   │   ├── bright-start/
│   │   ├── app/
│   │   ├── podcast/
│   │   └── projects/
│   ├── services/           # Services pages
│   │   ├── health-safety/
│   │   ├── mediation/
│   │   ├── geiscon/
│   │   ├── training/
│   │   └── information-centre/
│   ├── layout.tsx         # Root layout with navigation and footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── navigation.tsx     # Header navigation
│   ├── footer.tsx         # Footer component
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Dark/light mode toggle
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Blue (600-800)
- **Secondary**: Purple, Green, Orange, etc. for different programs
- **Background**: White/Gray-50 (light) | Gray-900/950 (dark)
- **Text**: Gray-900 (light) | White (dark)

### Typography
- **Font Family**: Inter
- **Headings**: Bold, 5xl-7xl for hero sections
- **Body**: Regular, text-base to xl

### Animations
- **Blob Animation**: Floating background elements
- **Hover Effects**: Scale and shadow transitions
- **Smooth Scrolling**: Native smooth scroll behavior

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🌐 Pages Overview

### Main Pages
- **Homepage**: Hero section, 13 programs grid, stats, features, CTAs
- **About**: History, vision/mission, values, timeline
- **Programs**: Overview of all 7 programs
- **Membership**: Benefits, pricing plans, application
- **Contact**: Contact information, form, map

### Program Pages (7)
1. **WESCCU Newsletter**: Monthly business intelligence
2. **STCCI App**: Mobile platform for business management
3. **Tertiary Scholars' Aid**: Scholarship program (120 students)
4. **Bright Start**: Youth entrepreneurship program
5. **ChambersMarket**: Digital marketplace (fully implemented)
6. **STCCI Podcast**: Business podcast series
7. **Business Projects**: Strategic development initiatives

### Service Pages (6)
1. **Health & Safety**: Workplace safety services
2. **Mediation**: Business dispute resolution
3. **GEISCon**: Annual safety conference
4. **Training & Development**: 50+ training programs
5. **Information Centre**: Business intelligence hub

## 🎯 Key Features by Page

### Homepage
- Animated hero with gradient blobs
- 13 program cards with icons and descriptions
- Key statistics display
- Feature highlights
- Multiple CTAs

### ChambersMarket Page
- Product/service showcase
- Pricing plans (Basic, Premium, Enterprise)
- Features grid
- Statistics counter
- App download CTAs

## 🎨 Theme Customization

The website supports automatic dark/light theme switching. Custom theme colors are defined in `globals.css` using CSS variables.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design.

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Build for Production
```bash
npm run build
npm start
```

## 📄 License

Copyright © 2026 Sekondi-Takoradi Chamber of Commerce & Industry. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: info@stcci.org.gh
- Phone: +233 XXX XXX XXX

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Inspired by Apple's design philosophy

---

**Built with ❤️ for STCCI - Empowering Business Growth in Ghana's Western Region**
