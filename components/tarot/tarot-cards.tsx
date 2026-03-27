export function TheMoonCard({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 480" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="moonBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1041" />
          <stop offset="50%" stopColor="#2d1b4e" />
          <stop offset="100%" stopColor="#1a1041" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="280" height="480" fill="url(#moonBg)" rx="12" />

      {/* Border */}
      <rect x="10" y="10" width="260" height="460" fill="none" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="2" rx="8" />

      {/* Title banner */}
      <rect x="40" y="30" width="200" height="40" fill="rgba(212, 175, 55, 0.15)" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1" />
      <text x="140" y="55" textAnchor="middle" fill="#D4AF37" fontSize="20" fontFamily="serif">THE MOON</text>

      {/* Moon */}
      <circle cx="140" cy="150" r="45" fill="rgba(212, 175, 55, 0.2)" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="140" cy="150" r="38" fill="rgba(212, 175, 55, 0.3)" />

      {/* Moon face details */}
      <circle cx="130" cy="145" r="4" fill="#D4AF37" />
      <circle cx="150" cy="145" r="4" fill="#D4AF37" />
      <path d="M 130,160 Q 140,165 150,160" stroke="#D4AF37" strokeWidth="2" fill="none" />

      {/* Light rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <line
          key={i}
          x1={140 + Math.cos((angle * Math.PI) / 180) * 50}
          y1={150 + Math.sin((angle * Math.PI) / 180) * 50}
          x2={140 + Math.cos((angle * Math.PI) / 180) * 65}
          y2={150 + Math.sin((angle * Math.PI) / 180) * 65}
          stroke="rgba(212, 175, 55, 0.6)"
          strokeWidth="2"
        />
      ))}

      {/* Stars */}
      <g fill="#D4AF37">
        <circle cx="60" cy="100" r="3" opacity="0.8" />
        <circle cx="220" cy="110" r="2.5" opacity="0.7" />
        <circle cx="90" cy="70" r="2" opacity="0.6" />
        <circle cx="190" cy="80" r="2.5" opacity="0.7" />
        <circle cx="50" cy="130" r="2" opacity="0.6" />
        <circle cx="230" cy="140" r="3" opacity="0.8" />
      </g>

      {/* Path with water */}
      <rect x="110" y="230" width="60" height="150" fill="rgba(107, 70, 193, 0.2)" stroke="rgba(159, 122, 234, 0.4)" strokeWidth="1" />

      {/* Towers */}
      <rect x="40" y="320" width="40" height="80" fill="rgba(212, 175, 55, 0.15)" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="2" />
      <rect x="200" y="320" width="40" height="80" fill="rgba(212, 175, 55, 0.15)" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="2" />

      {/* Tower tops */}
      <polygon points="40,320 60,290 80,320" fill="rgba(212, 175, 55, 0.2)" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="2" />
      <polygon points="200,320 220,290 240,320" fill="rgba(212, 175, 55, 0.2)" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="2" />

      {/* Ground */}
      <rect x="30" y="400" width="220" height="50" fill="rgba(26, 22, 37, 0.8)" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" />

      {/* Mystical symbols at bottom */}
      <circle cx="70" cy="425" r="8" fill="none" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1" />
      <circle cx="140" cy="425" r="8" fill="none" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1" />
      <circle cx="210" cy="425" r="8" fill="none" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1" />

      <text x="140" y="463" textAnchor="middle" fill="rgba(212, 175, 55, 0.6)" fontSize="12" fontFamily="serif">XVIII</text>
    </svg>
  );
}

