import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export type Crumb = { name: string; url: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-wide pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.url} className="flex items-center gap-1.5">
            {i < items.length - 1 ? (
              <>
                <Link href={item.url} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
              </>
            ) : (
              <span className="font-medium text-foreground">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
