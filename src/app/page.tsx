"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroCanvasScroll } from "@/components/HeroCanvasScroll";
import { Features } from "@/components/Features";
import { BottomDecorations } from "@/components/BottomDecorations";
import { CatalogSection, Product } from "@/components/CatalogSection";
import { CartDrawer, CartItem } from "@/components/CartDrawer";
import { SearchModal } from "@/components/SearchModal";
import { ContactModal } from "@/components/ContactModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCtaClick = () => {
    const catalogEl = document.getElementById("consoles");
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: "smooth" });
    } else {
      setCartOpen(true);
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#070709] text-gray-100 flex flex-col justify-between selection:bg-amber-400 selection:text-black">
      {/* Barra de Navegação */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Hero Principal Idêntico à Imagem */}
      <main className="flex-1">
        <HeroCanvasScroll onCtaClick={handleCtaClick} />

        {/* 4 Diferenciais e Benefícios com Ícones Dourados */}
        <Features />

        {/* Elementos Decorativos: Pincelada Dourada e Marca d'água do Controle */}
        <BottomDecorations />

        {/* Catálogo Interativo dos Consoles e PC Gamer */}
        <CatalogSection
          onAddToCart={(product) => {
            handleAddToCart(product);
            setCartOpen(true);
          }}
        />
      </main>

      {/* Rodapé Gamer */}
      <Footer />

      {/* Modais e Gavetas Interativas */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(product) => {
          handleAddToCart(product);
          setCartOpen(true);
        }}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Botão Flutuante de WhatsApp Oficial */}
      <FloatingWhatsApp />
    </div>
  );
}
