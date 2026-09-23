"use client";

import React from "react";
import Image from "next/image";
import { X, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { Product } from "./CatalogSection";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de finalizar minha compra na PC & GAMES 66:\n\n${items
        .map(
          (i) =>
            `- ${i.quantity}x ${i.product.name}: R$ ${(
              i.product.price * i.quantity
            ).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
        )
        .join("\n")}\n\nTotal: R$ ${total.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`
    );
    window.open(`https://wa.me/5551984743651?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0b0b10] border-l border-zinc-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-400/10 text-amber-400 rounded-lg">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black text-white uppercase tracking-tight">
                Seu Carrinho
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/50 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-zinc-600">
                  <ShoppingCart className="w-10 h-10" />
                </div>
                <p className="text-zinc-400 font-semibold mb-1">
                  Seu carrinho está vazio
                </p>
                <p className="text-zinc-600 text-xs">
                  Adicione consoles ou PCs gamer para começar!
                </p>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex gap-4 items-center"
                >
                  <div className="relative w-16 h-16 rounded-lg bg-black/60 overflow-hidden shrink-0 border border-zinc-800 p-1">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain object-center"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-amber-400 font-extrabold mt-0.5">
                      R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-zinc-700 rounded-lg overflow-hidden">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                          className="px-2.5 py-0.5 text-xs text-zinc-400 hover:bg-zinc-800"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-white">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="px-2.5 py-0.5 text-xs text-zinc-400 hover:bg-zinc-800"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(product.id)}
                        className="text-zinc-500 hover:text-red-400 text-xs flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Total and Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-zinc-800/80 bg-zinc-950/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 text-sm font-semibold">Subtotal</span>
                <span className="text-xl font-black text-amber-400">
                  R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </span>
              </div>
              <p className="text-[11px] text-zinc-500">
                Entrega calculada no checkout ou atendimento direto.
              </p>

              <button
                type="button"
                onClick={handleCheckout}
                className="w-full bg-[#f5a623] hover:bg-[#ffb800] text-black font-black uppercase text-sm py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Finalizar Pedido</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
