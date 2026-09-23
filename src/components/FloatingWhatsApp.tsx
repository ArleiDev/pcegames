"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento Rápido" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/5551984743651?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20PC%20%26%20GAMES%2066%20e%20gostaria%20de%20um%20atendimento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="group relative flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold px-4 py-3 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
        </span>

        <MessageSquare className="w-5 h-5 stroke-[2.5]" />
        <span className="hidden sm:inline text-xs font-black tracking-wider uppercase">
          Fale Conosco
        </span>
      </a>
    </aside>
  );
}
