# Caldot Global Services Website

A modern, professional corporate website for Caldot Global Services built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design for all devices
- **Fast Performance**: Optimized for speed with Next.js
- **SEO Optimized**: Built-in SEO features and metadata
- **Accessible**: WCAG-compliant design and navigation
- **Interactive**: Smooth animations and transitions
- **Professional**: Corporate branding with Zodiac Blue (#0B1C3F) and Orange (#FFA500)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React-based)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Formspree integration
- **SEO**: Next SEO
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
caldot-web/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── projects/          # Projects page
│   ├── insights/          # Blog/Insights page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Footer component
│   └── sections/          # Page sections
│       ├── HeroSection.tsx
│       ├── ServicesOverview.tsx
│       ├── AboutSection.tsx
│       ├── WhyChooseUs.tsx
│       ├── CaldotCareBanner.tsx
│       ├── ProjectsPreview.tsx
│       └── NewsletterSignup.tsx
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Design System

### Colors
- **Primary**: Zodiac Blue (#0B1C3F)
- **Accent**: Orange (#FFA500)
- **Secondary**: Navy Blue (#1E3A8A)
- **Neutral**: Light Gray (#F8FAFC)

### Typography
- **Headings**: Poppins (Bold, Clean)
- **Body**: Lato (Light, Readable)

### Components
- **Buttons**: Rounded edges with hover effects
- **Cards**: Shadow effects with hover animations
- **Navigation**: Sticky header with smooth transitions

## 📱 Pages & Features

### Homepage
- Hero section with background image/video
- Services overview with animated cards
- About section with company information
- Why Choose Us section with features
- Caldot Care banner (subscription-based car care)
- Recent projects preview
- Newsletter signup

### About Us
- Company mission and vision
- Team members with photos and bios
- Timeline/milestones
- Client testimonials
- Partner With Us CTA

### Services
- Detailed service descriptions
- Features and benefits for each service
- Professional images and icons
- Call-to-action buttons

### Projects
- Filterable project grid
- Project details and status
- Client information
- Project statistics

### Insights (Blog)
- Categorized articles
- Search functionality
- Featured posts
- Newsletter subscription

### Contact
- Contact form with validation
- Contact information
- Map integration
- FAQ section

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/caldot-web.git
   cd caldot-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
FORMPREE_ID=your_formspree_id_here
```

### Tailwind Configuration
The project uses custom Tailwind configuration with:
- Custom color palette
- Custom fonts (Poppins, Lato)
- Custom animations
- Responsive breakpoints

### Next.js Configuration
- Image optimization enabled
- SEO optimization
- TypeScript support

## 📊 Performance

The website is optimized for:
- **Lighthouse Score**: >90
- **Page Speed**: Fast loading times
- **SEO**: Optimized metadata and structure
- **Accessibility**: WCAG compliant

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🔗 External Integrations

### Caldot Care
- Links to https://www.caldotcare.com
- Opens in new tab
- Styled with brand colors

### Forms
- Contact form integration
- Newsletter signup
- Formspree backend

## 📝 Customization

### Adding New Pages
1. Create a new directory in `app/`
2. Add `page.tsx` file
3. Import Navigation and Footer components
4. Add to navigation menu

### Modifying Styles
1. Update `tailwind.config.js` for global changes
2. Modify component-specific styles in individual files
3. Use Tailwind utility classes for quick styling

### Adding Content
1. Update data in component files
2. Replace placeholder images with actual content
3. Update contact information and links

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: info@caldotglobalservices.com
- Phone: +1 (234) 567-8900

## 🎯 Roadmap

- [ ] Blog post detail pages
- [ ] Project detail pages
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] CMS integration
- [ ] E-commerce features

---

**Built with ❤️ for Caldot Global Services** 
