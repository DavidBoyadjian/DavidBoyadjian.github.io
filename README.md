# David Boyadjian - Resume Website

A modern, professional resume website built with React, TypeScript, and Tailwind CSS. Features a clean design, dark/light mode toggle, smooth scrolling navigation, and downloadable PDF resume.

![Resume Website](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-blue)

## ✨ Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Dark/Light Mode** - Theme toggle with persistent user preference
- **Smooth Scrolling** - Seamless navigation between sections
- **PDF Resume Download** - One-click download of your resume
- **Professional Layout** - Clean, modern design with interactive cards
- **Fast Performance** - Built with Vite for lightning-fast load times
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/resume-website.git
cd resume-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000`

## 📦 Build for Production

```bash
# Build the project
npm run build

# Start the production server
npm start
```

## 🛠️ Tech Stack

**Frontend:**
- React 18.3
- TypeScript 5.6
- Tailwind CSS 3.4
- Vite 5.4
- Wouter (lightweight routing)

**UI Components:**
- Radix UI primitives
- Shadcn UI components
- Lucide React icons

**Backend:**
- Express.js
- Node.js

## 📝 Customization Guide

### Update Personal Information

1. **Hero Section** (`client/src/components/Hero.tsx`)
   - Change your name, title, and professional summary
   - Update contact email and phone number
   - Replace the headshot image

2. **Work Experience** (`client/src/components/WorkExperience.tsx`)
   - Modify the `experiences` array with your job history
   - Update job titles, companies, dates, and descriptions

3. **Education** (`client/src/components/Education.tsx`)
   - Edit the `education` array with your academic background

4. **Extracurricular Activities** (`client/src/components/ExtracurricularActivities.tsx`)
   - Update the `activities` array with your involvement
   - Add detailed descriptions for each activity

5. **Skills** (`client/src/components/Skills.tsx`)
   - Modify the `skillCategories` array with your skills
   - Organize by categories (Languages, Technical Tools, etc.)

6. **Achievements** (`client/src/components/Achievements.tsx`)
   - Update the `achievements` array with your accomplishments

### Replace Profile Photo

1. Add your professional headshot to `attached_assets/generated_images/`
2. Update the import path in `client/src/components/Hero.tsx`:
```typescript
import headshot from "@assets/generated_images/your-photo.png";
```

### Replace Resume PDF

1. Add your resume PDF to `attached_assets/`
2. Update the file path in `server/routes.ts`:
```typescript
const resumePath = path.join(__dirname, "../attached_assets/Your_Resume.pdf");
```

### Customize Colors

Edit the color variables in `client/src/index.css`:

**Light Mode:**
```css
:root {
  --primary: 215 90% 45%;        /* Primary blue color */
  --background: 0 0% 98%;        /* Background color */
  --foreground: 222 20% 15%;     /* Text color */
  /* ... more colors ... */
}
```

**Dark Mode:**
```css
.dark {
  --primary: 215 85% 60%;        /* Primary blue color */
  --background: 222 15% 12%;     /* Background color */
  --foreground: 0 0% 95%;        /* Text color */
  /* ... more colors ... */
}
```

## 🌐 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect the Vite configuration
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and create a new site
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## 📂 Project Structure

```
resume-website/
├── client/                      # Frontend source code
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Hero.tsx
│   │   │   ├── WorkExperience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── ExtracurricularActivities.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx         # Main page
│   │   ├── App.tsx              # Root component
│   │   └── index.css            # Global styles
│   └── index.html               # HTML entry point
├── server/                      # Backend code
│   ├── routes.ts                # API routes
│   └── index.ts                 # Server entry point
├── attached_assets/             # Static files
│   ├── generated_images/        # Profile photos
│   └── *.pdf                    # Resume PDF
├── package.json                 # Dependencies
├── tailwind.config.ts           # Tailwind config
├── tsconfig.json                # TypeScript config
└── vite.config.ts               # Vite config
```

## 🎨 Design Philosophy

This resume website follows modern web design principles:

- **Content First** - Information is immediately scannable and accessible
- **Professional Minimalism** - Clean layouts that let content shine
- **Subtle Sophistication** - Refined details without distraction
- **Mobile-First** - Seamless experience across all devices
- **Accessibility** - WCAG AA compliant with proper contrast ratios

## 🤝 Contributing

This is a personal resume website, but feel free to fork it and customize it for your own use!

## 📄 License

MIT License - feel free to use this template for your own resume website.

## 📧 Contact

**David Boyadjian**
- Email: davidmb07xxx@gmail.com
- Phone: 818-751-3885
- University: California State Polytechnic University, Pomona
- Major: Computer Engineering | Minor: Data Science & Statistics

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
