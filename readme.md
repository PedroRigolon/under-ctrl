# Under CTRL

> SaaS de gestão de assinaturas recorrentes com cadastro por IA (visão computacional).

**[Português](#português)** · [English](#english)

---

## Português

### O que é

Under CTRL é um SaaS de gestão de assinaturas recorrentes com modelo freemium. O sistema atua como um "sentinela invisível": o usuário cadastra suas assinaturas uma vez e o app avisa antes de cada renovação.

O diferencial está no cadastro. O usuário envia um print do recibo ou do plano, a IA extrai os dados relevantes (nome, valor, data) e preenche o formulário automaticamente — **sem integração bancária e sem digitação manual**.

### Por que não os concorrentes?

| App | Problema |
|-----|----------|
| Rocket Money, Mobills | Exigem integração bancária — usuários desconfiam e abandonam |
| Bobby, Subby | Cadastro 100% manual — usuários abandonam por preguiça |

**Under CTRL** elimina os dois atritos: o usuário envia um print, a IA preenche o formulário, e o sistema alerta antes de cada renovação.

### Stack

| Camada | Tecnologia | Observação |
|--------|-----------|------------|
| Frontend | React / Next.js (TBD) | Mobile-first, responsivo |
| Backend | Node.js + Express | REST API |
| Banco de dados | MongoDB | Sem imagens armazenadas |
| IA (visão) | Groq (Llama Vision) | Não treina com os dados; free tier generoso |
| Auth | Google OAuth 2.0 + Magic Link | Login facilitado |
| E-mail | Resend ou Brevo | Alertas + Magic Link |
| Alertas | Telegram Bot API + E-mail | Gratuito |
| Pagamentos | Mercado Pago | PIX + cartão |
| Hosting | Servidor próprio ou Oracle Cloud Free | — |

**Por que Groq?** GitHub Models proíbe uso comercial em produção. O Gemini, no free tier, usa as imagens para treinar os modelos do Google (risco de LGPD). O Groq não treina com os dados enviados e tem free tier generoso.

### Funcionalidades

- **Autenticação e gestão de conta** — login com Google OAuth 2.0 ou Magic Link (link de uso único, validade de 15 min); aceite de termos e confirmação de maioridade; exclusão de conta com *hard delete*.
- **CRUD de assinaturas + IA** — três métodos de cadastro: via IA (upload de imagem → extração de dados → revisão humana), via lista de serviços populares pré-categorizados, ou manual. A imagem existe apenas na RAM durante o processamento e é descartada imediatamente.
- **Motor de alertas** — *cron job* diário dispara avisos a 7 dias, 3 dias e 24h antes do vencimento, por e-mail e/ou Telegram. Múltiplas assinaturas no mesmo período são agrupadas em uma única mensagem.
- **Plano único (lifetime) + upsell contextual** — modelo freemium com um único plano pago de pagamento único (acesso vitalício, sem recorrência). O upgrade é evidenciado de forma contextual, nunca logo na entrada.

### Requisitos não funcionais (resumo)

- **Performance** — resposta da IA < 10s, com *Skeleton Screen* durante a espera; *cron* de alertas confiável; upload via câmera funcional em 4G/5G.
- **Segurança** — HTTPS/TLS, JWT em cookie `HttpOnly`/`Secure`/`SameSite=Strict`, validação e sanitização de input no backend (Zod/Joi), CORS restrito ao domínio oficial, CSP, *rate limiting* (10 uploads/min por usuário), criptografia em repouso, rotas protegidas por JWT.
- **UX** — máx. 3 cliques do site ao envio do comprovante; interface mobile-first; falha tolerante (sugere cadastro manual se a IA cair); API documentada com Swagger/OpenAPI.

### Conformidade LGPD

O projeto é desenhado em conformidade com a LGPD (Lei nº 13.709/2018) e o Marco Civil da Internet (Lei nº 12.965/2014):

- Base legal documentada para cada dado tratado (Art. 7).
- Direitos do titular atendidos (Art. 18): acesso, correção, portabilidade (export em JSON), eliminação e revogação de consentimento.
- *Human-in-the-loop*: a IA apenas pré-preenche; toda decisão final é humana.
- Imagens de recibo nunca persistidas — somente em RAM durante o processamento.
- Dados de pagamento processados exclusivamente pelo Mercado Pago (PCI-DSS); o backend guarda apenas o ID externo e o status da transação.
- DPO designado e canal do titular disponível na Política de Privacidade.

### Status do projeto

| Etapa | Status |
|-------|--------|
| Conceito e escopo | Concluído |
| Branding (nome, logo, cores, fontes) | Concluído |
| Design System no Figma | Em andamento |
| Wireframes no Figma | Em andamento |
| Domínio | Comprado |
| Backend | Pendente |
| Frontend | Pendente |

---

**Autor:** Pedro Rigolon · **Grupo:** RC Studio — Desenvolvimento de Software · **Versão:** 2.0

---

## English

### What it is

Under CTRL is a freemium SaaS for managing recurring subscriptions. It works as an "invisible sentinel": you register your subscriptions once and the app warns you before every renewal.

The key differentiator is onboarding. The user uploads a screenshot of the receipt or plan, and the AI extracts the relevant data (name, amount, date) and fills the form automatically — **no bank integration and no manual typing**.

### Why not the competitors?

| App | Problem |
|-----|---------|
| Rocket Money, Mobills | Require bank integration — users distrust it and drop off |
| Bobby, Subby | 100% manual entry — users drop off out of laziness |

**Under CTRL** removes both points of friction: the user uploads a screenshot, the AI fills the form, and the system alerts before each renewal.

### Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Frontend | React / Next.js (TBD) | Mobile-first, responsive |
| Backend | Node.js + Express | REST API |
| Database | MongoDB | No images stored |
| AI (vision) | Groq (Llama Vision) | Does not train on data; generous free tier |
| Auth | Google OAuth 2.0 + Magic Link | Frictionless login |
| Email | Resend or Brevo | Alerts + Magic Link |
| Alerts | Telegram Bot API + Email | Free |
| Payments | Mercado Pago | PIX + card |
| Hosting | Self-hosted or Oracle Cloud Free | — |

**Why Groq?** GitHub Models forbids commercial use in production. Gemini's free tier uses uploaded images to train Google's models (an LGPD/privacy risk). Groq does not train on submitted data and offers a generous free tier.

### Features

- **Authentication & account management** — Google OAuth 2.0 or Magic Link login (single-use link, 15-min validity); terms acceptance and age confirmation; account deletion via hard delete.
- **Subscription CRUD + AI** — three entry methods: via AI (image upload → data extraction → human review), via a pre-categorized list of popular services, or manual. The image lives only in RAM during processing and is discarded immediately afterward.
- **Alert engine** — a daily cron job fires alerts at 7 days, 3 days, and 24h before renewal, via email and/or Telegram. Multiple subscriptions in the same window are grouped into a single message.
- **Lifetime plan + contextual upsell** — freemium model with a single one-time payment plan (lifetime access, no recurring billing). The upgrade is surfaced contextually, never up front on entry.

### Non-functional requirements (summary)

- **Performance** — AI response < 10s, with a Skeleton Screen during the wait; reliable alert cron; camera upload working on 4G/5G.
- **Security** — HTTPS/TLS, JWT in `HttpOnly`/`Secure`/`SameSite=Strict` cookies, backend input validation and sanitization (Zod/Joi), CORS restricted to the official domain, CSP, rate limiting (10 uploads/min per user), encryption at rest, JWT-protected routes.
- **UX** — max 3 clicks from landing to receipt upload; mobile-first interface; fault-tolerant (falls back to manual entry if the AI is down); API documented with Swagger/OpenAPI.

### LGPD compliance

The project is designed to comply with Brazil's LGPD (Law 13.709/2018) and the Marco Civil da Internet (Law 12.965/2014):

- Documented legal basis for each data point processed (Art. 7).
- Data subject rights honored (Art. 18): access, correction, portability (JSON export), erasure, and consent revocation.
- Human-in-the-loop: the AI only pre-fills; every final decision is human.
- Receipt images never persisted — RAM-only during processing.
- Payment data handled exclusively by Mercado Pago (PCI-DSS); the backend stores only the external transaction ID and status.
- Designated DPO and a data subject contact channel available in the Privacy Policy.

### Project status

| Stage | Status |
|-------|--------|
| Concept & scope | Done |
| Branding (name, logo, colors, fonts) | Done |
| Figma Design System | In progress |
| Figma wireframes | In progress |
| Domain | Purchased |
| Backend | Pending |
| Frontend | Pending |

---

**Author:** Pedro Rigolon · **Group:** RC Studio — Software Development · **Version:** 2.0


