# 📝 Blog Posts App

A modern, responsive React application for managing blog posts with advanced features like search, filtering, favorites, and dark mode support.

## ✨ Features

### 🎨 **Modern UI/UX**

- Clean, modern design with smooth animations
- Responsive layout for all devices
- Dark/Light theme toggle
- Beautiful card-based post layout

### 🔍 **Search & Filter**

- Real-time search across titles, content, and authors
- Filter posts by favorites
- Live statistics display

### ⭐ **Post Management**

- Add new posts with modal form
- Mark posts as favorites
- Delete posts with confirmation
- Automatic date assignment

### 📱 **Responsive Design**

- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd React_practice-List-keys-forms
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **ESLint** - Code linting

## 📁 Project Structure

```
src/
├── components/
│   ├── Post.jsx          # Individual post component
│   └── ThemeToggle.jsx   # Dark/Light mode toggle
├── data/
│   └── posts.json        # Sample posts data
├── App.jsx               # Main application component
├── App.css               # Application styles
├── index.css             # Global styles and CSS variables
└── main.jsx              # Application entry point
```

## 🎯 Key Features Explained

### Dark Mode

- Toggle between light and dark themes
- Theme preference saved in localStorage
- Smooth transitions between themes
- System preference detection

### Modal Form

- Clean modal interface for adding posts
- Form validation
- Click outside to close
- Smooth animations

### Search Functionality

- Real-time filtering
- Case-insensitive search
- Searches across multiple fields
- Instant results

### Favorites System

- Star posts as favorites
- Filter to show only favorites
- Visual feedback with animations

## 🎨 Styling

The app uses CSS custom properties for consistent theming:

```css
:root {
  --primary-color: #6366f1;
  --accent-color: #10b981;
  --danger-color: #ef4444;
  /* ... more variables */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Happy coding! 🚀**
