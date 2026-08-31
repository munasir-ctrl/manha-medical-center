import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn('h-8 w-8', className)}
      aria-hidden="true"
    >
      <path
        d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.15"
      />
      <path
        d="M24 10v28M10 24h28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M17 17c0 4 3 7 7 7s7-3 7-7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}
