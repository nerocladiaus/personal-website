# Purui Kang — Personal Portfolio

A responsive personal portfolio presenting my software engineering journey,
selected projects, technical skills, and professional experience.

**Live website:** [nerocladiaus.github.io/personal-website](https://nerocladiaus.github.io/personal-website/)

## About

I am a software engineering undergraduate based in Singapore with interests
across full-stack development, database systems, embedded technology, and
system integration. This website brings together the projects and experiences
that have shaped how I design and build practical software.

## Highlights

- Responsive single-page design for desktop and mobile
- Project case studies covering mobile, AI, web, and embedded systems
- Education and professional experience timeline
- Scroll progress, reveal animations, and interactive visual details
- Accessible semantic markup and reduced-motion support
- Automated deployment to GitHub Pages

## Technology

- React 19
- JavaScript
- Vite 7
- CSS
- GitHub Actions and GitHub Pages

## Run locally

Requirements: [Node.js](https://nodejs.org/) and npm.

```bash
git clone https://github.com/nerocladiaus/personal-website.git
cd personal-website
npm install
npm run dev
```

Open the local address printed in the terminal, normally
`http://127.0.0.1:5173`.

## Production build

```bash
npm run build
npm run preview
```

The optimized output is generated in `dist/`.

## Project structure

```text
personal-website/
├── public/assets/          # Portrait and project artwork
├── src/main.jsx            # Portfolio content and React components
├── src/styles.css          # Layout, visual system, and responsive styles
├── worker/index.js         # Static asset worker for supported hosting
├── index.html              # Page metadata and application entry point
└── package.json            # Scripts and dependencies
```

## Deployment

Every push to `main` runs the GitHub Pages workflow in
`.github/workflows/deploy-pages.yml`. The workflow installs dependencies,
builds the Vite application, and publishes the contents of `dist/`.

## Contact

- [GitHub](https://github.com/nerocladiaus)
- [LinkedIn](https://www.linkedin.com/in/purui-kang)
- [Email](mailto:Kangpuruix@gmail.com)

© 2026 Purui Kang. All rights reserved.
