export default function PlaceholderImage({ label = "", className = "" }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-bg-elevated via-surface to-bg-card ${className}`}
    >
      <div className="text-center px-4">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-border-light">
          <svg
            className="h-5 w-5 text-text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
            />
          </svg>
        </div>
        {label && (
          <p className="text-xs uppercase tracking-widest text-text-muted">
            {label}
          </p>
        )}
      </div>
    </div>
  );
}
