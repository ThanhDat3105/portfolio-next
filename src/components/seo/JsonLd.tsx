/**
 * Structured Data Component
 *
 * This component injects JSON-LD structured data into the page's <head>.
 * It's used to help search engines understand the content and context of your pages.
 *
 * Usage:
 * <JsonLd data={getOrganizationSchema()} />
 *
 * Why in a component:
 * - Reusable across pages
 * - Type-safe with TypeScript
 * - Easy to maintain and update
 */

import Script from 'next/script';

interface JsonLdProps {
  data: object | object[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id='json-ld'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(Array.isArray(data) ? data : data)
      }}
      strategy='beforeInteractive' // Load before page becomes interactive
    />
  );
}

/**
 * Script Loading Strategies:
 * - beforeInteractive: Loads before any Next.js code (critical for SEO)
 * - afterInteractive: Loads after page becomes interactive (default)
 * - lazyOnload: Loads during browser idle time (non-critical scripts)
 * - worker: Loads in web worker (experimental)
 */
