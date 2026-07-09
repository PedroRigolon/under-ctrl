<p align="center">
  <img src="frontend/public/logo+text.svg" alt="Logo Under CTRL" width="300"/>
</p>

<p align="center">
  <strong>Suas assinaturas sob controle — sem integração bancária, sem digitação manual</strong><br>
  <em>Envie um print do recibo, a IA preenche o cadastro e você é avisado antes de cada renovação</em>
</p>

<p align="center">
  <a href="/README-en.md" target="_blank">🇺🇸 English</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="/docs/spec.md" target="_blank">📄 Especificação completa</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/PedroRigolon/under-ctrl/issues" target="_blank">🐛 Reportar Bug</a>
</p>

<p align="center">
  <a href="https://github.com/PedroRigolon/under-ctrl/stargazers">
    <img src="https://img.shields.io/github/stars/PedroRigolon/under-ctrl?style=social" alt="GitHub stars">
  </a>
  <a href="https://github.com/PedroRigolon/under-ctrl/issues">
    <img src="https://img.shields.io/github/issues/PedroRigolon/under-ctrl" alt="GitHub issues">
  </a>
  <a href="https://github.com/PedroRigolon/under-ctrl/commits">
    <img src="https://img.shields.io/github/last-commit/PedroRigolon/under-ctrl" alt="Last commit">
  </a>
</p>

---

<!-- 🎬 DEMO: arraste um vídeo .mp4 aqui pelo editor do GitHub para gerar o link user-attachments -->

<p align="center">
  <img src="frontend/public/hero_img_desktop.svg" alt="Ilustração do Under CTRL" width="800"/>
</p>

**Under CTRL** é um SaaS freemium de gestão de assinaturas recorrentes. Ele atua como um "sentinela invisível": você cadastra suas assinaturas uma vez e o app avisa antes de cada renovação — por e-mail e/ou Telegram.

> 💡 **O diferencial está no cadastro:** você envia um print do recibo, a IA extrai nome, valor e data, e o formulário chega pronto para você só revisar e confirmar. Nada de conectar sua conta do banco.

## ⚡ Como funciona

```mermaid
flowchart LR
    A["📸 Print do recibo"] --> B["🤖 IA extrai os dados"]
    B --> C["✅ Você revisa e confirma"]
    C --> D["🔔 Alertas 7 dias · 3 dias · 24h<br/>antes da renovação"]
```

## 📱 Telas

### Homepage

![Homepage desktop](docs/img/homepage-desktop.png)

### Login

![Login desktop](docs/img/login-desktop.png)

### Mobile-first

<p align="center">
  <img src="docs/img/homepage-mobile.png" alt="Homepage mobile" width="280">
  &nbsp;&nbsp;&nbsp;
  <img src="docs/img/login-mobile.png" alt="Login mobile" width="280">
</p>

## 🛠️ Stack

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <br>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Groq_(Llama_Vision)-F55036?style=for-the-badge" alt="Groq">
  <br>
  <img src="https://img.shields.io/badge/Google_OAuth-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google OAuth">
  <img src="https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
  <img src="https://img.shields.io/badge/Mercado_Pago-00B1EA?style=for-the-badge&logo=mercadopago&logoColor=white" alt="Mercado Pago">
</p>

## 🔒 Privacidade e LGPD

- 🧠 A IA apenas **pré-preenche** — toda decisão final é sua (*human-in-the-loop*).
- 🗑️ Imagens de recibo **nunca são armazenadas**: existem só na RAM durante o processamento.
- 💳 Dados de pagamento ficam exclusivamente no Mercado Pago (PCI-DSS).
- 📤 Seus dados são seus: exportação em JSON e exclusão de conta com *hard delete*.

## 🚦 Status do projeto

| Etapa | Status |
| ----- | :----: |
| Conceito e escopo | ✅ |
| Branding (nome, logo, cores, fontes) | ✅ |
| Design System e wireframes no Figma | 🚧 |
| Frontend — homepage e login | ✅ |
| Frontend — área logada | 🚧 |
| Backend | ⏳ |

---

<p align="center">
  <img src="frontend/public/logo.svg" alt="Under CTRL" width="48"/><br>
  <strong>Autor:</strong> Pedro Rigolon · <strong>Grupo:</strong> RC Studio — Desenvolvimento de Software
</p>
