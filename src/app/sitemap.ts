/**
 * Sitemap Generation for Next.js App Router
 *
 * This file automatically generates a sitemap.xml that helps search engines:
 * - Discover all pages on your website
 * - Understand the site structure
 * - Know when pages were last updated
 * - Prioritize crawling based on page importance
 *
 * Next.js automatically serves this at /sitemap.xml
 */

import { MetadataRoute } from 'next';
import { siteConfig } from '../config/seo.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Static routes - Core pages that rarely change
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0 // Highest priority for homepage
    },
    {
      url: `${baseUrl}/#educationAndCertificatePage`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/#skillsPage`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/#projectsPage`,
      lastModified: currentDate,
      changeFrequency: 'weekly', // Projects might be updated more frequently
      priority: 0.9
    },
    {
      url: `${baseUrl}/#companiesPage`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/#contactPage`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/company`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    }
  ];

  // Dynamic routes - If you have company detail pages
  // Example: Fetch company IDs from database or API
  // const companies = await fetchCompanies();
  // const companyRoutes: MetadataRoute.Sitemap = companies.map((company) => ({
  //   url: `${baseUrl}/company/${company.id}`,
  //   lastModified: company.updatedAt || currentDate,
  //   changeFrequency: 'monthly',
  //   priority: 0.6
  // }));

  // For now, return static routes
  // Later, combine with dynamic routes: [...staticRoutes, ...companyRoutes]
  return staticRoutes;
}

/**
 * Priority Guidelines:
 * 1.0 = Homepage (most important)
 * 0.8-0.9 = Key landing pages (projects, skills)
 * 0.6-0.7 = Secondary pages (contact, individual items)
 * 0.4-0.5 = Archive pages, old content
 *
 * Change Frequency Guidelines:
 * - 'always' = Changes on every visit (avoid unless necessary)
 * - 'hourly' = News sites, real-time data
 * - 'daily' = Blogs with frequent updates
 * - 'weekly' = Active project portfolios
 * - 'monthly' = Standard business sites
 * - 'yearly' = Static pages like terms of service
 * - 'never' = Archived content
 */
