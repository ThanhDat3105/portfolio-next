import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/header';
import { Toaster } from 'react-hot-toast';
import { baseMetadata, viewport as seoViewport } from '../lib/seo';
import { JsonLd } from '../components/seo';
import {
  getOrganizationSchema,
  getPersonSchema,
  getWebsiteSchema
} from '../lib/structured-data';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Font optimization with next/font
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap' // Ensures text remains visible during font load
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap'
});

// Export global metadata - automatically applied to all pages unless overridden
export const metadata: Metadata = baseMetadata;

// Export viewport configuration
export const viewport = seoViewport;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data schemas
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();
  const personSchema = getPersonSchema();

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Structured Data - Helps search engines understand your site */}
        <JsonLd data={[organizationSchema, websiteSchema, personSchema]} />
      </head>
      <body className='bg-[#060606]'>
        <Header />
        <Toaster position='top-right' toastOptions={{ duration: 5000 }} />
        <div
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

/**
 * Why These SEO Elements Matter:
 *
 * 1. Metadata Export:
 *    - Provides default SEO values for all pages
 *    - Can be overridden by individual page metadata
 *    - Ensures no page is missing critical SEO tags
 *
 * 2. Structured Data (JSON-LD):
 *    - Helps Google understand your site structure
 *    - Enables rich search results (Knowledge Graph, site links)
 *    - Improves brand recognition in search
 *
 * 3. Language Attribute (lang='en'):
 *    - Helps screen readers and search engines
 *    - Improves accessibility
 *    - Can prevent incorrect translation prompts
 *
 * 4. Font Display Swap:
 *    - Prevents invisible text during font loading
 *    - Improves Core Web Vitals (CLS, LCP)
 *    - Better user experience
 *
 * 5. Viewport Configuration:
 *    - Critical for mobile SEO
 *    - Affects mobile-first indexing
 *    - Improves responsive behavior
 */
