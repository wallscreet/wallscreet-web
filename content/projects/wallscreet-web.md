---
title: "Personal Portfolio & Blog (this website)"
date: "2026-01-17"
description: "A terminal-themed Next.js portfolio and blog showcasing projects, thoughts, and technical explorations in AI research, data analysis, and systems development."
language: "typescript | Next.js"
---

## Personal Portfolio & Blog

> A terminal-themed Next.js portfolio and blog showcasing projects, thoughts, and technical explorations in AI research, data analysis, and systems development.

**Live Site:** [wallscreet.discorover.com](https://wallscreet.discorover.com)  
**Author:** John - ex-banker (20yrs), freelance data analyst and programmer specializing in AI research, integrations and systems development.

---

## 🌟 Features

### Terminal-Inspired Design

- Retro terminal aesthetics with green-on-black color scheme
- Command-line style navigation and interactions
- ASCII art logo and terminal-style prompts
- Responsive design that works on all devices

### Content Management

- **Projects Section:** Dynamic portfolio showcasing 15+ projects across multiple domains
- **Blog Section:** Technical thoughts and research findings with Markdown support
- **About Page:** Professional background and expertise overview
- **Contact:** Professional contact information and social links

### Technical Architecture

- **Static Generation:** Optimized performance with Next.js App Router
- **Markdown Processing:** Gray-matter for frontmatter parsing
- **Syntax Highlighting:** Highlight.js integration for code blocks
- **Type Safety:** Full TypeScript implementation
- **Modern Styling:** Tailwind CSS v4 with custom terminal theme

---

## 🚀 Technology Stack

### Frontend Framework

- **Next.js 16.1.3** - React framework with App Router
- **React 19.2.3** - Modern React with latest features
- **TypeScript 5** - Type-safe development

### Styling & UI

- **Tailwind CSS v4** - Utility-first CSS framework
- **Tailwind Typography** - Beautiful typography for prose
- **Custom Terminal Theme** - Green-on-black terminal aesthetic

### Content & Data

- **Gray-Matter 4.0.3** - Frontmatter parsing for Markdown
- **React-Markdown 10.1.0** - Markdown rendering
- **Rehype-Highlight 7.0.2** - Code syntax highlighting
- **Rehype-Raw 7.0.0** - HTML support in Markdown

### Development Tools

- **ESLint 9** - Code linting and formatting
- **Next.js Dev Tools** - Hot reloading and development experience

---

## 📁 Project Structure

```
wallscreet-web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page with terminal interface
│   │   ├── about/page.tsx     # About page
│   │   ├── blog/              # Blog section
│   │   │   ├── page.tsx       # Blog listing
│   │   │   └── [slug]/page.tsx # Individual blog posts
│   │   ├── projects/          # Projects section
│   │   │   ├── page.tsx       # Projects listing
│   │   │   └── [slug]/page.tsx # Individual project pages
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles with terminal theme
│   ├── components/
│   │   └── Navigation.tsx     # Terminal-style navigation
│   └── lib/
│       ├── projects.ts        # Project data management
│       └── posts.ts           # Blog post management
├── content/
│   ├── projects/              # Project Markdown files
│   │   ├── discorover.md
│   │   ├── gov-feeds.md
│   │   ├── llamatran.md
│   │   └── ...
│   └── blog/                  # Blog post Markdown files
├── public/                    # Static assets
└── README.md                 # This file
```

---

## 🛠 Installation & Setup

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/wallscreet-web.git
   cd wallscreet-web
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## 📝 Content Management

### Adding New Projects

1. Create a new Markdown file in `content/projects/`
2. Add frontmatter with required fields:

   ```yaml
   ---
   title: "Project Title"
   date: "YYYY-MM-DD"
   description: "Brief project description"
   repo: "repository-name"
   language: "language | framework"
   ---
   ```

3. Write your project content in Markdown
4. The project will automatically appear in the projects section

### Adding Blog Posts

1. Create a new Markdown file in `content/blog/`
2. Add frontmatter with title and date
3. Write your post content in Markdown
4. Use standard Markdown syntax with GitHub-flavored extensions

### Frontmatter Schema

#### Projects

- `title` (required): Project name
- `date` (required): Publication date
- `description` (optional): Brief description
- `repo` (optional): Repository name
- `language` (optional): Technologies used

#### Blog Posts

- `title` (required): Post title
- `date` (required): Publication date
- `description` (optional): Post excerpt

---

## 🎨 Design System

### Color Palette

- **Background:** `#000000` (Black)
- **Primary Text:** `#00ff00` (Terminal Green)
- **Dimmed Text:** `#00cc00` (Dark Green)
- **Bright Text:** `#00ff88` (Light Green)
- **Accent:** `#FF6600` (Orange for highlights)
- **White:** `#FFFFFF` (White borders)

### Typography

- **Font Family:** 'Courier New', monospace
- **Base Size:** Responsive with terminal aesthetic
- **Code Blocks:** Custom styling with syntax highlighting

### Responsive Design

- **Mobile:** Single column, simplified ASCII art
- **Desktop:** Multi-column layout, full ASCII art
- **Tablet:** Adaptive layout with medium breakpoints

---

## 🔧 Configuration

### Next.js Configuration

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### TypeScript Configuration

- **Target:** ES2017
- **Module Resolution:** Bundler
- **Strict Mode:** Enabled
- **Path Aliases:** `@/*` maps to `./src/*`

### Tailwind CSS Configuration

- **Version:** v4
- **Plugins:** Typography plugin for prose styling
- **Custom Theme:** Terminal-inspired color scheme

---

## 📊 Featured Projects

### DiscoRover.com

A comprehensive financial data visualization platform providing insights into U.S. economic indicators, commodity prices, and housing market metrics.

### Gov Feeds Aggregator

Government data aggregation platform that simplifies access to official information from multiple U.S. government agencies and institutions.

### LlamaTran

A minimal Fortran interface to llama.cpp using ISO_C_BINDING, enabling Fortran programs to run GGUF models directly.

### Additional Projects

- **AI Research Tools:** Various machine learning and AI experimentation projects
- **Data Analysis Scripts:** Custom tools for financial and statistical analysis
- **Web Applications:** Full-stack applications showcasing modern development practices
- **CLI Tools:** Command-line utilities for various tasks

---

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on git push

### Other Platforms

The application can be deployed to any platform supporting Node.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

### Environment Variables

No environment variables required for basic functionality.

---

## 🔍 Features Showcase

### Terminal Navigation

- Command-line style navigation with current path display
- Active page highlighting with orange accent color
- Responsive navigation that adapts to screen size

### Dynamic Content Loading

- Static generation for optimal performance
- Markdown files processed at build time
- Automatic slug generation from filenames

### Code Highlighting

- Syntax highlighting for multiple programming languages
- Terminal-style code blocks with green theme
- Support for inline code and block code

### ASCII Art

- Custom ASCII logo that scales with screen size
- Responsive design for mobile and desktop
- Terminal-inspired aesthetic throughout

---

## 🤝 Contributing

This is a personal portfolio project. However, if you find issues or have suggestions:

1. Open an issue describing the problem or suggestion
2. Fork the repository
3. Create a feature branch
4. Make your changes
5. Submit a pull request

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

## 🔗 Links

- **Live Site:** [wallscreet.discorover.com](https://wallscreet.discorover.com)
- **Main Project:** [DiscoRover.com](https://discorover.com)
- **Government Feeds:** [gov-feeds.discorover.com](https://gov-feeds.discorover.com)

---

## 💡 Technical Highlights

- **Performance Optimized:** Static site generation with Next.js
- **Type Safe:** Full TypeScript implementation
- **Modern Stack:** Latest React and Next.js features
- **Accessible:** Semantic HTML and ARIA labels
- **SEO Friendly:** Meta tags and structured data
- **Mobile Responsive:** Works on all device sizes

---
