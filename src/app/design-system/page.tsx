import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function DesignSystemShowcase() {
  return (
    <div className="container mx-auto py-[var(--spacing-16)] px-[var(--spacing-6)] space-y-[var(--spacing-16)] max-w-[var(--container-xl)]">
      
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">THE CENTER Design System</h1>
        <p className="text-[var(--color-text-secondary)] text-lg">
          Foundational tokens and components for Phase 2 implementation.
        </p>
      </div>

      <section className="space-y-8">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold">Colors</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Primary */}
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-[var(--color-primary-900)] shadow-sm"></div>
            <div>
              <p className="font-semibold text-sm">Primary Navy</p>
              <p className="text-xs text-[var(--color-text-secondary)]">--color-primary-900</p>
            </div>
          </div>
          {/* Accent */}
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-[var(--color-accent-500)] shadow-sm"></div>
            <div>
              <p className="font-semibold text-sm">Warm Gold</p>
              <p className="text-xs text-[var(--color-text-secondary)]">--color-accent-500</p>
            </div>
          </div>
          {/* Surface */}
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-[var(--color-surface-elevated)] border shadow-sm"></div>
            <div>
              <p className="font-semibold text-sm">Surface Elevated</p>
              <p className="text-xs text-[var(--color-text-secondary)]">--color-surface-elevated</p>
            </div>
          </div>
          {/* Text/Charcoal */}
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-[var(--color-charcoal)] shadow-sm"></div>
            <div>
              <p className="font-semibold text-sm">Charcoal</p>
              <p className="text-xs text-[var(--color-text-secondary)]">--color-charcoal</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold">Typography</h2>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between py-2">
            <span className="text-[var(--color-text-secondary)] w-32 shrink-0">H1</span>
            <h1 className="flex-1">Start Here. Move Forward.</h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline justify-between py-2 border-t">
            <span className="text-[var(--color-text-secondary)] w-32 shrink-0">H2</span>
            <h2 className="flex-1">How We Can Help</h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline justify-between py-2 border-t">
            <span className="text-[var(--color-text-secondary)] w-32 shrink-0">H3</span>
            <h3 className="flex-1">Starting a Business</h3>
          </div>
          <div className="flex flex-col md:flex-row justify-between py-2 border-t">
            <span className="text-[var(--color-text-secondary)] w-32 shrink-0">Body</span>
            <p className="flex-1 max-w-[650px]">
              Starting a business, keeping your records organized, completing an application, or navigating an unfamiliar process should not leave you wondering where to begin. THE CENTER provides practical business and administrative support for individuals, entrepreneurs, and small businesses.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between py-2 border-t">
            <span className="text-[var(--color-text-secondary)] w-32 shrink-0">Eyebrow</span>
            <span className="flex-1 text-[var(--color-accent-500)] font-bold uppercase tracking-widest text-sm">
              Business & Administrative Support
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold">Buttons</h2>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button>Book a Free Consultation</Button>
          <Button variant="secondary">Explore Our Services</Button>
          <Button variant="outline">Learn More</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="link">Text Link</Button>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold">Forms</h2>
        </div>
        <div className="max-w-sm space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold">Standard Input</label>
            <Input placeholder="Enter your email" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-semibold">Error State</label>
            <Input placeholder="Invalid input" error defaultValue="wrong@format" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-semibold">Disabled</label>
            <Input placeholder="Cannot edit" disabled />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold">Badges</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Error</Badge>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold">Cards (Interactive)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card interactive>
            <CardHeader>
              <CardTitle>Business Startup</CardTitle>
              <CardDescription>From Idea to Organized Next Steps</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[15px]">
                Organize the administrative steps involved in turning an idea into a properly structured business.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0">Learn More &rarr;</Button>
            </CardFooter>
          </Card>

          <Card interactive>
            <CardHeader>
              <CardTitle>Bookkeeping</CardTitle>
              <CardDescription>Keep Your Business Organized</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[15px]">
                Keep financial records organized, reconciled, and useful throughout the year.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0">Learn More &rarr;</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold">Section Themes</h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="p-[var(--spacing-12)] rounded-[var(--radius-xl)] bg-[var(--color-bg-secondary)] border">
            <h3 className="mb-4">Soft Section (--color-bg-secondary)</h3>
            <p className="max-w-[650px]">Used for alternating sections to provide visual separation from pure white without being overly dark.</p>
          </div>
          
          <div className="p-[var(--spacing-12)] rounded-[var(--radius-xl)] bg-[var(--color-primary-900)] text-white glass-dark shadow-xl">
            <span className="text-[var(--color-accent-500)] font-bold text-sm tracking-wider uppercase mb-2 block">Clear Information</span>
            <h3 className="mb-4 text-white">Premium Dark Section</h3>
            <p className="max-w-[650px] text-[var(--color-text-dark-secondary)] mb-6">
              Used for trust bands and critical highlight areas. Features high-contrast Warm Gold accents against Deep Navy.
            </p>
            <Button variant="secondary">Get Started</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
