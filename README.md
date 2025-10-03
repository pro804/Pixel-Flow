# PixelFlow - Image Gallery 🖼️⚡

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Bundler-purple?logo=vite)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-green?logo=netlify)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

PixelFlow is a responsive image search application built with React and TypeScript, powered by the Unsplash API. Features a beautiful masonry layout, dark/light theme toggle, and seamless search experience. This project was created for practicing React hooks, global state management, and API integration.

## 🚀 Live Demo

**View Live on Netlify:**  
[PixelFlow - Unsplash Image Gallery](https://pixel-flow-gpdev.netlify.app/)

## 📸 Project Preview

<table align="center">
  <tr>
    <td align="center"><strong>💻 Desktop View with Light & Dark Theme</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="./src/assets/demo/Web.gif" width="100%" alt="Desktop View showing image search results in dark & light theme"/></td>
  </tr>
  
  <tr>
    <td align="center"><strong>📱 Mobile View with Light & Dark Theme</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="./src/assets/demo/Mobile.gif" height="400" alt="Mobile View showing image search in dark & light theme"/></td>
  </tr>
  <tr>
    <td align="center"><em>Responsive design with theme toggle and masonry layout</em></td>
  </tr>
</table>

## ✨ Features

- **Image Search** - Search for high-quality images from Unsplash API
- **Masonry Layout** - Responsive grid layout that adapts to different screen sizes
- **Dark/Light Theme** - Toggle between dark and light themes with system preference detection
- **Responsive Design** - Optimized for both desktop and mobile devices
- **React Query** - Efficient data fetching and caching with background updates
- **TypeScript** - Full type safety for better development experience
- **Accessibility** - Accessible form and images with proper alt texts

## 🛠️ Built With

| Tool / Library                  | Purpose                              |
| ------------------------------- | ------------------------------------ |
| ⚡ **Vite**                     | Fast build tool & dev server         |
| ⚛️ **React 18**                 | Component-based UI                   |
| 🟦 **TypeScript**               | Type safety and developer experience |
| 🎯 **Context API**              | Global state management              |
| 🔍 **React Query**              | Data fetching and caching            |
| 🖼️ **React Responsive Masonry** | Masonry layout for images            |
| 📋 **React Icons**              | Icon library for theme toggle        |
| 🎨 **CSS3**                     | Custom properties, transitions, Grid |
| 🌅 **Unsplash API**             | High-quality image database          |

## 🎓 Key Learning Outcomes

### Advanced State Management

- **Context API Implementation** for global state sharing (theme and search term)
- **Complex State Logic** managing theme, search term, and API data
- **Custom Hook Creation** (`useGlobalContext`) with TypeScript

### API Integration & Data Management

- **React Query** for efficient data fetching, caching, and background updates
- **Axios** for making HTTP requests
- **TypeScript Interfaces** for API response types
- **Environment Variables** for secure API key management

### UI/UX & Animations

- **Masonry Layout** for dynamic image grids using react-responsive-masonry
- **Smooth Transitions** for theme switching and hover effects
- **Responsive Breakpoints** with mobile-first approach
- **Loading and Error States** for better user feedback

### Performance & UX

- **Lazy Loading Images** for performance optimization
- **Efficient Re-renders** with React Query and proper state management
- **System Theme Detection** respecting user preferences
- **Local Storage** for theme persistence across sessions

## 🏗️ Component Architecture

```text
src/
├── components/
│   ├── Gallery.tsx          # Displays images in masonry layout
│   ├── SearchForm.tsx       # Search input and form
│   └── ThemeToggle.tsx      # Dark/light theme toggle button
├── contexts/
│   ├── AppContext.tsx       # React context creation
│   └── AppProvider.tsx      # Global state provider
├── hooks/
│   └── useGlobalContext.ts  # Custom context hook
└── main.tsx                 # App entry point
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** or **yarn** package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/pro804/Pixel-Flow.git
```

2. Navigate to the project directory

```bash
cd Pixel-Flow
```

3. Install dependencies

```bash
npm install
```

4. Create a .env file in the root directory and add your Unsplash API key:

```bash
 VITE_API_KEY=your_unsplash_api_key_here
```

5. Start the development server

```bash
npm run dev
```

6. Open http://localhost:5173 to view it in the browser.

## 🔧 Available Scripts

- `npm run dev` — Runs the development server (Vite)
- `npm run build` — Builds the app for production
- `npm run preview` — Previews the production build locally

## 📄 License

This project was created for educational purposes as part of a React learning journey.
This project is licensed under the MIT License.
See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com/developers) for providing the amazing image API

- [React](https://react.dev/learn) and [Vite](https://vite.dev/) for tooling

- [John Smilga](https://johnsmilga.com/) for the original project idea and design