export function TheSunCard({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 480" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sunBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d1b4e" />
          <stop offset="50%" stopColor="#3a2566" />
          <stop offset="100%" stopColor="#2d1b4e" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="280" height="480" fill="url(#sunBg)" rx="12" />

      {/* Border */}
      <rect x="10" y="10" width="260" height="460" fill="none" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="2" rx="8" />

      {/* Title */}
      <rect x="40" y="30" width="200" height="40" fill="rgba(212, 175, 55, 0.15)" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1" />
      <text x="140" y="55" textAnchor="middle" fill="#D4AF37" fontSize="20" fontFamily="serif">THE SUN</text>

      {/* Sun */}
      <circle cx="140" cy="150" r="50" fill="rgba(212, 175, 55, 0.3)" stroke="#D4AF37" strokeWidth="3" />
      <circle cx="140" cy="150" r="40" fill="rgba(212, 175, 55, 0.5)" />

      {/* Sun rays (longer) */}
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
        <line
          key={i}
          x1={140 + Math.cos((angle * Math.PI) / 180) * 55}
          y1={150 + Math.sin((angle * Math.PI) / 180) * 55}
          x2={140 + Math.cos((angle * Math.PI) / 180) * (i % 2 === 0 ? 80 : 70)}
          y2={150 + Math.sin((angle * Math.PI) / 180) * (i % 2 === 0 ? 80 : 70)}
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}

      {/* Garden/field */}
      <rect x="40" y="280" width="200" height="120" fill="rgba(107, 70, 193, 0.15)" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" />

      {/* Flowers */}
      {[60, 100, 140, 180, 220].map((x, i) => (
        <g key={i}>
          <line x1={x} y1={350} x2={x} y2={370} stroke="rgba(212, 175, 55, 0.4)" strokeWidth="2" />
          <circle cx={x} cy={345} r="6" fill="rgba(212, 175, 55, 0.3)" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1" />
        </g>
      ))}

      {/* Wall */}
      <rect x="40" y="400" width="200" height="50" fill="rgba(26, 22, 37, 0.5)" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" />

      <text x="140" y="463" textAnchor="middle" fill="rgba(212, 175, 55, 0.6)" fontSize="12" fontFamily="serif">XIX</text>
    </svg>
  );
}

export function TheStarCard({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 480" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="starBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a0612" />
          <stop offset="50%" stopColor="#1a1625" />
          <stop offset="100%" stopColor="#0f0a1a" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="280" height="480" fill="url(#starBg)" rx="12" />

      {/* Border */}
      <rect x="10" y="10" width="260" height="460" fill="none" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="2" rx="8" />

      {/* Title */}
      <rect x="40" y="30" width="200" height="40" fill="rgba(212, 175, 55, 0.15)" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1" />
      <text x="140" y="55" textAnchor="middle" fill="#D4AF37" fontSize="20" fontFamily="serif">THE STAR</text>

      {/* Large central star */}
      <g transform="translate(140, 150)">
        <polygon
          points="0,-40 10,-10 40,-10 15,10 25,40 0,20 -25,40 -15,10 -40,-10 -10,-10"
          fill="rgba(212, 175, 55, 0.3)"
          stroke="#D4AF37"
          strokeWidth="2"
        />
        <circle r="10" fill="rgba(212, 175, 55, 0.5)" />
      </g>

      {/* Smaller stars */}
      <g transform="translate(80, 120)">
        <polygon
          points="0,-15 4,-4 15,-4 6,4 10,15 0,8 -10,15 -6,4 -15,-4 -4,-4"
          fill="rgba(212, 175, 55, 0.2)"
          stroke="rgba(212, 175, 55, 0.5)"
          strokeWidth="1"
        />
      </g>

      <g transform="translate(200, 110)">
        <polygon
          points="0,-15 4,-4 15,-4 6,4 10,15 0,8 -10,15 -6,4 -15,-4 -4,-4"
          fill="rgba(212, 175, 55, 0.2)"
          stroke="rgba(212, 175, 55, 0.5)"
          strokeWidth="1"
        />
      </g>

      <g transform="translate(60, 180)">
        <polygon
          points="0,-12 3,-3 12,-3 5,3 8,12 0,6 -8,12 -5,3 -12,-3 -3,-3"
          fill="rgba(212, 175, 55, 0.2)"
          stroke="rgba(212, 175, 55, 0.5)"
          strokeWidth="1"
        />
      </g>

      <g transform="translate(220, 190)">
        <polygon
          points="0,-12 3,-3 12,-3 5,3 8,12 0,6 -8,12 -5,3 -12,-3 -3,-3"
          fill="rgba(212, 175, 55, 0.2)"
          stroke="rgba(212, 175, 55, 0.5)"
          strokeWidth="1"
        />
      </g>

      {/* Water pools */}
      <ellipse cx="80" cy="320" rx="35" ry="25" fill="rgba(107, 70, 193, 0.2)" stroke="rgba(159, 122, 234, 0.4)" strokeWidth="2" />
      <ellipse cx="200" cy="340" rx="40" ry="28" fill="rgba(107, 70, 193, 0.2)" stroke="rgba(159, 122, 234, 0.4)" strokeWidth="2" />

      {/* Land */}
      <path
        d="M 30,400 Q 100,380 140,390 T 250,400 L 250,450 L 30,450 Z"
        fill="rgba(26, 22, 37, 0.6)"
        stroke="rgba(212, 175, 55, 0.3)"
        strokeWidth="1"
      />

      <text x="140" y="463" textAnchor="middle" fill="rgba(212, 175, 55, 0.6)" fontSize="12" fontFamily="serif">XVII</text>
    </svg>
  );
}
