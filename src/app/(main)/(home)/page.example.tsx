/**
 * Example: Home Page with SEO Implementation
 * 
 * This example demonstrates:
 * 1. Using the Metadata API for page-specific SEO
 * 2. Setting custom title, description, and Open Graph data
 * 3. Using the siteConfig for consistent branding
 * 
 * SEO Best Practices Shown:
 * - Homepage gets priority 1.0 in sitemap
 * - Clear, descriptive meta description (50-160 characters ideal)
 * - Keyword-rich but natural language
 * - Custom Open Graph image for social sharing
 */

import { Metadata } from 'next';
import { siteConfig } from '@/config/seo.config';

/**
 * Metadata for the homepage
 * This overrides the default metadata from layout.tsx
 */
export const metadata: Metadata = {
  title: 'Home', // Will become "Home | Your Name - Portfolio"
  description:
    'Welcome to my portfolio. I\'m a Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Explore my projects, skills, and professional experience.',
  keywords: [
    ...siteConfig.keywords,
    'portfolio',
    'web developer portfolio',
    'react projects',
    'nextjs portfolio'
  ],
  
  // Canonical URL for homepage
  alternates: {
    canonical: siteConfig.url
  },

  // Custom Open Graph for homepage
  openGraph: {
    title: `${siteConfig.author.name} - Web Developer`,
    description:
      'Explore my portfolio featuring modern web applications built with React, Next.js, and TypeScript.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.author.name} Portfolio Homepage`
      }
    ],
    type: 'website'
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.author.name} - Full Stack Developer`,
    description: 'Explore my portfolio and projects',
    creator: siteConfig.twitter.handle,
    images: [`${siteConfig.url}/images/og-home.jpg`]
  }
};

export default function HomePage() {
  return (
    <>
      {/* Your homepage content */}
      {/* The metadata above is automatically injected into <head> by Next.js */}
    </>
  );
}

/**
 * Key SEO Points for Homepage:
 * 
 * 1. Title Strategy:
 *    - Keep it under 60 characters
 *    - Include primary keywords (Full Stack Developer)
 *    - Use your name for brand recognition
 * 
 * 2. Description Strategy:
 *    - 150-160 characters optimal
 *    - Include main services/skills
 *    - Compelling call-to-action implied
 *    - Front-load important keywords
 * 
 * 3. Keywords:
 *    - Mix of broad and specific terms
 *    - Include variations (developer, development)
 *    - Add homepage-specific terms
 * 
 * 4. Open Graph:
 *    - Custom image for better social shares
 *    - Different from other pages
 *    - 1200x630px is optimal size
 * 
 * 5. Canonical URL:
 *    - Points to exact homepage URL
 *    - Prevents duplicate content with www/non-www
 */
