import React from "react";

export function PlatformBadges() {
  return (
    <div className="flex items-center flex-wrap gap-4 sm:gap-6 py-2">
      {/* PS5 Badge */}
      <div className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
        <svg
          className="w-6 h-6 text-white fill-current transition-colors group-hover:text-amber-400"
          viewBox="0 0 24 24"
        >
          <path d="M8.5 2C7.1 2 6 3.1 6 4.5v12.2c0 .4.4.7.8.6 1.4-.4 3-.7 4.7-.7 1.8 0 3.5.3 4.9.8.4.1.8-.2.8-.6V9.2c0-.4-.3-.7-.7-.8-1.5-.4-3.2-.6-5-.6-1.5 0-3 .2-4.3.5V5c0-.6.4-1 1-1h10.2c.6 0 1 .4 1 1v1.5c0 .3.2.5.5.5h1.5c.3 0 .5-.2.5-.5V4.5C21 3.1 19.9 2 18.5 2H8.5z" />
          <path d="M12.3 11.2c-1.6 0-3 .2-4.3.6v4.4c1.3-.4 2.8-.6 4.3-.6 2.4 0 4.2.6 4.2 2s-1.8 2-4.2 2c-1.4 0-2.8-.2-4.1-.6-.4-.1-.8.2-.8.6v1.3c0 .4.3.7.7.8 1.4.3 2.9.5 4.4.5 4.3 0 7.7-1.4 7.7-4.6 0-3.3-3.7-4.4-7.9-4.4z" />
        </svg>
        <span className="text-white font-bold text-sm tracking-wider group-hover:text-amber-400 transition-colors">
          PS5
        </span>
      </div>

      <div className="h-4 w-px bg-zinc-700 hidden sm:block" />

      {/* Xbox Badge */}
      <div className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
        <svg
          className="w-6 h-6 text-white fill-current transition-colors group-hover:text-amber-400"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.93 4.14c.73-.59 2.05-1.12 3.49-1.28-1.74 1.34-3.52 3.6-4.59 5.86.13-1.85.5-3.46 1.1-4.58zm9.86 0c.6 1.12.97 2.73 1.1 4.58-1.07-2.26-2.85-4.52-4.59-5.86 1.44.16 2.76.69 3.49 1.28zm-4.93 6.94c-1.42 2.1-3.69 4.33-6.14 5.29 1.58 1.83 3.9 3.01 6.14 3.01s4.56-1.18 6.14-3.01c-2.45-.96-4.72-3.19-6.14-5.29z" />
        </svg>
        <span className="text-white font-bold text-sm tracking-wider group-hover:text-amber-400 transition-colors">
          XBOX
        </span>
      </div>

      <div className="h-4 w-px bg-zinc-700 hidden sm:block" />

      {/* PC Gamer Badge */}
      <div className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
        <svg
          className="w-6 h-6 text-white fill-none stroke-current stroke-2 transition-colors group-hover:text-amber-400"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
        <span className="text-white font-bold text-sm tracking-wider group-hover:text-amber-400 transition-colors">
          PC GAMER
        </span>
      </div>
    </div>
  );
}
