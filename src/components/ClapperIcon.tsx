export function ClapperIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Board body */}
      <rect x="4" y="24" width="56" height="36" rx="3" fill="#111" />
      {/* Board lines */}
      <line x1="4" y1="36" x2="60" y2="36" stroke="#333" strokeWidth="1" />
      <line x1="4" y1="44" x2="60" y2="44" stroke="#333" strokeWidth="1" />
      <line x1="4" y1="52" x2="60" y2="52" stroke="#333" strokeWidth="1" />
      {/* Clapper hinge */}
      <rect x="4" y="18" width="56" height="8" rx="1" fill="#222" />
      {/* Top clapper arm (angled) */}
      <g transform="rotate(-12 4 18)">
        <rect x="4" y="10" width="56" height="8" rx="1" fill="#111" />
        {/* Diagonal stripes on clapper */}
        <rect x="10" y="10" width="5" height="8" fill="#eee" transform="skewX(-15)" />
        <rect x="22" y="10" width="5" height="8" fill="#eee" transform="skewX(-15)" />
        <rect x="34" y="10" width="5" height="8" fill="#eee" transform="skewX(-15)" />
        <rect x="46" y="10" width="5" height="8" fill="#eee" transform="skewX(-15)" />
      </g>
      {/* Bottom clapper stripes (static) */}
      <rect x="12" y="18" width="4" height="8" fill="#eee" transform="skewX(-15)" />
      <rect x="24" y="18" width="4" height="8" fill="#eee" transform="skewX(-15)" />
      <rect x="36" y="18" width="4" height="8" fill="#eee" transform="skewX(-15)" />
      <rect x="48" y="18" width="4" height="8" fill="#eee" transform="skewX(-15)" />
    </svg>
  );
}
