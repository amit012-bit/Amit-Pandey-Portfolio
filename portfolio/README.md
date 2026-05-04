# AMIT.DEV — Personal Portfolio

Vite + React + Tailwind CSS + Framer Motion portfolio.

## Quick Start

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173

---

## Before You Deploy

### 1. Add your resume PDF
Copy your resume to `public/resume.pdf`. The "Download Resume" button links to it.

### 2. Add your profile photo
Place your photo at `public/photo.jpg` (or any format), then in `src/components/Hero.jsx` replace:

```jsx
{/* TODO: Replace this div with ... */}
<div className="absolute inset-0 ...">
```

with:

```jsx
<img src="/photo.jpg" alt="Amit Pandey" className="absolute inset-0 w-full h-full object-cover object-top" />
```

Do the same in `src/components/About.jsx`.

### 3. Add project screenshots (optional)
Place screenshots in `public/projects/` and replace the gradient `<div>` in `Projects.jsx` with:

```jsx
<img src="/projects/project-1.png" alt="Codio Engine" className="w-full h-full object-cover" />
```

---

## Deploy to GitHub Pages

### Step 1 — Update `vite.config.js`

Change `base` to your repo name:

```js
base: '/your-repo-name/',
```

### Step 2 — Update `package.json`

Change `homepage` to:

```json
"homepage": "https://your-github-username.github.io/your-repo-name"
```

### Step 3 — Push to GitHub

```bash
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### Step 4 — Deploy

```bash
npm run deploy
```

This builds and pushes to the `gh-pages` branch. GitHub Pages will serve from that branch automatically.

> In your repo → Settings → Pages → set Source to `gh-pages` branch.

---

## Deploy to Vercel (recommended — zero config)

### Option A: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite.

> **Important:** set `base: '/'` in `vite.config.js` for Vercel.

### Option B: Vercel Dashboard

1. Push repo to GitHub
2. Go to https://vercel.com/new
3. Import repo → Deploy
4. Done. Every push auto-deploys.

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf        ← ADD YOUR RESUME HERE
│   └── photo.jpg         ← ADD YOUR PHOTO HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Stack

- **Vite 5** — build tool
- **React 18** — UI
- **Tailwind CSS 3** — styling
- **Framer Motion 11** — animations
- **react-type-animation** — hero typing effect
- **react-intersection-observer** — scroll triggers
- **gh-pages** — GitHub Pages deployment
