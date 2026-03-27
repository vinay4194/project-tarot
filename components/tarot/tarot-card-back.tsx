export function TarotCardBack({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 480"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d1b4e" />
          <stop offset="100%" stopColor="#1a1041" />
        </linearGradient>
        <pattern id="ornatePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="rgba(212, 175, 55, 0.15)" />
        </pattern>
      </defs>

      {/* Card background */}
      <rect width="280" height="480" fill="url(#cardBg)" rx="12" />

      {/* Ornate pattern overlay */}
      <rect width="280" height="480" fill="url(#ornatePattern)" rx="12" />

      {/* Border */}
      <rect
        x="15"
        y="15"
        width="250"
        height="450"
        fill="none"
        stroke="rgba(212, 175, 55, 0.6)"
        strokeWidth="2"
        rx="8"
      />

      {/* Inner border */}
      <rect
        x="25"
        y="25"
        width="230"
        height="430"
        fill="none"
        stroke="rgba(212, 175, 55, 0.3)"
        strokeWidth="1"
        rx="6"
      />

      {/* Center ornate design */}
      <g transform="translate(140, 240)">
        {/* Sun/Moon symbol */}
        <circle r="50" fill="none" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="2" />
        <circle r="40" fill="none" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" />

        {/* Star points */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1={Math.cos((angle * Math.PI) / 180) * 30}
            y1={Math.sin((angle * Math.PI) / 180) * 30}
            x2={Math.cos((angle * Math.PI) / 180) * 50}
            y2={Math.sin((angle * Math.PI) / 180) * 50}
            stroke="rgba(212, 175, 55, 0.5)"
            strokeWidth="2"
          />
        ))}

        {/* Center circle */}
        <circle r="15" fill="rgba(212, 175, 55, 0.2)" stroke="rgba(212, 175, 55, 0.6)" strokeWidth="2" />
        <circle r="8" fill="rgba(212, 175, 55, 0.4)" />
      </g>

      {/* Corner decorations */}
      <g transform="translate(40, 40)">
        <path d="M 0,20 Q 0,0 20,0" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="2" fill="none" />
        <circle cx="0" cy="20" r="3" fill="rgba(212, 175, 55, 0.6)" />
        <circle cx="20" cy="0" r="3" fill="rgba(212, 175, 55, 0.6)" />
      </g>

      <g transform="translate(240, 40) scale(-1, 1)">
        <path d="M 0,20 Q 0,0 20,0" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="2" fill="none" />
        <circle cx="0" cy="20" r="3" fill="rgba(212, 175, 55, 0.6)" />
        <circle cx="20" cy="0" r="3" fill="rgba(212, 175, 55, 0.6)" />
      </g>

      <g transform="translate(40, 440) scale(1, -1)">
        <path d="M 0,20 Q 0,0 20,0" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="2" fill="none" />
        <circle cx="0" cy="20" r="3" fill="rgba(212, 175, 55, 0.6)" />
        <circle cx="20" cy="0" r="3" fill="rgba(212, 175, 55, 0.6)" />
      </g>

      <g transform="translate(240, 440) scale(-1, -1)">
        <path d="M 0,20 Q 0,0 20,0" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="2" fill="none" />
        <circle cx="0" cy="20" r="3" fill="rgba(212, 175, 55, 0.6)" />
        <circle cx="20" cy="0" r="3" fill="rgba(212, 175, 55, 0.6)" />
      </g>

      {/* Outer glow */}
      <rect
        width="280"
        height="480"
        fill="none"
        stroke="rgba(212, 175, 55, 0.3)"
        strokeWidth="3"
        rx="12"
      />
    </svg>
  );
}
