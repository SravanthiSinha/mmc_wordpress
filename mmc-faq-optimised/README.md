# Mind Matters Center - FAQ WordPress Plugin
A React-powered FAQ plugin for Mind Matters Center's WordPress website, featuring animated accordion-style questions and a comprehensive Good Faith Estimate section.

## Overview

This plugin provides an interactive FAQ section with:
- 🚀 Built with React 18 and Vite
- 📱 Fully responsive design with mobile-first approach
- 🎨 Tailwind CSS with custom branding colors
- ✨ Smooth animations and transitions (FadeInSection & AnimatedFAQItem)
- 🔌 WordPress shortcode integration
- 📦 Optimized production builds with Vite
- 🔄 Hot module replacement for development
- 🎯 Automated deployment script for XAMPP development

## Quick Installation

```bash
# Clone and install
git clone [repository-url]
cd mmc-faq-page
npm install
npm run build

# Upload to WordPress
# Copy entire folder to: /wp-content/plugins/
# Activate in WordPress admin
```

## Usage

Add the FAQ to any page or post:
```
[mmc_faq]
```

## Development Setup

### For XAMPP/Local Development

1. **Update deployment path** in `scripts/build-wordpress.js`:
   ```javascript
   const wordpressPluginPath = '/your/xampp/path/wp-content/plugins/mmc-faq-page';
   ```

2. **Development workflow**:
   ```bash
   npm run dev          # Start dev server
   npm run build:wp     # Build and deploy to WordPress
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run build:wp` | Build and auto-deploy to XAMPP |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint JavaScript files |

## Project Structure

```
mmc-faq-page/
├── dist/                 # Production build
│   ├── manifest.json     # Asset mapping
│   └── assets/          # Compiled CSS/JS
├── src/
│   ├── components/      # Shared components
│   ├── pages/          # FAQ page
│   └── main.jsx        # Entry point
├── scripts/
│   └── build-wordpress.js  # Deployment script
└── mmc-faq-page.php    # WordPress plugin
```

## Technical Details

### Built With
- **Frontend**: React 18, Vite 6, Tailwind CSS
- **WordPress**: PHP 7.0+, WordPress 5.0+
- **Animations**: Custom CSS transitions


## Configuration

### Customization
Edit FAQ content in `src/pages/Faq.jsx`:
```javascript
const faqs = [
  {
    question: "Your Question",
    answer: "Your Answer"
  },
  // ...
];
```

## Debugging

Enable debug mode in `wp-config.php`:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Common checks:
- Browser console for JS errors
- `/wp-content/debug.log` for PHP errors
- Network tab for asset loading

## Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Verify `dist/manifest.json` exists
- [ ] Run `npm run build:wp` successfully
- [ ] Verify `dist/assets`, `include/class-vite-wp-integration.php`, `mmc-faq-page.php` exists in `/your/xampp/path/wp-content/plugins/mmc-faq-page`
- [ ] Test shortcode in WordPress editor
- [ ] Check mobile responsiveness
- [ ] Validate all FAQ items display correctly
- [ ] Ensure animations work smoothly

## Credits

**Developer**: Sravanthi Sinha  
**Version**: 1.0.0

## Support

- **Development Issues**: Check browser console and WordPress debug log
- **Content Updates**: Modify FAQ array in `src/pages/Faq.jsx`
- **Styling Changes**: Update Tailwind classes in components

---
