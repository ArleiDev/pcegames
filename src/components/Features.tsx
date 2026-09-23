import React from "react";
import { Truck, ShieldCheck, CreditCard, Headphones } from "lucide-react";

export function Features() {
  const items = [
    {
      icon: Truck,
      title: "ENTREGA RÁPIDA",
      subtitle: "Para todo o Brasil",
    },
    {
      icon: ShieldCheck,
      title: "COMPRA SEGURA",
      subtitle: "Seus dados protegidos",
    },
    {
      icon: CreditCard,
      title: "DIVERSAS FORMAS",
      subtitle: "De pagamento",
    },
    {
      icon: Headphones,
      title: "SUPORTE ESPECIALIZADO",
      subtitle: "Tire suas dúvidas",
    },
  ];

  return (
    <section className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-12">
      <div className="bg-[#0b0b0f]/80 backdrop-blur-md rounded-2xl border border-zinc-800/80 p-5 sm:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === items.length - 1;

            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center px-4 py-2 group cursor-pointer transition-all hover:translate-y-[-2px] ${
                  !isLast ? "lg:border-r lg:border-amber-500/20" : ""
                }`}
              >
                {/* Ícone Dourado */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-all">
                  <Icon className="w-9 h-9 stroke-[1.8] drop-shadow-[0_0_10px_rgba(245,166,35,0.4)]" />
                </div>

                {/* Título Principal */}
                <h3 className="text-white text-sm sm:text-base font-black tracking-wider uppercase mb-1 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                {/* Subtítulo */}
                <p className="text-zinc-400 text-xs sm:text-sm font-medium">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
