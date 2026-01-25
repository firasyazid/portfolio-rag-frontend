# Portfolio - Firas Yazid

A modern, interactive portfolio website showcasing full-stack development and AI engineering expertise. Built with Next.js 16, React 19, and TypeScript, featuring a sleek dark theme with glassmorphism design patterns.

## Overview

This portfolio demonstrates professional experience in software engineering, AI integration, and full-stack development through an immersive, code-editor-inspired interface. The site presents work experience, projects, technical skills, and certifications in an engaging, developer-friendly format.

## Tech Stack

### Core Framework
- Next.js 16.1.4
- React 19.2.3
- TypeScript 5

### Styling & UI
- Tailwind CSS 4
- Framer Motion 12.29.0
- React Icons 5.5.0
- Lucide React 0.563.0

### Additional Libraries
- React Markdown 10.1.0
- Zod 4.3.6
- clsx & tailwind-merge

## Key Features

### Interactive Sections
- **Hero Section**: Dynamic CV download with language selection (English/French)
- **About Component**: macOS-style window interface with tabbed navigation for experience, education, certifications, and skills
- **Projects Showcase**: VS Code-inspired file explorer displaying 13+ professional projects across Web & AI, Mobile & AI, and DevOps & Cloud categories
- **Tech Stack Display**: Auto-scrolling carousel featuring 14+ technologies with hover interactions
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports

### Design Highlights
- Glassmorphism effects with backdrop blur
- Gradient text animations
- Smooth transitions and hover states
- Dark theme with cyan/purple accent colors
- Custom scrollbar styling

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx          # Navigation header
│   ├── Hero.tsx            # Landing section
│   ├── About.tsx           # Experience & credentials
│   ├── Projects.tsx        # Project portfolio
│   ├── TechStack.tsx       # Technology showcase
│   └── Footer.tsx          # Site footer
├── public/
│   ├── FirasYazid-en.pdf   # English CV
│   ├── FirasYazid-Fr.pdf   # French CV
│   └── *.svg               # Icons and assets
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## Featured Projects

The portfolio showcases 13 professional projects including:

- **AI-Powered Systems**: RAG assistants, GitHub automation with MCP, smart CI/CD pipelines
- **Mobile Applications**: EVA Padel, Pilate & Co, Delta Architect (published on App Store & Play Store)
- **Healthcare Solutions**: Multi-disease prediction platforms, face verification systems
- **Full-Stack Platforms**: E-commerce systems, exam simulation platforms, booking systems

## Performance Optimizations

- Server-side rendering with Next.js App Router
- Optimized font loading with next/font
- Lazy loading for components
- Efficient CSS with Tailwind's JIT compiler
- Minimal JavaScript bundle size



## License

This project is private and proprietary.

## Contact

For inquiries or collaboration opportunities, please reach out through the contact information provided on the website.
