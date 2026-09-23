"use client";

import React from "react";
import { X, MessageSquare, Phone, MapPin, Clock } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#0c0c12] border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div>
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">
              ATENDIMENTO OFICIAL
            </span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-1">
              PC & GAMES 66
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Methods */}
        <div className="mt-6 space-y-3.5">
          {/* Whats 1 */}
          <a
            href="https://wa.me/5551984743651?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20PC%20%26%20GAMES%2066%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500 text-black flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base group-hover:text-emerald-400 transition-colors">
                  WhatsApp 1 (Vendas e Orçamentos)
                </h4>
                <p className="text-emerald-400 font-bold text-xs sm:text-sm mt-0.5">
                  (51) 98474-3651
                </p>
              </div>
            </div>
            <span className="text-[11px] bg-emerald-500 text-black font-black px-2.5 py-1 rounded-full uppercase">
              Online
            </span>
          </a>

          {/* Whats 2 */}
          <a
            href="https://wa.me/5551980880648?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20PC%20%26%20GAMES%2066."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500 text-black flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base group-hover:text-emerald-400 transition-colors">
                  WhatsApp 2 (Suporte e Pedidos)
                </h4>
                <p className="text-emerald-400 font-bold text-xs sm:text-sm mt-0.5">
                  (51) 98088-0648
                </p>
              </div>
            </div>
            <span className="text-[11px] bg-emerald-500 text-black font-black px-2.5 py-1 rounded-full uppercase">
              Online
            </span>
          </a>

          {/* Ligação Fixo e Instagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* Ligação Fixo */}
            <a
              href="tel:+555196503144"
              className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 flex items-center gap-3 transition-colors group"
            >
              <Phone className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-[11px] text-zinc-500 uppercase font-bold">Ligação / Fixo</p>
                <p className="text-xs text-zinc-100 font-bold group-hover:text-amber-400 transition-colors">
                  (51) 9650-3144
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/pcegamespda66/#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-pink-500/40 flex items-center gap-3 transition-colors group"
            >
              <svg
                className="w-5 h-5 text-pink-400 shrink-0 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <div>
                <p className="text-[11px] text-zinc-500 uppercase font-bold">Instagram</p>
                <p className="text-xs text-zinc-100 font-bold group-hover:text-pink-400 transition-colors">
                  @pcegamespda66
                </p>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-[11px] text-zinc-500 uppercase font-bold">Atendimento</p>
                <p className="text-xs text-zinc-300 font-semibold">Seg - Sáb: 9h às 19h</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-[11px] text-zinc-500 uppercase font-bold">Envios</p>
                <p className="text-xs text-zinc-300">Para todo o Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
