export default function CactusLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Casa JohnSUN cactus logo"
    >
      {/* Main trunk */}
      <rect x="24" y="18" width="12" height="54" rx="6" fill="#C7A15A" />
      {/* Left arm - horizontal */}
      <rect x="8" y="32" width="22" height="10" rx="5" fill="#C7A15A" />
      {/* Left arm - vertical */}
      <rect x="8" y="22" width="10" height="20" rx="5" fill="#C7A15A" />
      {/* Right arm - horizontal */}
      <rect x="30" y="42" width="22" height="10" rx="5" fill="#C7A15A" />
      {/* Right arm - vertical */}
      <rect x="42" y="32" width="10" height="20" rx="5" fill="#C7A15A" />
      {/* Ground line */}
      <rect x="18" y="70" width="24" height="3" rx="1.5" fill="#C7A15A" opacity="0.4" />
      {/* Sun dot above */}
      <circle cx="30" cy="9" r="5" fill="#C7A15A" opacity="0.6" />
      {/* Sun rays */}
      <line x1="30" y1="1" x2="30" y2="3" stroke="#C7A15A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="38" y1="3" x2="37" y2="4.5" stroke="#C7A15A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="22" y1="3" x2="23" y2="4.5" stroke="#C7A15A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
