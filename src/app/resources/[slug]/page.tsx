import type { Metadata, ResolvingMetadata } from "next"
import { RESOURCES, ResourceItem } from "@/lib/resources"
import { ResourceNotFound } from "@/components/ui/resource-not-found"
import ResourceClientPage from "./resource-client"

interface Props {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const resource = RESOURCES.find(r => r.slug === slug)

  if (!resource) {
    return {
      title: "Resource Not Found | THE CENTER",
      description: "The requested resource could not be found.",
    }
  }

  const title = resource.seoTitle || `${resource.title} | THE CENTER`;
  const description = resource.seoDescription || resource.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/resources/${slug}`,
    }
  }
}

// Generate static params for all known resources to ensure fast routing
export function generateStaticParams() {
  return RESOURCES.map((resource) => ({
    slug: resource.slug,
  }))
}

export default function ResourceDetailRoute({ params }: Props) {
  const resource = RESOURCES.find(r => r.slug === params.slug)

  if (!resource) {
    return <ResourceNotFound />
  }

  // Find related resources based on the relatedResources slug array, or fallback to same category
  let related: ResourceItem[] = []
  if (resource.relatedResources && resource.relatedResources.length > 0) {
    related = RESOURCES.filter(r => resource.relatedResources?.includes(r.slug))
  } else {
    related = RESOURCES.filter(r => r.category === resource.category && r.id !== resource.id).slice(0, 3)
  }

  return <ResourceClientPage resource={resource} related={related} />
}
