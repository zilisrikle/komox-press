import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  ...DefaultTheme
}

---

// docs/.vitepress/theme/style.css
:root {
  --vp-c-brand: #3b82f6; /* 蓝色主色 */
  --vp-c-bg: #ffffff;
  --vp-c-text: #1e293b;
}

img {
  display: block;
  margin: 2rem auto;
  max-width: 90%;
  border-radius: 1rem;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

---

// .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install deps
        run: npm install

      - name: Build VitePress
        run: npm run docs:build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs/.vitepress/dist