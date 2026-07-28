# Anass - Freelance Portfolio Website

This is a modern, single-page responsive portfolio website for a freelance web developer/designer named Anass, specializing in small business web design. It has been organized as a clean, multi-file project.

## Folder Structure

```text
/portfolio
  ├── index.html          # Semantic HTML5 markup
  ├── /css
  │     └── style.css     # Modular, variable-driven responsive styles
  ├── /js
  │     └── script.js     # Vanilla JS scroll observers and menu interactions
  ├── /assets
  │     └── /images       # Visual mockups for projects (16:9 aspect ratio)
  └── README.md           # Project documentation
```

## How to Run the Project

Since this project features modern javascript scroll hooks and dynamically loaded images, it is recommended to run it using a local development server:

### Option 1: VS Code Live Server Extension
1. Open the `/portfolio` folder in VS Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Click the **Go Live** button at the bottom-right corner of the editor.
4. Your browser will automatically open the URL (usually `http://127.0.0.1:5500/index.html`).

### Option 2: Local HTTP Server (Node.js)
If you have Node.js installed, you can spin up a static server from your terminal:
1. Navigate into the project folder:
   ```bash
   cd portfolio
   ```
2. Start the server using `npx`:
   ```bash
   npx http-server -p 8000 -c-1
   ```
3. Open your browser and navigate to `http://localhost:8000/`.

## Design Details
- **Accent Color**: Electric Blue (`#2563EB`)
- **Base Color Palette**: Slate-neutral palette (`#F8FAFC` and `#FFFFFF` background, `#0F172A` text)
- **Typography**: Space Grotesk (for headers) and Inter (for body copy) via Google Fonts CDN.
- **Responsive Layout**: Designed mobile-first for 375px viewports, scaling up cleanly using CSS media queries.
