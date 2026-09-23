import React from "react";

export function BottomDecorations() {
  return (
    <div className="relative w-full overflow-hidden pointer-events-none select-none h-28 sm:h-36">
      {/* Pincelada Dourada Gamer Vetorial no Canto Inferior Esquerdo */}
      <div className="absolute -bottom-4 left-0 w-80 sm:w-[480px] h-28 sm:h-36 opacity-90">
        <svg
          viewBox="0 0 500 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Main dynamic brush strokes in amber-gold */}
          <path
            d="M-20 140 L380 140 L420 85 L280 95 L340 50 L180 75 L220 20 L40 55 L-20 15 Z"
            fill="url(#goldGradient)"
          />
          <path
            d="M20 70 L260 40 L310 15 L240 25 L160 45 L0 80 Z"
            fill="#ffb800"
            opacity="0.85"
          />
          <path
            d="M120 40 L290 8 L330 0 L270 12 L190 22 Z"
            fill="#f5a623"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="60%" stopColor="#f5a623" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Marca d'água Vetorial Estilizada do Controle Gamer no Canto Inferior Direito */}
      <div className="absolute -bottom-6 right-2 sm:right-10 w-72 sm:w-96 h-28 sm:h-36 opacity-20 sm:opacity-30">
        <svg
          viewBox="0 0 320 140"
          fill="none"
          stroke="#4b5563"
          strokeWidth="2.5"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Controller Body Outline */}
          <path
            d="M60 130 C40 130 20 100 25 70 C30 35 65 20 100 20 C130 20 145 35 160 35 C175 35 190 20 220 20 C255 20 290 35 295 70 C300 100 280 130 260 130 C240 130 225 100 215 80 C205 60 185 55 160 55 C135 55 115 60 105 80 C95 100 80 130 60 130 Z"
            strokeLinejoin="round"
          />
          {/* D-Pad on Left */}
          <path d="M70 45 L70 65 M60 55 L80 55" strokeWidth="4" strokeLinecap="round" />
          {/* Action Buttons on Right */}
          <circle cx="240" cy="45" r="4" fill="#4b5563" />
          <circle cx="255" cy="55" r="4" fill="#4b5563" />
          <circle cx="225" cy="55" r="4" fill="#4b5563" />
          <circle cx="240" cy="65" r="4" fill="#4b5563" />
          {/* Thumbsticks */}
          <circle cx="115" cy="80" r="14" />
          <circle cx="115" cy="80" r="7" />
          <circle cx="205" cy="80" r="14" />
          <circle cx="205" cy="80" r="7" />
          {/* Central Touchpad / Logo Area */}
          <rect x="135" y="28" width="50" height="20" rx="4" />
        </svg>
      </div>
    </div>
  );
}
