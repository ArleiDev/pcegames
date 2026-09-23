"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Check, Star } from "lucide-react";

export interface Product {
  id: string;
  category: "consoles" | "pcgamer" | "acessorios";
  name: string;
  specs: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
}

export const catalogProducts: Product[] = [
  {
    id: "ps5-slim",
    category: "consoles",
    name: "PlayStation 5 Slim 1TB",
    specs: "Com Leitor de Disco + Controle DualSense Branco Oficial",
    price: 3799.0,
    oldPrice: 4299.0,
    image: "/products/ps5.png",
    badge: "Mais Vendido",
  },
  {
    id: "xbox-series-x",
    category: "consoles",
    name: "Xbox Series X 1TB",
    specs: "Verdadeiro 4K Gaming, 120 FPS + Controle Sem Fio Oficial",
    price: 4199.0,
    oldPrice: 4599.0,
    image: "/products/xbox.png",
    badge: "Alta Performance",
  },
  {
    id: "pc-gamer-rtx",
    category: "pcgamer",
    name: "PC Gamer PC&Games Super Intel i7",
    specs: "RTX 4070 12GB | 32GB RAM DDR5 | SSD NVMe 1TB | Fans RGB Amber",
    price: 7499.0,
    oldPrice: 8299.0,
    image: "/products/pc-gamer.png",
    badge: "Setup da Vitrine",
  },
  {
    id: "switch-oled",
    category: "consoles",
    name: "Nintendo Switch OLED 64GB",
    specs: "Tela OLED de 7 polegadas + Joy-Con Neon Azul e Vermelho",
    price: 2199.0,
    oldPrice: 2499.0,
    image: "/products/switch.png",
  },
  {
    id: "dualsense-edge",
    category: "acessorios",
    name: "Controle Sony DualSense Sem Fio",
    specs: "Feedback Háptico e Gatilhos Adaptáveis para PS5 e PC",
    price: 439.0,
    oldPrice: 499.0,
    image: "/products/dualsense.png",
  },
  {
    id: "headset-gamer-pro",
    category: "acessorios",
    name: "Headset Gamer 7.1 Surround Pro",
    specs: "Drivers de 50mm, Microfone com Cancelamento de Ruído e LED",
    price: 349.0,
    oldPrice: 420.0,
    image: "/products/headset.png",
  },
];

interface CatalogSectionProps {
  onAddToCart: (product: Product) => void;
}

export function CatalogSection({ onAddToCart }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts =
    activeCategory === "todos"
      ? catalogProducts
      : catalogProducts.filter((p) => p.category === activeCategory);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const categories = [
    { id: "todos", label: "Todos os Produtos" },
    { id: "consoles", label: "Consoles" },
    { id: "pcgamer", label: "PC Gamer" },
    { id: "acessorios", label: "Acessórios" },
  ];

  return (
    <section id="consoles" className="relative py-16 sm:py-24 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase">
            CATÁLOGO EXCLUSIVO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-4 uppercase tracking-tight">
            ESCOLHA SEU <span className="text-[#f5a623]">PRÓXIMO NÍVEL</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Equipamentos novos, com garantia total, nota fiscal e envio imediato para todo o Brasil.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#f5a623] text-black shadow-[0_0_20px_rgba(245,166,35,0.4)] scale-105"
                    : "bg-[#0e0e14] text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#0b0b10] border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-amber-400 text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider shadow-md">
                  {product.badge}
                </div>
              )}

              {/* Product Visual Real Photo with Transparent Background */}
              <div className="relative w-full h-52 rounded-xl bg-radial from-zinc-900/60 to-black/80 flex items-center justify-center mb-5 overflow-hidden border border-zinc-800/80 group-hover:border-amber-500/30 transition-all p-3">
                <div className="relative w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain object-center group-hover:scale-108 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs text-zinc-400 ml-1.5 font-semibold">
                    (5.0)
                  </span>
                </div>

                <h3 className="text-white text-lg font-black tracking-tight mb-1 group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                  {product.specs}
                </p>
              </div>

              {/* Price & CTA */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between mt-auto">
                <div>
                  {product.oldPrice && (
                    <span className="text-zinc-500 text-xs line-through block">
                      R$ {product.oldPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                  )}
                  <span className="text-amber-400 text-xl font-black">
                    R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-[10px] text-zinc-400 block font-semibold">
                    à vista no PIX com 5% OFF
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleAdd(product)}
                  className={`p-3 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
                    addedId === product.id
                      ? "bg-emerald-500 text-white scale-110"
                      : "bg-[#f5a623] hover:bg-[#ffb800] text-black hover:scale-105 active:scale-95"
                  }`}
                  aria-label="Adicionar ao carrinho"
                >
                  {addedId === product.id ? (
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  ) : (
                    <ShoppingCart className="w-5 h-5 stroke-[2.5]" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
