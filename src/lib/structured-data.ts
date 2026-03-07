/**
 * Structured Data (JSON-LD) Components
 *
 * JSON-LD (JavaScript Object Notation for Linked Data) is a method of encoding
 * structured data using Schema.org vocabulary. This helps search engines understand:
 * - What your website is about
 * - Who owns/operates it
 * - Your contact information and social profiles
 * - The type of content on each page
 *
 * Benefits:
 * - Enhanced search results (rich snippets)
 * - Better knowledge graph integration
 * - Improved voice search results
 * - Increased click-through rates
 *
 * Learn more: https://schema.org/
 */

import { Person, Organization, WebSite, WithContext } from 'schema-dts';
import { siteConfig } from '../config/seo.config';

/**
 * Organization Schema
 * Represents your professional identity/brand
 * Appears in Knowledge Graph and branded search results
 */
export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/logo.png`,
    description: siteConfig.description,
    email: siteConfig.author.email,
    founder: {
      '@type': 'Person',
      name: siteConfig.author.name
    },
    sameAs: [
      // Social media profiles - helps Google connect your brand across platforms
      siteConfig.author.github,
      siteConfig.author.linkedin,
      `https://twitter.com/${siteConfig.author.twitter}`
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.author.email,
      contactType: 'Professional Inquiries'
    }
  };
}

/**
 * Person Schema
 * Represents you as an individual professional
 * Helps with personal branding and authority
 */
export function getPersonSchema(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile.jpg`,
    email: siteConfig.author.email,
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Your Current Company' // Update with your current employer
    },
    sameAs: [
      siteConfig.author.github,
      siteConfig.author.linkedin,
      `https://twitter.com/${siteConfig.author.twitter}`
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Full Stack Development'
    ]
  };
}

/**
 * Website Schema
 * Represents your website in search results
 * Enables sitelinks search box in Google
 */
export function getWebsiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Person',
      name: siteConfig.author.name
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'en-US'
  };
}

/**
 * Breadcrumb Schema
 * Shows navigation path in search results
 * Improves user experience and SEO
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Article Schema (for blog posts or project details)
 * Helps articles appear in Google News and rich results
 */
export function getArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    }
  };
}

/**
 * ProfilePage Schema (for portfolio/about pages)
 * Identifies pages that represent a person's professional profile
 */
export function getProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/profile.jpg`,
      sameAs: [
        siteConfig.author.github,
        siteConfig.author.linkedin,
        `https://twitter.com/${siteConfig.author.twitter}`
      ]
    }
  };
}
