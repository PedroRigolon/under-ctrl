<p align="center">
  <img src="frontend/public/logo+text.svg" alt="Under CTRL logo" width="300"/>
</p>

<p align="center">
  <strong>Your subscriptions under control — no bank integration, no manual typing</strong><br>
  <em>Upload a receipt screenshot, the AI fills the form, and you get warned before every renewal</em>
</p>

<p align="center">
  <a href="/README.md" target="_blank">🇧🇷 Português</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="/docs/spec.md" target="_blank">📄 Full specification</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/PedroRigolon/under-ctrl/issues" target="_blank">🐛 Report Bug</a>
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

<!-- 🎬 DEMO: drag an .mp4 file here in the GitHub editor to generate the user-attachments link -->

<p align="center">
  <img src="frontend/public/hero_img_desktop.svg" alt="Under CTRL illustration" width="800"/>
</p>

**Under CTRL** is a freemium SaaS for managing recurring subscriptions. It works as an "invisible sentinel": you register your subscriptions once and the app warns you before every renewal — via email and/or Telegram.

> 💡 **The differentiator is onboarding:** you upload a receipt screenshot, the AI extracts the name, amount and date, and the form arrives pre-filled for you to review and confirm. No bank account linking.

## ⚡ How it works

```mermaid
flowchart LR
    A["📸 Receipt screenshot"] --> B["🤖 AI extracts the data"]
    B --> C["✅ You review and confirm"]
    C --> D["🔔 Alerts 7 days · 3 days · 24h<br/>before renewal"]
```

## 📱 Screens

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

## 🔒 Privacy & LGPD

- 🧠 The AI only **pre-fills** — every final decision is yours (*human-in-the-loop*).
- 🗑️ Receipt images are **never stored**: they live only in RAM during processing.
- 💳 Payment data is handled exclusively by Mercado Pago (PCI-DSS).
- 📤 Your data is yours: JSON export and account deletion via *hard delete*.

## 🚦 Project status

| Stage | Status |
| ----- | :----: |
| Concept & scope | ✅ |
| Branding (name, logo, colors, fonts) | ✅ |
| Figma Design System & wireframes | 🚧 |
| Frontend — homepage & login | ✅ |
| Frontend — logged-in area | 🚧 |
| Backend | ⏳ |

---

<p align="center">
  <img src="frontend/public/logo.svg" alt="Under CTRL" width="48"/><br>
  <strong>Author:</strong> Pedro Rigolon · <strong>Group:</strong> RC Studio — Software Development
</p>
