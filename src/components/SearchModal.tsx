"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, X, ArrowRight } from "lucide-react";
import { Product, catalogProducts } from "./CatalogSection";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export function SearchModal({
  isOpen,
  onClose,
  onSelectProduct,
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const results = query.trim()
    ? catalogProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.specs.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative mx-auto max-w-2xl bg-[#0c0c12] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800/80">
          <Search className="w-5 h-5 text-amber-400 mr-3" />
          <input
            type="text"
            placeholder="Buscar consoles, PC gamer, controles, marcas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-white placeholder-zinc-500 text-base focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-zinc-500 hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md hover:bg-zinc-700"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-4">
          {query.trim() === "" ? (
            <div className="py-8 text-center text-zinc-500 text-sm">
              <p>Digite o que você procura (ex: PS5, Xbox, RTX, Headset)...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-zinc-500 text-sm">
              Nenhum produto encontrado para &quot;{query}&quot;.
            </div>
          ) : (
            <div className="space-y-2">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 hover:bg-amber-400/10 border border-transparent hover:border-amber-400/30 cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg bg-black/60 overflow-hidden shrink-0 border border-zinc-800 p-1">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain object-center"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-zinc-400 line-clamp-1">{product.specs}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 font-black text-sm">
                      R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
