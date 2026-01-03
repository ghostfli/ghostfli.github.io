export function CircuitPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal lines */}
            <line
              x1="0"
              y1="20"
              x2="40"
              y2="20"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
            />
            <line
              x1="60"
              y1="20"
              x2="100"
              y2="20"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
            />
            
            {/* Vertical lines */}
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="40"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
            />
            <line
              x1="50"
              y1="60"
              x2="50"
              y2="100"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
            />

            {/* Circuit nodes */}
            <circle cx="50" cy="20" r="3" fill="rgba(59, 130, 246, 0.5)" />
            <circle cx="20" cy="80" r="2" fill="rgba(59, 130, 246, 0.4)" />
            <circle cx="80" cy="60" r="2" fill="rgba(59, 130, 246, 0.4)" />

            {/* Diagonal lines */}
            <line
              x1="50"
              y1="20"
              x2="70"
              y2="40"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
}
