/**
 * SEO Head Component (Legacy - for Pages Router or client components)
 *
 * While Next.js App Router has built-in metadata API, this component
 * provides a fallback for client-side rendering scenarios or when you
 * need more dynamic control.
 *
 * Note: For App Router, prefer using the Metadata API in page.tsx files.
 * This component is useful for:
 * - Client components that need dynamic SEO
 * - Conditional meta tags based on user state
 * - Real-time SEO updates
 */

'use client';

import { siteConfig } from '@/src/config/seo.config';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  children?: React.ReactNode;
}

export default function SEO({
  title = siteConfig.title,
  description = siteConfig.description,
  canonical,
  ogImage = siteConfig.openGraph.images[0].url,
  ogType = 'website',
  noIndex = false,
  children
}: SEOProps) {
  const pageTitle = title.includes('|')
    ? title
    : `${title} | ${siteConfig.name}`;
  const canonicalUrl = canonical || siteConfig.url;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={siteConfig.keywords.join(', ')} />

      {/* Canonical URL */}
      <link rel='canonical' href={canonicalUrl} />

      {/* Robots */}
      {noIndex && <meta name='robots' content='noindex,nofollow' />}

      {/* Open Graph */}
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:site_name' content={siteConfig.name} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:locale' content='en_US' />

      {/* Twitter Card */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={siteConfig.twitter.site} />
      <meta name='twitter:creator' content={siteConfig.twitter.handle} />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />

      {/* Additional custom tags */}
      {children}
    </Head>
  );
}
