/**
 * SEO Configuration for Portfolio Website
 *
 * This file contains all global SEO settings including:
 * - Default metadata (title, description, keywords)
 * - Open Graph configuration for social media sharing
 * - Twitter Card configuration
 * - Author and robots directives
 *
 * These settings serve as fallbacks and can be overridden per page.
 */

export const siteConfig = {
  // Basic Site Information
  name: 'Thanh Dat - Portfolio',
  title: 'Thanh Dat | Web Developer',
  description:
    'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects, experience, and skills.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com',

  // Author Information
  author: {
    name: 'Thanh Dat',
    email: 'your.email@example.com',
    twitter: '@yourhandle',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile'
  },

  // SEO Keywords - Important for search discoverability
  keywords: [
    'full stack developer',
    'react developer',
    'nextjs developer',
    'web developer',
    'javascript',
    'typescript',
    'frontend developer',
    'backend developer',
    'portfolio',
    'software engineer'
  ],

  // Open Graph Configuration - For social media sharing (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com',
    siteName: 'Thanh Dat - Portfolio',
    title: 'Thanh Dat | Web Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects, experience, and skills.',
    images: [
      {
        url: '/images/image-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Thanh Dat - Web Developer'
      }
    ]
  },

  // Twitter Card Configuration - For Twitter sharing
  twitter: {
    handle: '@yourhandle',
    site: '@yourhandle',
    cardType: 'summary_large_image' // Options: summary, summary_large_image, app, player
  },

  // Robots Configuration - Controls search engine crawling
  robots: {
    index: true, // Allow search engines to index
    follow: true, // Allow search engines to follow links
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },

  // Verification codes for search engine webmaster tools
  verification: {
    google: 'your-google-verification-code',
    bing: 'your-bing-verification-code',
    yandex: 'your-yandex-verification-code'
  }
} as const;

export type SiteConfig = typeof siteConfig;
