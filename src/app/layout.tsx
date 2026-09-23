import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PC & GAMES 66 | Consoles e PC Gamer de Alta Performance",
  description:
    "Os melhores eletrônicos, com qualidade, segurança e entrega rápida para todo o Brasil. PlayStation 5, Xbox Series X, PC Gamer e acessórios.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "PC & GAMES 66 | Consoles e PC Gamer",
    description: "Seu mundo gamer começa aqui. Os melhores eletrônicos com qualidade e entrega rápida.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-[#070709] text-gray-100 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
