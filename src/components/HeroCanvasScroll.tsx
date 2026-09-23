"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ShoppingCart, ArrowRight, MousePointer } from "lucide-react";
import { PlatformBadges } from "./PlatformBadges";

const TOTAL_FRAMES = 192;

interface HeroCanvasScrollProps {
  onCtaClick: () => void;
}

export function HeroCanvasScroll({ onCtaClick }: HeroCanvasScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const animFrameIdRef = useRef<number | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Formata o número do frame para frame_001.webp até frame_192.webp
  const getFrameUrl = useCallback((index: number) => {
    const padded = String(index).padStart(3, "0");
    return `/frames-webp/frame_${padded}.webp`;
  }, []);

  // Desenha a imagem no canvas com ajuste "cover"
  const drawFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || 1280;
    const ih = img.naturalHeight || 720;

    // Calcula escala para preenchimento cover mantendo a proporção
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const nx = (cw - nw) / 2;
    const ny = (ch - nh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, nx, ny, nw, nh);
  }, []);

  // Pré-carregamento progressivo e inteligente dos 192 frames
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES + 1);

    // 1. Carrega o primeiro frame imediatamente para renderizar sem atraso
    const firstImg = new window.Image();
    firstImg.src = getFrameUrl(1);
    firstImg.onload = () => {
      imagesRef.current[1] = firstImg;
      drawFrame(firstImg);
      setIsLoaded(true);
    };

    // 2. Pré-carrega os frames-chave (passo de 4) para resposta imediata ao scroll
    const keyframes: number[] = [];
    for (let i = 2; i <= TOTAL_FRAMES; i += 4) {
      keyframes.push(i);
    }

    const loadKeyframes = async () => {
      for (const idx of keyframes) {
        if (!imagesRef.current[idx]) {
          const img = new window.Image();
          img.src = getFrameUrl(idx);
          img.onload = () => {
            imagesRef.current[idx] = img;
          };
        }
      }
    };
    loadKeyframes();

    // 3. Carrega todos os frames restantes em lotes leves em segundo plano
    let currentIndex = 2;
    const loadBatch = () => {
      const batchSize = 6;
      let count = 0;
      while (currentIndex <= TOTAL_FRAMES && count < batchSize) {
        const idx = currentIndex;
        if (!imagesRef.current[idx]) {
          const img = new window.Image();
          img.src = getFrameUrl(idx);
          img.onload = () => {
            imagesRef.current[idx] = img;
          };
        }
        currentIndex++;
        count++;
      }

      if (currentIndex <= TOTAL_FRAMES) {
        setTimeout(loadBatch, 30);
      }
    };

    const timer = setTimeout(loadBatch, 100);
    return () => clearTimeout(timer);
  }, [drawFrame, getFrameUrl]);

  // Redimensionamento do canvas com nitidez para telas Retina
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const currentIdx = Math.round(currentFrameRef.current);
      const img = imagesRef.current[currentIdx] || imagesRef.current[1];
      if (img) {
        drawFrame(img);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  // Loop de animação contínua (requestAnimationFrame) com interpolação suave (lerp)
  useEffect(() => {
    let lastRenderedFrame = -1;

    const renderLoop = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;

      // Interpolação suave (lerp)
      const diff = target - current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.16;
      } else {
        currentFrameRef.current = target;
      }

      const frameToDraw = Math.round(
        Math.min(TOTAL_FRAMES, Math.max(1, currentFrameRef.current))
      );

      if (frameToDraw !== lastRenderedFrame) {
        // Encontra o frame mais próximo já carregado
        let img = imagesRef.current[frameToDraw];
        if (!img || !img.complete) {
          // Busca o frame vizinho mais próximo já pronto
          for (let offset = 1; offset < 10; offset++) {
            const down = imagesRef.current[frameToDraw - offset];
            if (down && down.complete) {
              img = down;
              break;
            }
            const up = imagesRef.current[frameToDraw + offset];
            if (up && up.complete) {
              img = up;
              break;
            }
          }
        }

        if (img && img.complete) {
          drawFrame(img);
          lastRenderedFrame = frameToDraw;
        }
      }

      animFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(renderLoop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [drawFrame]);

  // Captura do scroll e mapeamento proporcional para os 192 frames
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Distância que o container rola enquanto o conteúdo está fixado
      const scrollableDistance = containerHeight - windowHeight;
      if (scrollableDistance <= 0) return;

      // Progresso de 0.0 (início) a 1.0 (final da animação)
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      setScrollProgress(progress);

      // Mapeia para o frame entre 1 e 192
      const target = 1 + progress * (TOTAL_FRAMES - 1);
      targetFrameRef.current = target;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative w-full h-[260vh] bg-[#070709]"
    >
      {/* Container Fixo (Sticky) que permanece na tela durante o scroll dos 192 frames */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* ========================================================================= */}
        {/* CAMADA DE BACKGROUND: CANVAS 60FPS ACELERADO POR HARDWARE */}
        {/* ========================================================================= */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[68%] xl:w-[62%] h-full pointer-events-none select-none z-0">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover"
          />

          {/* Gradiente Lateral Esquerdo: Dissolve a animação em preto puro onde fica o texto */}
          <div className="absolute inset-y-0 left-0 w-2/5 sm:w-1/2 lg:w-3/5 bg-gradient-to-r from-[#070709] via-[#070709]/90 to-transparent" />

          {/* Gradiente Superior: Integra suavemente com o cabeçalho */}
          <div className="absolute top-0 inset-x-0 h-28 sm:h-40 bg-gradient-to-b from-[#070709] via-[#070709]/70 to-transparent" />

          {/* Gradiente Inferior: Dissolve a base no preto de transição */}
          <div className="absolute bottom-0 inset-x-0 h-32 sm:h-44 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent" />

          {/* Gradiente Direito Sutil */}
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#070709]/40 to-transparent" />
        </div>

        {/* Efeitos de Iluminação e Glow no fundo */}
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
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
              <div className="mt-8 sm:mt-9 flex items-center gap-5">
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

            {/* Lado Direito: Espaço vazio na grid para permitir a visualização livre do background interativo */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[450px]" />
          </div>
        </div>

        {/* Indicador de Rolagem Interativa (Desaparece suavemente após o usuário começar a rolar) */}
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-500 ${
            scrollProgress > 0.08 ? "opacity-0" : "opacity-90"
          }`}
        >
          <div className="flex items-center gap-2 bg-[#0c0c10]/80 backdrop-blur-md border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-amber-400 shadow-lg animate-bounce">
            <MousePointer className="w-3.5 h-3.5" />
            <span>Role para interagir</span>
          </div>
        </div>
      </div>
    </div>
  );
}
