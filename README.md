# FlexiGrid Studio // Interactive Grid & Flexbox Constructor

FlexiGrid Studio is a high-fidelity, interactive visual constructor for CSS Grid and Flexbox layouts. Built with modular Vanilla CSS, HTML5, and vanilla Javascript, it provides a Figma-like direct manipulation workspace for designing responsive web layouts, previewing structure changes instantly, and extracting production-ready, clean code.

## 🚀 Key Features

- **Double Layout Engines**: Dynamic toggle between **CSS Grid** and **Flexbox** container configurations.
- **Direct Canvas Track Manipulation**: Drag vertical or horizontal grid border handles directly inside the workspace to size your grid column and row tracks (auto-converts mouse offsets to responsive percentage track configurations).
- **Interactive Item Span Adjustments**: Select any grid item and drag its border handles (right and bottom) to expand or shrink row and column spans visually.
- **Drag-and-Drop Cell Sizing**: Drag items across grid cells to relocate their coordinates on the fly.
- **Context-Aware Sidebar Inspector**: Set alignments, direction, padding, wrap, gaps, and individual items' properties (order, flex-grow/shrink/basis, self alignment).
- **Archetype Layout Presets**: Instant load presets including:
  - *Holy Grail Layout* (Header, Sidebars, Main Content, Footer grid)
  - *Dashboard Grid* (Sidebar Nav, Main Board cards grid)
  - *Staggered Masonry Gallery*
  - *Wrapping Flex Cards*
  - *Centered Hero Container*
- **Polished Designer UI**: Sleek dark-mode theme utilizing glassmorphism, radial grid overlays, custom glowing states, and responsive active highlight borders.
- **Live Code Inspector**: Copy generated semantic HTML and fully annotated CSS rules with integrated syntax highlighting.

## 📁 Project Structure

- `index.html` — Application shell, control sidebar panel, presets menus, canvas workspace, and code display.
- `styles.css` — Modern glassmorphism system styling, radial grid alignments, items, selection borders, resize controllers, and custom scrollbars.
- `app.js` — Container/Item state manager, drag session mathematics, resizing calculations, grid boundary checkers, and code compiler.
- `package.json` — Vite server configuration for previewing the project locally.
- `.gitignore` — Node configuration rules.

## 🛠️ Getting Started

To run the constructor locally, follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Launch Dev Server**:
   ```bash
   npm run dev
   ```

3. **Preview**:
   Open the browser at the address output in the terminal (usually `http://localhost:5173`).


---

## 🌟 Credits
Designed to make grid layouts simple, referencing layout ideas from [The Digit HQ web development studio](https://thedigithq.com).