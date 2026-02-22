# 👟 Kicks – Premium Sneaker E-commerce Store

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://kicks-react-frontend.vercel.app/)
[![Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/SomorMk/kicks-react-frontend)

**Kicks** is a high-performance, responsive e-commerce frontend built as a technical implementation task. It translates a modern Figma design into a fully functional shopping experience, featuring real-time data integration, smooth state management, and a mobile-first approach.

---

## ✨ Key Features

- **🏠 Interactive Landing Page**: Dynamic product showcases and promotional banners.
- **📄 Detailed Product Pages**: Comprehensive product views including descriptions, pricing, and high-quality imagery.
- **🗂 Category Discovery**: Seamless navigation through product categories with real-time filtering.
- **🛒 Persistent Cart**: fully functional shopping cart (Bonus Implementation) for a complete user flow.
- **📱 Responsive Excellence**: Pixel-perfect layout across mobile, tablet, and desktop devices.
- **⚡ Real-time Data**: Integrated with external APIs with robust handling for loading, empty, and error states.
- **🎉 User Feedback**: Success states and "Thank You" redirections for a polished UX.

---

## � Tech Stack

### Frontend Core

- **React 18**: Component-based architecture for a scalable UI.
- **Vite**: Ultra-fast build tool and development server.
- **React Router Dom**: Client-side routing for seamless page transitions.

### State Management & Data Fetching

- **Redux Toolkit**: Centralized state management for shopping cart and global UI states.
- **React Query (TanStack Query)**: Efficient server state management, caching, and synchronization.
- **Axios**: Promised-based HTTP client for API requests.

### Styling & UI

- **Tailwind CSS 4**: Modern, utility-first CSS framework for rapid UI development.
- **Shadcn/UI**: High-quality, accessible UI components.
- **Lucide React & React Icons**: Comprehensive iconography system.
- **Framer Motion**: Smooth animations and micro-interactions.

---

## 🔗 API Integration

The application leverages the **Platzi Fake Store API** for realistic e-commerce data:

- **Products**: `https://api.escuelajs.co/api/v1/products`
- **Categories**: `https://api.escuelajs.co/api/v1/categories`

**Implementation details include:**

- Optimized data fetching with React Query hooks.
- Graceful error handling and skeleton loaders for enhanced perceived performance.
- Dynamic filtering based on category selection.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SomorMk/kicks-react-frontend.git
   cd kicks-react-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components (shadcn/custom)
├── hooks/           # Custom React hooks (Data fetching, etc.)
├── layout/          # Layout wrappers
├── lib/             # Utility functions and configurations
├── pages/           # Page-level components
├── Redux/           # Redux slices and store configuration
├── router/          # Route definitions
└── shared/          # Shared constants and types
```

---

## 🎨 Design Reference

This project was developed based on a professional **Figma Design** provided by **Zavisoft**. The focus was on maintaining high fidelity to the original design while ensuring technical performance and responsiveness.

---

## 📄 License & Attribution

This project was created as a frontend implementation task for **Zavisoft**.

- Live URL: [kicks-react-frontend.vercel.app](https://kicks-react-frontend.vercel.app/)
- Author: [SomorMk](https://github.com/SomorMk)
- Email: [EMAIL_ADDRESS](samormk6@gmail.com)
- WhatsApp/Phone: [+8801902011859](https://wa.me/+8801902011859)
