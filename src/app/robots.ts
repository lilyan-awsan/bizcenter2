import { MetadataRoute } from 'next'
import { seoConfig } from '@/lib/seoConfig'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',       // Block API routes from crawling
        '/private/',   // Block placeholder for private routes
        '/_next/'      // Prevent unnecessary crawling of Next internals if exposed
      ],
    },
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
  }
}
