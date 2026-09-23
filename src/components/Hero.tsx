"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { PlatformBadges } from "./PlatformBadges";

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 sm:pb-24 overflow-hidden bg-[#070709]"
    >
      {/* ========================================================================= */}
      {/* CAMADA DE BACKGROUND: IMAGEM DO SETUP GAMER PREENCHENDO O LADO DIREITO */}
      {/* ========================================================================= */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] xl:w-[60%] h-full pointer-events-none select-none z-0">
        {/* A Imagem Fotográfica em Alta Definição como Background Real */}
        <Image
          src="/hero-gaming-setup.jpg"
          alt="Setup Gamer Background com PC Gamer RGB, PlayStation 5, Xbox Series X e Nintendo Switch"
          fill
          priority
          className="object-cover object-center lg:object-center"
          sizes="(max-width: 1024px) 100vw, 65vw"
        />

        {/* Gradiente Lateral Esquerdo: Dissolve a imagem em preto puro onde fica o texto */}
        <div className="absolute inset-y-0 left-0 w-2/5 sm:w-1/2 lg:w-3/5 bg-gradient-to-r from-[#070709] via-[#070709]/90 to-transparent" />

        {/* Gradiente Superior: Integra suavemente com o cabeçalho */}
        <div className="absolute top-0 inset-x-0 h-32 sm:h-44 bg-gradient-to-b from-[#070709] via-[#070709]/70 to-transparent" />

        {/* Gradiente Inferior: Dissolve a reflexão da mesa no fundo da barra de diferenciais */}
        <div className="absolute bottom-0 inset-x-0 h-36 sm:h-48 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent" />

        {/* Gradiente Extremo Direito (em mobile/telas médias) */}
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#070709]/50 to-transparent" />
      </div>

      {/* Glow e iluminação de fundo âmbar/dourada */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-amber-500/20 via-orange-600/10 to-transparent blur-[140px] pointer-events-none rounded-full z-0" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full z-0" />

      {/* Dynamic Top-Right Grunge Splatter Accent */}
      <div
        className="absolute top-0 right-0 w-[380px] sm:w-[550px] h-[300px] sm:h-[450px] pointer-events-none opacity-45 mix-blend-screen z-0"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(245,166,35,0.7) 0%, rgba(245,166,35,0.2) 40%, transparent 75%)",
        }}
      />

      {/* ========================================================================= */}
      {/* CAMADA DE CONTEÚDO (TEXTOS, BADGES E BOTÃO CTA) */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Coluna de Texto: Ocupa a metade esquerda com contraste e legibilidade perfeita */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center text-left py-6 lg:py-12">
            {/* Tagline / Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-amber-400 font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                SEU MUNDO GAMER COMEÇA AQUI
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              <span className="block text-white">CONSOLES E</span>
              <span className="block text-[#f5a623] drop-shadow-[0_0_35px_rgba(245,166,35,0.45)]">
                PC GAMER
              </span>
            </h1>

            {/* Subtítulo Descritivo */}
            <p className="mt-4 sm:mt-5 text-zinc-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Os melhores eletrônicos, com qualidade, segurança e entrega rápida.
            </p>

            {/* Badges de Plataformas (PS5, Xbox, PC Gamer) */}
            <div className="mt-6 sm:mt-7">
              <PlatformBadges />
            </div>

            {/* Botão de Chamada para Ação (CTA) */}
            <div className="mt-8 sm:mt-9 flex items-center">
              <button
                type="button"
                onClick={onCtaClick}
                className="group relative inline-flex items-center justify-center gap-3.5 bg-gradient-to-r from-[#f5a623] via-[#ffb800] to-[#f5a623] text-black font-black text-sm sm:text-base uppercase tracking-wider px-8 sm:px-9 py-4 rounded-full shadow-[0_10px_35px_rgba(245,166,35,0.4)] hover:shadow-[0_15px_45px_rgba(245,166,35,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Efeito de brilho passar no hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <ShoppingCart className="w-5 h-5 text-black stroke-[2.5] group-hover:-rotate-12 transition-transform" />
                <span className="relative z-10">COMPRAR AGORA</span>
                <ArrowRight className="w-5 h-5 text-black stroke-[2.5] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Lado Direito: Espaço vazio na grid para permitir a visualização livre do background */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[450px]" />
        </div>
      </div>
    </section>
  );
}
