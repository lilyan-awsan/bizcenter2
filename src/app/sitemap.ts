import { MetadataRoute } from 'next'
import { seoConfig } from '@/lib/seoConfig'
import { RESOURCES } from '@/lib/resources'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl

  // Static public routes
  const staticRoutes = [
    '',
    '/services',
    '/services/business-startup',
    '/services/bookkeeping',
    '/services/business-support',
    '/services/applications-administrative-support',
    '/services/new-to-the-united-states',
    '/resources',
    '/faq',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/accessibility',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Resource Routes
  const resourceRoutes = RESOURCES.map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...resourceRoutes]
}
