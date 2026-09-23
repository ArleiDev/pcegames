"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenContact: () => void;
  cartCount: number;
}

export function Navbar({
  onOpenSearch,
  onOpenCart,
  onOpenContact,
  cartCount,
}: NavbarProps) {
  const [activeTab, setActiveTab] = useState<string>("inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "inicio", label: "Início", href: "#hero" },
    { id: "consoles", label: "Consoles", href: "#consoles" },
    { id: "pcgamer", label: "PC Gamer", href: "#pcgamer" },
    { id: "acessorios", label: "Acessórios", href: "#acessorios" },
    { id: "contato", label: "Contato", href: "#contato", isAction: true },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: (typeof navLinks)[0]
  ) => {
    e.preventDefault();
    setActiveTab(link.id);
    setMobileMenuOpen(false);

    if (link.isAction) {
      onOpenContact();
      return;
    }

    const targetEl = document.querySelector(link.href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070709]/95 backdrop-blur-md py-3 shadow-2xl border-b border-amber-500/10"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Oficial */}
          <Link
            href="/"
            className="relative flex items-center transition-transform hover:scale-105"
          >
            <div className="relative w-36 sm:w-44 h-12 sm:h-14">
              <Image
                src="/logo.png"
                alt="PC & GAMES 66 Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative text-sm lg:text-base font-semibold transition-all py-1 cursor-pointer ${
                    isActive
                      ? "text-amber-400 font-bold"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-0.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(245,166,35,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Icons */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Icon */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Buscar produtos"
              className="p-2 text-zinc-300 hover:text-amber-400 hover:bg-zinc-800/60 rounded-full transition-all"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Shopping Cart Icon with Badge */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="Abrir carrinho"
              className="relative p-2 text-zinc-300 hover:text-amber-400 hover:bg-zinc-800/60 rounded-full transition-all group"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-amber-400 text-black text-[10px] font-black rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-amber-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-zinc-800 bg-[#0c0c10]/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl space-y-2 animate-in fade-in duration-200">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-amber-400/10 text-amber-400 font-bold border-l-4 border-amber-400"
                      : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
