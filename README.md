# alexarvanitidis.dev

This website is built using [Nim](https://github.com/ibelick/nim), a free and open-source personal website template developed with Next.js 15, React 19, Tailwind CSS v4, and Motion. Nim was originally created by [@ibelick](https://github.com/ibelick) and has been customized to showcase my work as a **Machine Learning Engineer** specializing in **cloud infrastructure, machine learning model deployment, DevOps, and high-performance systems**.

Live demo: [https://alexarvanitidis.dev](https://alexarvanitidis.dev)

---

## 🚀 Features

- **Minimal one-page portfolio layout**
- **Blog support with MDX**
- **Responsive and accessible design**
- **Smooth animations powered by [Motion-Primitives](https://motion-primitives.com)**
- **Custom sections tailored for my experience and projects**

---

## 📥 Installation & Setup

To run the website locally:

```bash
git clone https://github.com/alarv/alexarvanitidis.dev.git
cd alexarvanitidis.dev
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

---

## 🧹 Pre-commit formatting (recommended)

Avoid build or CI failures caused by Prettier by enabling the provided pre-commit hook that formats staged files automatically:

```bash
npm run hooks
```

This maps Git hooks to `.githooks/`. The hook will:
- Format staged `.ts/.tsx/.js/.jsx/.md/.mdx/.json/.css/.mjs/.cjs` files with Prettier
- Re-stage any changes

Useful scripts:

```bash
# Format everything in the repo
npm run format

# Check formatting without writing
npm run format:check

# Fix ESLint issues
npm run lint:fix
```
