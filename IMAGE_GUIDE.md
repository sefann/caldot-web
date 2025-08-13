# 🖼️ Image and Logo Guide for Caldot Website

## 📁 Directory Structure

```
public/images/
├── logo/          # Company logos (PNG, SVG recommended)
├── hero/          # Hero section backgrounds
├── services/      # Service-related images
├── team/          # Team member photos
└── projects/      # Project galleries
```

## 🎯 How to Add Images

### **1. Logo Setup**
- **File**: `public/images/logo/caldot-logo.png`
- **Recommended Size**: 200x200px (will scale down)
- **Format**: PNG with transparent background
- **Fallback**: Text "C" will show if image fails to load

### **2. Hero Background Images**
- **File**: `public/images/hero/hero-bg.jpg`
- **Recommended Size**: 1920x1080px
- **Format**: JPG for photos, PNG for graphics
- **Usage**: Background for hero sections

### **3. Service Images**
- **Files**: 
  - `public/images/services/general-merchandise.jpg`
  - `public/images/services/procurement.jpg`
  - `public/images/services/automobile-maintenance.jpg`
  - `public/images/services/logistics.jpg`
  - `public/images/services/interior-decoration.jpg`
- **Recommended Size**: 600x400px
- **Format**: JPG

### **4. Team Photos**
- **Files**: `public/images/team/team-member-1.jpg`, etc.
- **Recommended Size**: 300x300px (square)
- **Format**: JPG

### **5. Project Images**
- **Files**: `public/images/projects/project-1.jpg`, etc.
- **Recommended Size**: 800x600px
- **Format**: JPG

## 🔧 Implementation Examples

### **Using Next.js Image Component (Recommended)**
```tsx
import Image from 'next/image'

<Image
  src="/images/logo/caldot-logo.png"
  alt="Caldot Global Services Logo"
  width={200}
  height={200}
  className="w-full h-full object-contain"
/>
```

### **Using Regular HTML img Tag**
```tsx
<img 
  src="/images/logo/caldot-logo.png" 
  alt="Caldot Global Services Logo"
  className="w-full h-full object-contain"
/>
```

### **Background Images in CSS**
```css
.hero-section {
  background-image: url('/images/hero/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

## 📋 Image Requirements

### **Logo Requirements**
- **Format**: PNG or SVG
- **Background**: Transparent
- **Colors**: Should work on both light and dark backgrounds
- **Size**: At least 200x200px (will be scaled down)

### **Hero Images**
- **Format**: JPG or PNG
- **Aspect Ratio**: 16:9 or 21:9
- **Quality**: High resolution (1920px+ width)
- **Content**: Professional business/logistics imagery

### **Service Images**
- **Format**: JPG
- **Aspect Ratio**: 3:2 or 4:3
- **Content**: Relevant to each service
- **Style**: Professional, clean, modern

## 🎨 Image Optimization Tips

1. **Compress Images**: Use tools like TinyPNG or ImageOptim
2. **WebP Format**: Consider using WebP for better compression
3. **Responsive Images**: Provide multiple sizes for different screens
4. **Lazy Loading**: Images load as they come into view
5. **Alt Text**: Always include descriptive alt text for accessibility

## 📱 Responsive Image Sizes

### **Mobile (< 768px)**
- Logo: 32x32px
- Hero: 768x432px
- Service: 400x267px

### **Tablet (768px - 1024px)**
- Logo: 40x40px
- Hero: 1024x576px
- Service: 500x333px

### **Desktop (> 1024px)**
- Logo: 48x48px
- Hero: 1920x1080px
- Service: 600x400px

## 🔄 Next Steps

1. **Add your logo** to `public/images/logo/caldot-logo.png`
2. **Add hero background** to `public/images/hero/hero-bg.jpg`
3. **Add service images** to their respective folders
4. **Update components** to use the new images
5. **Test responsiveness** on different screen sizes

## 🛠️ Quick Commands

```bash
# Create image directories (already done)
mkdir -p public/images/{logo,hero,services,team,projects}

# Check image sizes (Windows)
dir public\images\logo

# Optimize images (install tools first)
# npm install -g imagemin-cli
# imagemin public/images/* --out-dir=public/images/optimized
```

## 📞 Need Help?

- **Image Format Issues**: Convert using online tools like Convertio
- **Size Optimization**: Use TinyPNG or Squoosh
- **Logo Design**: Consider using Canva or hiring a designer
- **Implementation**: Check the component examples above
