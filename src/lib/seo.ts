/**
 * SEO Utility Functions
 *
 * Helper functions for generating SEO-optimized metadata across your application.
 * These utilities make it easy to create consistent, high-quality metadata for all pages.
 */

import { Metadata } from 'next';
import { siteConfig } from '../config/seo.config';

/**
 * Base metadata that applies to all pages
 * Provides fallback values and global settings
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}` // Page Title | Site Name
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url
    }
  ],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,

  // Robots meta tag - controls search engine behavior
  robots: {
    index: siteConfig.robots.index,
    follow: siteConfig.robots.follow,
    googleBot: siteConfig.robots.googleBot
  },

  // Open Graph metadata for social media sharing
  openGraph: {
    type: 'website',
    locale: siteConfig.openGraph.locale,
    url: siteConfig.openGraph.url,
    siteName: siteConfig.openGraph.siteName,
    title: siteConfig.openGraph.title,
    description: siteConfig.openGraph.description,
    images: [...siteConfig.openGraph.images]
  },

  // Twitter Card metadata
  twitter: {
    card: siteConfig.twitter.cardType,
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitter.handle,
    site: siteConfig.twitter.site,
    images: [...siteConfig.openGraph.images]
  },

  // Icons and theme
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',

  // Webmaster verification codes
  verification: siteConfig.verification,

  // Additional recommended tags
  alternates: {
    canonical: siteConfig.url
  },

  // Prevents translation prompts in browsers
  category: 'technology'
};

/**
 * Generate page-specific metadata
 * Merges page data with base configuration
 *
 * @param title - Page title
 * @param description - Page description
 * @param path - Page path (for canonical URL)
 * @param image - Custom OG image (optional)
 * @param noIndex - Prevent indexing (optional)
 */
export function generateMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
  keywords
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.openGraph.images[0].url;

  return {
    title,
    description,
    keywords: keywords || [...siteConfig.keywords],

    // Canonical URL prevents duplicate content issues
    alternates: {
      canonical: url
    },

    // Control indexing per page
    robots: noIndex
      ? {
          index: false,
          follow: false
        }
      : baseMetadata.robots,

    // Open Graph for social sharing
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.openGraph.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: siteConfig.openGraph.locale,
      type: 'website'
    },

    // Twitter Card
    twitter: {
      card: siteConfig.twitter.cardType,
      title,
      description,
      creator: siteConfig.twitter.handle,
      images: [ogImage]
    }
  };
}

/**
 * Generate article/blog post metadata
 * Includes publish date and modified date
 */
export function generateArticleMetadata({
  title,
  description,
  path,
  image,
  publishedTime,
  modifiedTime,
  authors,
  tags
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  publishedTime: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: tags || [...siteConfig.keywords],

    alternates: {
      canonical: url
    },

    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: siteConfig.openGraph.siteName,
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: authors || [siteConfig.author.name],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: siteConfig.twitter.handle,
      images: [image]
    }
  };
}

/**
 * Generate viewport configuration
 * Important for responsive design and PWA
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#060606' }
  ]
};
