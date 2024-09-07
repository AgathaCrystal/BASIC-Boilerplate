# 🌟 Vite + Tailwind CSS Static Site Boilerplate

This project is a lean and efficient boilerplate for creating static websites using Vite and Tailwind CSS. It's designed to provide a simple, yet powerful solution for businesses that need a fast, optimized website without the complexity of full-fledged content management systems like WordPress.

## 🎯 Project Philosophy

Many businesses often opt for overly complex solutions when a simple, static website would suffice. This boilerplate offers a streamlined approach:

- **Simplicity**: Write basic HTML, CSS, and JavaScript to achieve your goals.
- **Performance**: Achieves a perfect 100/100/100/100 score on Google PageSpeed Insights.
- **Optimization**: Includes image optimization, compression, and other performance enhancements out of the box.
- **Flexibility**: Provides just enough features to create a professional, responsive website without unnecessary bloat.


## 🚀 Features

- Fast development with Vite
- Utility-first styling with Tailwind CSS
- SCSS support for custom styling
- Optimized image handling with automatic responsive image generation
- Simple HTML templating
- Automatic sitemap generation
- Gzip compression for production builds
- Responsive design ready

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/): Next-generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework
- [SCSS](https://sass-lang.com/): CSS preprocessor for custom styling
- [Sharp](https://sharp.pixelplumbing.com/): High-performance image processing
- [vite-imagetools](https://github.com/JonasKruckenberg/imagetools): Image optimization plugin for Vite
- [vite-plugin-html-inject](https://github.com/donnikitos/vite-plugin-html-inject): HTML templating plugin
- [vite-plugin-sitemap](https://github.com/jbaubree/vite-plugin-sitemap): Sitemap generation plugin
- [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression): Gzip compression plugin

## 📁 Project Structure

```
project-root/
├── dist/                 # Production build output
├── src/
│   ├── components/       # Reusable HTML components
│   ├── images/           # Image assets
│   ├── js/               # JavaScript files
│   ├── scss/             # SCSS files
│   └── sections/         # Larger HTML sections
├── index.html            # Main HTML file
├── impressum.html        # Imprint page
├── karriere.html         # Careers page
├── datenschutz.html      # Privacy policy page
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## 🚀 Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Working with CSS

This boilerplate supports both Tailwind CSS and custom SCSS:

### Tailwind CSS

Tailwind classes can be used directly in your HTML files with class="your-tw-class". The configuration file is located at `tailwind.config.js`.

### Custom SCSS

For custom styles, use the SCSS files located in the `src/scss/` directory. The main SCSS file is `src/scss/main.scss`.

## 🖼️ Image Handling

This boilerplate uses `vite-imagetools` for optimized image handling:

1. Place your images in the `src/images/` directory.
2. Use the `data-src` attribute in your HTML to reference images:

```html:index.html
<img
              id="header-2"
              data-src="/src/images/header-2.webp"
              alt="<!-- TODO: Add alt text -->"
              class="rounded-2xl -mt-12 md:mt-0 hidden md:block"
              width="1920"
              height="1280"
            />
```

The build process will automatically optimize and generate responsive image sizes.

## 📄 HTML Templating

Use the `vite-plugin-html-inject` for HTML templating:

```html:index.html
<load src="src/components/navigation.html" />

// or

<load
              src="src/components/card.html"
              icon="graduation-cap"
              color="var(--text-secondary-color)"
              title="Service 1"
              text="Description of Service 1. Add details about what this service offers and its benefits."
            />
```

## 🗺️ Sitemap Generation

The sitemap is automatically generated based on the configuration in `vite.config.js`:

```javascript:vite.config.js
sitemap({
      hostname: "https://example-page.de",
      exclude: ["/404"],
      routes: ["/", "/impressum", "/careers", "/datenschutz", "/#service"],
      lastmod: new Date().toISOString(),
      changefreq: {
        "/": "weekly",
        "/impressum": "yearly",
        "/datenschutz": "yearly",
        "/careers": "monthly",
        "/#service": "monthly",
      },
      priority: {
        "/": 1.0,
        "/impressum": 0.3,
        "/datenschutz": 0.3,
        "/careers": 0.7,
        "/#service": 0.7,
      },
    }),
```

## 🏗️ Building for Production

1. Run the build command:

   ```
   npm run build
   ```

2. The optimized production files will be in the `dist/` directory.

## 📦 Deployment

This boilerplate is ready for deployment on various static hosting platforms like Netlify, Vercel, or GitHub Pages. Refer to your chosen platform's documentation for specific deployment instructions.

**Tip:** In the most basic case, you can use the `dist` folder, which is created by the build process, as is and just deploy it to your favorite static site hosting provider.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/your-repo-name/issues).

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
