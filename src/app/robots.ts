/**
 * Robots.txt Configuration for Next.js App Router
 *
 * This file tells search engine crawlers:
 * - Which pages they can and cannot access
 * - Where to find the sitemap
 * - Crawl delay settings (if needed)
 *
 * Next.js automatically serves this at /robots.txt
 *
 * Why this matters:
 * - Controls search engine access to your site
 * - Prevents crawling of admin/private pages
 * - Directs crawlers to sitemap for efficient indexing
 */

import { MetadataRoute } from 'next';
import { siteConfig } from '../config/seo.config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: '*', // Applies to all search engines
        allow: '/', // Allow crawling of all pages
        disallow: [
          '/api/', // Block API routes from indexing
          '/private/', // Block any private pages (if you add them)
          '/_next/', // Block Next.js internal files
          '/admin/' // Block admin pages (if you add them)
        ]
      },
      {
        userAgent: 'GPTBot', // OpenAI's crawler
        disallow: '/' // Block AI crawlers if desired
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/'
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // Direct crawlers to your sitemap
    host: baseUrl // Preferred domain (helps with canonicalization)
  };
}

/**
 * Common User Agents:
 * - Googlebot (Google Search)
 * - Bingbot (Bing Search)
 * - Slurp (Yahoo)
 * - DuckDuckBot (DuckDuckGo)
 * - Baiduspider (Baidu)
 * - YandexBot (Yandex)
 * - GPTBot (OpenAI)
 *
 * Best Practices:
 * 1. Allow homepage and public content
 * 2. Disallow admin panels and private sections
 * 3. Disallow API endpoints (unless they serve HTML)
 * 4. Include sitemap reference
 * 5. Use allow/disallow strategically, not as security
 */
