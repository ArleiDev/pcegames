import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, Phone, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050507] border-t border-zinc-900 pt-12 pb-8 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Logo & Sobre */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative w-44 h-14">
              <Image
                src="/logo.png"
                alt="PC & GAMES 66 Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Sua loja especializada em consoles de última geração, PCs gamer de alto desempenho e periféricos selecionados. Qualidade, procedência e garantia total para você jogar no topo.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantia oficial e suporte especializado</span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#consoles" className="hover:text-amber-400 transition-colors">
                  Consoles (PS5, Xbox, Switch)
                </a>
              </li>
              <li>
                <a href="#consoles" className="hover:text-amber-400 transition-colors">
                  PC Gamer de Alta Performance
                </a>
              </li>
              <li>
                <a href="#consoles" className="hover:text-amber-400 transition-colors">
                  Acessórios e Periféricos
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento & Redes */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Atendimento Oficial
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li>
                <a
                  href="https://wa.me/5551984743651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Whats 1: <strong>(51) 98474-3651</strong></span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5551980880648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Whats 2: <strong>(51) 98088-0648</strong></span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+555196503144"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Fixo: <strong>(51) 9650-3144</strong></span>
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://www.instagram.com/pcegamespda66/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-bold"
                >
                  <svg
                    className="w-4 h-4 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>@pcegamespda66</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Pagamento & Segurança */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Pagamento & Segurança
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-bold mb-4">
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-lg">
                PIX (5% OFF)
              </span>
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-lg">
                Cartão em até 12x
              </span>
              <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-lg">
                Boleto Bancário
              </span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 text-xs">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Ambiente 100% Criptografado & Seguro</span>
            </div>
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="pt-8 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} PC & GAMES 66. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito para gamers de verdade ⚡
          </p>
        </div>
      </div>
    </footer>
  );
}
