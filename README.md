# EntregaFinal

🚀 PWA + API Monorepo

Este projeto é um PWA completo, integrado a uma API Node/Express, empacotado em um monorepo, com dockerização, suporte a testes e preparado para CI/CD.

📦 Estrutura do Projeto
entregaFinal/
├── api/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       └── index.js
│
├── apps/
│   └── web/
│       ├── Dockerfile
│       ├── nginx.conf
│       ├── package.json
│       ├── vite.config.js
│       ├── icons/
│       ├── public/
│       │   ├── manifest.webmanifest
│       │   └── service-worker.js
│       └── src/
│
├── docker-compose.yml
├── LICENSE
└── README.md
📱 PWA (apps/web)

O frontend é um PWA criado com Vite + React, contendo:

manifest.webmanifest

service-worker.js com cache offline

ícones (192px e 512px)

estratégia Stale-While-Revalidate

Lighthouse > 90

Acessibilidade otimizada

📁 Estrutura interna
web/
├── icons/
├── public/
│   ├── manifest.webmanifest
│   └── service-worker.js
└── src/
    ├── App.jsx
    ├── main.jsx
    └── components/
🧠 API (api)

API simples em Node/Express com rotas REST retornando JSON.

🛣️ Rotas

GET / → Status da API

GET /data → Dados de exemplo

Integração feita via VITE_API_URL.

🐳 Docker Compose

Arquivo principal: docker-compose.yml

🔥 Serviços

api → Node/Express rodando em localhost:3000

web → PWA servido via Nginx na porta 8080

Para rodar:

docker-compose up --build

Acessar:

PWA → http://localhost:8080

API → http://localhost:3000

🧪 Testes
⚙️ Unitários (Jest)

Testes de funções do PWA

Testes de endpoints da API

🌐 E2E (Playwright)

Confere título do PWA

Verifica integração com API

Testa instalação do PWA (manifest + service worker)

Rodar testes:

npm test
⚙️ CI/CD (GitHub Actions)

Pipeline inclui:

Instalar dependências (web + api)

Rodar testes (unit + e2e)

Build do PWA

Upload de artefatos

Deploy automático no GitHub Pages

Arquivo: .github/workflows/ci.yml

🌐 Deploy (GitHub Pages)

O PWA é hospedado no GitHub Pages após o build.
