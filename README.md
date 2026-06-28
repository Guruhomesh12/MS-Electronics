# MS Electronics

A modern, responsive website for MS Electronics built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

Visit the live site: [MS Electronics](https://ms-electronics.vercel.app)

## ✨ Features

- **Responsive Design** - Mobile-first approach with seamless experience across all devices
- **Modern Tech Stack** - Built with Next.js 15, React 19, and TypeScript
- **Fast Performance** - Optimized for speed with static generation and image optimization
- **Beautiful UI** - Styled with Tailwind CSS for a polished, professional appearance
- **SEO Optimized** - Meta tags and structured data for better search engine visibility
- **API Routes** - Backend endpoints for downloads, gallery, and quote requests
- **Blog Section** - Content management ready
- **Contact Form** - Direct communication channel
- **Gallery** - Showcase of products and manufacturing process

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Styling**: [PostCSS](https://postcss.org/) - CSS transformations
- **Linting**: [ESLint](https://eslint.org/) - Code quality and consistency
- **Package Manager**: npm or yarn

## 📁 Project Structure

```
src/
├── app/
│   ├── api/                 # API routes for backend functionality
│   │   ├── downloads/
│   │   ├── gallery/
│   │   └── quote/
│   ├── blog/               # Blog page
│   ├── contact/            # Contact page
│   ├── downloads/          # Downloads page
│   ├── gallery/            # Gallery showcase
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── layout/            # Layout components (Navbar, Footer, etc.)
│   ├── sections/          # Page sections (Hero, Products, etc.)
│   └── ui/                # Reusable UI components
└── lib/
    └── utils.ts           # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Guruhomesh12/MS-Electronics.git
   cd MS-Electronics
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

## 📚 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint the code
npm run lint
```

## 🌍 Environment Variables

Create a `.env.local` file in the root directory for environment-specific configurations:

```env
# Add your environment variables here
```

## 📦 API Endpoints

- `GET /api/downloads` - Fetch available downloads
- `GET /api/gallery` - Fetch gallery items
- `POST /api/quote` - Submit quote request

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

### Deploy on Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import the MS-Electronics repository
5. Vercel will automatically detect Next.js configuration
6. Click "Deploy"

The site will be live in minutes with automatic deployments on every push to the main branch.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the .next folder to your hosting provider
```

## 🎨 Customization

### Colors & Branding

Update the Tailwind configuration in `tailwind.config.ts` to match your brand colors.

### Content

- Update hero section in `src/components/sections/Hero.tsx`
- Modify product information in `src/components/sections/Products.tsx`
- Edit footer content in `src/components/layout/Footer.tsx`

## 📝 License

This project is private and owned by MS Electronics.

## 👨‍💼 Contact

For inquiries or support, please use the contact form on the website or reach out through the provided contact information.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email contact@mselectronics.com or open an issue on GitHub.

---

**Made with ❤️ by MS Electronics**
