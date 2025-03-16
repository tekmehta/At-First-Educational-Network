import { ImageLoader } from 'next/image';

export const customImageLoader: ImageLoader = ({ src, width, quality }) => {
  // Handle local images
  if (src.startsWith('/')) {
    return src;
  }
  
  // Handle external images
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const handleImageError = (e:any) => {
  // Set a background color as fallback
  e.target.style.backgroundColor = '#1e40af';
  // Hide the broken image icon
  e.target.style.display = 'none';
};

// Default image paths
export const defaultImages = {
  hero: '/hero-bg.jpg',
  about: '/about-og-image.jpg',
  services: '/services-og-image.jpg',
  team: '/team/default-member.jpg',
  testimonial: '/testimonials/default-testimonial.jpg',
  blog: '/blog/default-post.jpg',
  logo: '/logo.png'
}; 