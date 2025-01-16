# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Responsive Fruit Store Application

This project is a **React-based responsive web application** that showcases an online fruit store. The application utilizes **Framer Motion** for animations and various reusable components to provide a dynamic and visually appealing user experience.

---

## Features

### 1. Responsive Menu Component
- A collapsible menu component using `AnimatePresence` and `motion` from Framer Motion.
- Smooth entrance and exit animations.
- Supports responsive design with a clean, minimalist style.

### 2. Menu Section
- Displays a grid of fruits with details like name, price, and image.
- Interactive card animations, including hover effects for scaling.
- Each card is fully responsive and dynamically generated from the `MenuData` array.

### 3. Hero Section
- Highlights the store's branding with large, bold text and an image.
- Includes an engaging call-to-action (CTA) for users to order fresh fruits.
- Animations include fade-ins and smooth transitions.

### 4. Footer Component
- A simple and elegant footer featuring:
  - Social media icons (Facebook, Twitter, Instagram).
  - The store's branding with a logo.

### 5. Banner Components
- Multiple banners, each emphasizing different aspects of the store:
  - **Banner 1:** General branding and store introduction.
  - **Banner 2:** Promotes app downloads for better accessibility.
  - **Banner 3:** A background image banner encouraging users to order fresh fruits.
- Each banner uses Framer Motion for animations.

---

## Tech Stack

### Frontend
- **React.js**: Core framework for building the user interface.
- **Framer Motion**: Library for animations and transitions.
- **React Icons**: Icons for enhanced visuals.

### Styling
- **Tailwind CSS**: For utility-first responsive and modern styling.

---

## File Structure

```
/src
├── assets
│   ├── fruits
│   │   ├── apple.png
│   │   ├── avocado.png
│   │   ├── cherry.png
│   │   ├── orange.png
│   ├── fruit-plate.png
│   ├── leaf.png
│   ├── fruits-splash.png
│   ├── fruit-plate2.png
│   ├── banner-bg.jpg
├── components
│   ├── ResponsiveMenu.jsx
│   ├── Menus.jsx
│   ├── Hero.jsx
│   ├── Footer.jsx
│   ├── Banner.jsx
│   ├── Banner2.jsx
│   ├── Banner3.jsx
├── utility
│   ├── animation.js
└── App.jsx
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

1. Open the app in your browser at `http://localhost:5174`.
2. Navigate through the menu and explore the various sections.
3. Interact with the components to view animations and hover effects.

---

## Customization

- To add or edit fruit items, modify the `MenuData` array in the **Menus.jsx** file.
- Update the banner texts and images in the respective **Banner** components.
- Adjust animation timings and properties in the `FadeLeft` or `FadeUp` functions located in **/utility/animation.js**.

---

## Dependencies

- [React.js](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Contributing

Feel free to contribute to this project by submitting a pull request. Any improvements, suggestions, or bug fixes are welcome!

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b main
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin main
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Screenshots

### 1. Hero Section
![Hero Section](assets/screenshots/hero-section.png)

### 2. Menu Section
![Menu Section](assets/screenshots/menu-section.png)

### 3. Footer
![Footer](assets/screenshots/footer.png)

---

## Acknowledgements

- **Framer Motion** for providing amazing animation capabilities.
- **React Icons** for the beautiful icons.
- **Tailwind CSS** for the modern and flexible styling options.
