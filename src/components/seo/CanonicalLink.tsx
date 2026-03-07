/**
 * Canonical Link Component
 *
 * Generates canonical URLs to prevent duplicate content issues.
 * This is critical for SEO when you have multiple URLs pointing to the same content.
 *
 * Why canonical URLs matter:
 * - Prevents duplicate content penalties
 * - Consolidates link equity to one URL
 * - Helps with URL parameters and variations
 *
 * Usage:
 * <CanonicalLink path="/projects" />
 */

import { siteConfig } from '@/src/config/seo.config';

interface CanonicalLinkProps {
  path?: string;
}

export default function CanonicalLink({ path = '' }: CanonicalLinkProps) {
  const canonicalUrl = `${siteConfig.url}${path}`;

  return <link rel='canonical' href={canonicalUrl} />;
}
