<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Diretrizes do Projeto PC & GAMES 66

## 1. Regras de Design e Estrutura do Hero
- **Imagem do Setup como Background Real**: A imagem do setup gamer (`/hero-gaming-setup.jpg`) DEVE ser tratada como camada de fundo (background layer) ocupando toda a metade direita do Hero (`absolute inset-y-0 right-0 w-full lg:w-[65%] h-full`).
- **NUNCA usar em formato de "card" ou quadrado flutuante**: A imagem não deve ficar dentro de molduras, bordas visíveis (`border`), sombras de caixa ou cantos de cartões arredondados.
- **Fusão Suave com o Fundo**: Deve sempre utilizar gradientes transparentes nos cantos (esquerda, topo e base) para dissolver perfeitamente no fundo preto `#070709`.

## 2. Imagens dos Produtos do Catálogo
- **Fotos Reais Obrigatórias**: Todos os produtos exibidos (PS5, Xbox Series X, PC Gamer, Nintendo Switch, DualSense, Headset) DEVEM utilizar fotos reais de alta qualidade armazenadas em `public/products/`, nunca emojis ou ícones genéricos.

## 3. Identidade Visual
- **Fundo Principal**: Preto gamer profundo (`#070709`).
- **Cor Primária de Destaque**: Amarelo/Dourado gamer (`#f5a623` e `#ffb800`).
- **Logo Oficial**: `public/logo.png`.
- **Decorações do Rodapé**: Vetores SVG nativos (`BottomDecorations.tsx`) para manter nitidez em qualquer resolução.
