const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Create directories if they don't exist
const directories = [
  '',
  '/team',
  '/testimonials',
  '/blog',
  '/countries'
];

directories.forEach(dir => {
  const fullPath = path.join(publicDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Create placeholder SVG for missing images
const createPlaceholderSVG = (text) => `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1e40af"/>
  <text x="50%" y="50%" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dy=".3em">
    ${text}
  </text>
</svg>
`;

// List of required images
const requiredImages = [
  { path: 'hero-bg.jpg', text: 'Hero Background' },
  { path: 'about-og-image.jpg', text: 'About Page Image' },
  { path: 'services-og-image.jpg', text: 'Services Page Image' },
  { path: 'og-image.jpg', text: 'Default OG Image' },
  { path: 'logo.png', text: 'Logo' },
  { path: 'team/default-member.jpg', text: 'Team Member' },
  { path: 'testimonials/default-testimonial.jpg', text: 'Testimonial' },
  { path: 'blog/default-post.jpg', text: 'Blog Post' }
];

// Create placeholder images
requiredImages.forEach(img => {
  const filePath = path.join(publicDir, img.path);
  if (!fs.existsSync(filePath)) {
    const svg = createPlaceholderSVG(img.text);
    fs.writeFileSync(filePath.replace(/\.(jpg|png)$/, '.svg'), svg);
    console.log(`Created placeholder for ${img.path}`);
  }
});

console.log('Placeholder images generated successfully!'); 