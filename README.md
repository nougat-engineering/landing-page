# Landing Page

A modern, scroll-driven landing page built with Next.js 15, React 19, and Tailwind CSS 4.

## Prerequisites

- **Node.js**: v18.19.1 or higher
- **pnpm**: Package manager (recommended)

## Installation

Install dependencies using pnpm:

```bash
pnpm install
```

## Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

### Local Build (for local testing)

When building for local testing with Live Server or a local HTTP server:

1. **Comment out** the `basePath` and `assetPrefix` in `next.config.mjs`:

   ```javascript
   // basePath: '/landing-page',
   // assetPrefix: '/landing-page/',
   ```

2. Build the project:

   ```bash
   pnpm build
   ```

3. Serve the `/out` directory with a local server:
   ```bash
   cd out
   python3 -m http.server 8000
   ```
   Or use Live Server in VS Code (configured in `.vscode/settings.json`)

### Build for GitHub Pages Deployment

When building for GitHub Pages deployment:

1. **Uncomment** the `basePath` and `assetPrefix` in `next.config.mjs`:

   ```javascript
   basePath: '/landing-page',
   assetPrefix: '/landing-page/',
   ```

2. Build and deploy:
   ```bash
   pnpm run deploy
   ```

This will:

- Build the project with `pnpm build`
- Deploy the `/out` directory to the `gh-pages` branch
- Publish to GitHub Pages

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm deploy` - Build and deploy to GitHub Pages

## Project Structure

- `/app` - Next.js 15 App Router pages and components
- `/out` - Static export output (generated after build)
- `/public` - Static assets (images, icons, etc.)

## Technologies

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Framer Motion** - Animations
- **pnpm** - Fast, disk space efficient package manager

## Deployment

This project is configured for deployment on GitHub Pages. The site will be available at:

```
https://[username].github.io/landing-page/
```

Make sure GitHub Pages is enabled in your repository settings and set to deploy from the `gh-pages` branch.

## License

Private
