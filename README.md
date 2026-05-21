# Solarize Digitech - Next.js Website

A modern, professional website built with Next.js 14, TypeScript, and Tailwind CSS featuring comprehensive digital transformation solutions.

## 🚀 Features

### Technology Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icon library

### Design Features
- ✨ Modern, clean UI inspired by BCG's professional design
- 🎨 Custom color palette and design tokens
- 📱 Fully responsive across all devices
- ⚡ Optimized performance and SEO
- 🎭 Smooth animations and transitions
- ♿ Accessible components

### Solutions Covered
1. **AI & Data Analytics** - Machine learning, predictive analytics, NLP, computer vision
2. **Cloud Solutions** - AWS, Azure, GCP migration and management
3. **Enterprise Solutions** - ERP, CRM, custom enterprise software
4. **IoT & Digital Engineering** - Industrial IoT, smart devices, connected systems
5. **Digital Signage** - PADS4 platform, display solutions, content services

### Industries Served
- Hospitality
- Retail
- Healthcare
- Corporate
- Manufacturing

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Steps

1. **Extract the project**
```bash
cd solarize-digitech
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
solarize-digitech/
├── app/
│   ├── layout.tsx                 # Root layout with fonts
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles
│   └── solutions/
│       ├── ai-analytics/
│       │   └── page.tsx          # AI & Analytics solution page
│       ├── cloud/
│       │   └── page.tsx          # Cloud solutions page
│       ├── enterprise/
│       │   └── page.tsx          # Enterprise solutions page
│       ├── iot/
│       │   └── page.tsx          # IoT solutions page
│       └── digital-signage/
│           └── page.tsx          # Digital signage page
├── components/
│   ├── Navigation.tsx            # Main navigation with dropdowns
│   ├── Footer.tsx                # Site footer
│   ├── ServiceCard.tsx           # Reusable service card
│   ├── IndustryCard.tsx          # Industry card component
│   ├── StatsSection.tsx          # Statistics display
│   └── InsightsPreview.tsx       # Blog/insights preview
├── public/                        # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
├── next.config.js                 # Next.js configuration
└── package.json                   # Dependencies

```

## 🎨 Design System

### Colors
- **Primary**: Navy blue (#0A2540) - Professional, trustworthy
- **Secondary**: Ocean blue (#1E5A8E) - Technology, innovation
- **Accent**: Coral (#FF6B35) - Energy, action
- **Neutral**: Grays for text and backgrounds

### Typography
- **Headings**: Playfair Display (Serif) - Elegant, professional
- **Body**: DM Sans - Clean, modern, readable

### Components
- Custom buttons with hover effects
- Card components with shadows and animations
- Gradient backgrounds
- Glass morphism effects

## 📄 Pages to Create

You can extend this by creating:
- `/about` - Company information
- `/contact` - Contact form
- `/insights` - Blog/resources
- `/industries/*` - Individual industry pages
- Additional solution pages

## 🛠️ Customization

### Update Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
  accent: { /* your colors */ },
}
```

### Add New Solutions
1. Create folder: `app/solutions/your-solution/`
2. Add `page.tsx` with your content
3. Update navigation in `components/Navigation.tsx`

### Modify Content
- Edit `app/page.tsx` for homepage
- Update component props in solution pages
- Customize text, stats, and features

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms
- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Use hosting service
- **Docker**: Create Dockerfile for containerization

## 📝 Best Practices

1. **Performance**
   - Images optimized with Next.js Image component
   - Lazy loading for below-fold content
   - Code splitting automatic with App Router

2. **SEO**
   - Metadata in each page
   - Semantic HTML
   - Proper heading hierarchy

3. **Accessibility**
   - ARIA labels where needed
   - Keyboard navigation support
   - Color contrast ratios meet WCAG standards

## 🔄 Future Enhancements

- [ ] Add blog/CMS integration (Contentful, Sanity)
- [ ] Implement contact form with backend
- [ ] Add case studies section
- [ ] Create client testimonials carousel
- [ ] Integrate analytics (Google Analytics, Mixpanel)
- [ ] Add search functionality
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle

## 📞 Support

For questions or issues:
- Email: info@solarizedigitech.com
- Website: https://solarizedigitech.com

## 📄 License

Proprietary - Solarize Digitech © 2026

---

Built with ❤️ by Solarize Digitech
