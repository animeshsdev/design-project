# Swipe View — Design Showcase

This folder contains the `Swipe` view — an independent, component-driven design project built with React and SCSS to showcase UI/UX and layout work for a payment network ("Swipe"). The intent is primarily visual: the implementation demonstrates component architecture, responsive styling, and interactive visual polish.

**Key goals**
- Present a polished, design-first UI for a payment network marketing landing/feature page.
- Showcase component composition, visual hierarchy, and attention to spacing, color and motion.
- Provide a reproducible, modular structure that separates visual components, styles, and small visual scripts (like the hero gradient).

**Tech stack**
- React + TypeScript (app shell)
- SCSS modules / structured SCSS files for component styles
- Vite as the dev/build tool
- A small WebGL canvas gradient (`gradient.js`) used for a hero/background visual

**Project structure (important files)**
- - **View entry:** [src/assets/Views/Swipe/Swipe.tsx](src/assets/Views/Swipe/Swipe.tsx)
- - **Styles:** [src/assets/Views/Swipe/Styles/Swipe.styles.scss](src/assets/Views/Swipe/Styles/Swipe.styles.scss) and [src/assets/Views/Swipe/Styles/SwipeCore.styles.scss](src/assets/Views/Swipe/Styles/SwipeCore.styles.scss)
- - **Gradient visual:** [src/gradient.js](src/gradient.js) — WebGL-based background/hero animation (initialized from the React view)
- - **Reusable UI components:** [src/assets/Views/Swipe/Components/](src/assets/Views/Swipe/Components/) — NavBar, PaymentHero, PartnerGrid, Platform, PhotosGrid, Integration, SwipeInfo, GlobalSection, VirtualEvents, Register, Footer

Each component lives in its own folder and follows a simple pattern:
- `ComponentName.tsx` — functional React component
- `ComponentName.styles.scss` — component-scoped styles

This pattern keeps markup, logic and styles co-located for easy iteration and visual tweaks.

**Design and implementation notes**
- Visual-first: emphasis is on pixel-accurate layout, typography, and color. Components are designed to be flexible so screens can be composed into different marketing pages.
- SCSS variables and a core stylesheet centralize spacing, color tokens and breakpoints (`SwipeCore.styles.scss`), enabling consistent rhythm across components.
- The hero uses an absolutely-positioned `<canvas id="gradient-canvas">` and a small WebGL script (`gradient.js`) to render a subtle animated gradient. The canvas is initialized from `Swipe.tsx` after mount so React controls the lifecycle and avoids race conditions.
- Component-level styles use BEM-like classnames and nesting to make the intent of each rule explicit and easy to override for demos or variations.

**Developer usage**
1. Install and run the project (root of repo):

```bash
npm install
npm run dev
```

2. Open the app in the browser (Vite will show the dev URL). The `Swipe` view is available at the route or mount point used in your app — open the page that renders `[src/assets/Views/Swipe/Swipe.tsx](src/assets/Views/Swipe/Swipe.tsx)`.

3. If you modify visual scripts like `gradient.js`, you can re-initialize from the view or refresh the page. `Swipe.tsx` dynamically imports and calls the gradient initializer after mount to ensure the canvas exists.

**Accessibility & responsiveness**
- Layout uses semantic HTML where possible and component props can be extended to include accessible labels and ARIA attributes.
- SCSS uses responsive breakpoints in `SwipeCore.styles.scss` and component styles to adapt to small screens.

**How this showcases design skills**
- The project is intentionally componentized so each UI piece can be reviewed independently (visual fidelity, spacing, color, animation). It highlights:
  - Visual hierarchy (typography, spacing, contrast)
  - Interaction design (hover states, focus states, micro-interactions)
  - Motion and ambiance (hero gradient, subtle transitions)
- The code structure demonstrates how a designer can use React and SCSS to rapidly prototype and display UI concepts while keeping the codebase tidy.

**Extending or reusing**
- Components are meant to be dropped into other views or combined to create new pages.
- To change theme colors, update the CSS variables in the container or `Swipe.styles.scss` and the gradient will pick them up via computed styles.

**Notes for reviewers**
- This is a design-focused repository/feature; there are no payment backends or transaction code — the goal is visual and architectural demonstration.
- See the individual component folders for granular notes and CSS details.