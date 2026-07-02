"use client";

import { Wifi, Signal, BatteryFull } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Logo from "../../../public/logo.svg";

// interface PhoneProps{

// }

/* Logos reais das marcas, servidas de /public/logos. `bg` é o fundo do tile
   (estilo ícone de app); `fit: "cover"` é para artes que já trazem o próprio
   fundo e preenchem o quadrado inteiro. */
type Service = { name: string; logo: string; bg: string; fit?: "cover" };

const SERVICES: Record<
  | "netflix"
  | "spotify"
  | "hbomax"
  | "amazon"
  | "icloud"
  | "googleone"
  | "youtube"
  | "disney"
  | "xbox",
  Service
> = {
  netflix: { name: "Netflix", logo: "/logos/netflix-seeklogo.png", bg: "#000000" },
  amazon: { name: "Amazon Prime", logo: "/logos/amazon-prime-seeklogo.png", bg: "#FFFFFF" },
  spotify: { name: "Spotify", logo: "/logos/spotify-2015-seeklogo.png", bg: "#191414" },
  hbomax: { name: "HBO Max", logo: "/logos/hbo-max-seeklogo.png", bg: "#FFFFFF" },
  icloud: { name: "iCloud+", logo: "/logos/apple-icloud-seeklogo.png", bg: "#FFFFFF" },
  googleone: { name: "Google One", logo: "/logos/google-one-seeklogo.png", bg: "#FFFFFF" },
  youtube: { name: "YouTube Premium", logo: "/logos/youtube-icon-seeklogo.png", bg: "#FFFFFF" },
  disney: { name: "Disney+", logo: "/logos/disney-seeklogo.png", bg: "#0E1B4D", fit: "cover" },
  xbox: { name: "Xbox Game Pass", logo: "/logos/xbox-game-pass-seeklogo.png", bg: "#FFFFFF" },
};

type ServiceId = keyof typeof SERVICES;

/* Badge à direita do card: um serviço único (logo real) ou um resumo de
   grupo (pilha de logos circulares). */
type Badge =
  | { kind: "single"; service: ServiceId }
  | { kind: "group"; services: ServiceId[] };

type Notif = { body: string; time: string; badge: Badge };

/* Alertas de renovação da lock screen. A pilha cresce do topo (abaixo do
   relógio) para baixo — o mais novo fica no topo. Cada rodada é um conjunto de
   cards; o loop cicla as rodadas para variar o conteúdo. Dentro da rodada, a
   ordem vai do mais antigo (entra 1º) ao mais novo (entra por último → topo). */
const ROUNDS: Notif[][] = [
  [
    {
      body: "Netflix renova em 2 dias · R$ 55,90",
      time: "há 1 h",
      badge: { kind: "single", service: "netflix" },
    },
    {
      body: "Spotify renova amanhã · R$ 21,90",
      time: "há 20 min",
      badge: { kind: "single", service: "spotify" },
    },
    {
      body: "HBO Max renova em 4 dias · R$ 34,90",
      time: "há 5 min",
      badge: { kind: "single", service: "hbomax" },
    },
    {
      body: "3 renovam em 7 dias · R$ 91,80",
      time: "agora",
      badge: { kind: "group", services: ["netflix", "spotify", "hbomax"] },
    },
  ],
  [
    {
      body: "Amazon Prime renova em 5 dias · R$ 19,90",
      time: "há 1 h",
      badge: { kind: "single", service: "amazon" },
    },
    {
      body: "iCloud+ renova hoje · R$ 14,90",
      time: "há 25 min",
      badge: { kind: "single", service: "icloud" },
    },
    {
      body: "Google One renova em 6 dias · R$ 8,90",
      time: "há 5 min",
      badge: { kind: "single", service: "googleone" },
    },
    {
      body: "5 renovam em 12 dias · R$ 213,40",
      time: "agora",
      badge: {
        kind: "group",
        services: ["netflix", "spotify", "icloud", "amazon", "youtube"],
      },
    },
  ],
  [
    {
      body: "YouTube Premium renova em 3 dias · R$ 24,90",
      time: "há 1 h",
      badge: { kind: "single", service: "youtube" },
    },
    {
      body: "Disney+ renova em 9 dias · R$ 33,90",
      time: "há 20 min",
      badge: { kind: "single", service: "disney" },
    },
    {
      body: "Xbox Game Pass renova em 8 dias · R$ 44,90",
      time: "há 5 min",
      badge: { kind: "single", service: "xbox" },
    },
    {
      body: "4 renovam este mês · R$ 132,60",
      time: "agora",
      badge: {
        kind: "group",
        services: ["netflix", "spotify", "icloud", "amazon"],
      },
    },
  ],
];

/* Parâmetros da pilha */
const VISIBLE = 4; // cards visíveis ao mesmo tempo
const SPACING = 76; // distância vertical (px) entre um card e o próximo

/* Timing do loop (ms) */
const CLEAR_DELAY = 900; // tela limpa → 1º card (também o delay inicial)
const STEP_INTERVAL = 1800; // intervalo entre cada card entrar (tempo de tela)
const FULL_HOLD = 3200; // pausa com a rodada cheia antes de todos saírem
const EXIT_DURATION = 750; // saída assenta antes de trocar de rodada

/* Tile quadrado com a logo real do serviço (estilo ícone de app). */
function ServiceTile({ id }: { id: ServiceId }) {
  const s = SERVICES[id];
  return (
    <div
      className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-lg ring-1 ring-black/10"
      style={{ backgroundColor: s.bg }}
    >
      <Image
        src={s.logo}
        alt={s.name}
        width={56}
        height={56}
        className={
          s.fit === "cover" ? "size-full object-cover" : "size-5 object-contain"
        }
      />
    </div>
  );
}

/* Pilha de logos circulares sobrepostas p/ notificações agrupadas. */
function ServiceStack({ ids }: { ids: ServiceId[] }) {
  return (
    <div className="flex shrink-0 items-center">
      {ids.map((id, i) => {
        const s = SERVICES[id];
        return (
          <span
            key={id}
            className="grid size-3.5 place-items-center overflow-hidden rounded-full ring-2 ring-components"
            style={{ backgroundColor: s.bg, marginLeft: i ? "-0.4rem" : 0 }}
          >
            <Image
              src={s.logo}
              alt={s.name}
              width={28}
              height={28}
              className={
                s.fit === "cover"
                  ? "size-full object-cover"
                  : "size-2.5 object-contain"
              }
            />
          </span>
        );
      })}
    </div>
  );
}

export default function Phone() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [round, setRound] = useState(0); // rodada atual (conjunto de cards)
  const [step, setStep] = useState(-1); // -1 = limpa; -2 = saindo; senão = quantos entraram
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);
  const [now, setNow] = useState<Date | null>(null); // null no SSR → evita mismatch

  // relógio real: só no cliente (via useEffect), atualizando a cada 10s.
  // o 1º update vai num callback (não no corpo do effect) p/ evitar render em cascata.
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 10_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  // respeita "reduzir movimento" do sistema
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // pausa a animação quando o telefone sai da viewport
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // loop dirigido por `step`/`round` — timers encadeados, sempre limpos no cleanup.
  // step: -1 limpa → 0..len-1 empilhando → -2 saindo → (troca rodada) → -1 ...
  useEffect(() => {
    if (!visible) return;
    const len = ROUNDS[round].length;
    let delay: number;
    let run: () => void;
    if (step === -2) {
      // saída assentou → troca de rodada e volta ao estado limpo
      delay = EXIT_DURATION;
      run = () => {
        setRound((r) => (r + 1) % ROUNDS.length);
        setStep(-1);
      };
    } else if (step === -1) {
      delay = CLEAR_DELAY; // tela limpa → primeiro card
      run = () => setStep(0);
    } else if (step >= len - 1) {
      delay = FULL_HOLD; // rodada cheia → segura, depois todos saem
      run = () => setStep(-2);
    } else {
      delay = STEP_INTERVAL; // próximo card entra
      run = () => setStep(step + 1);
    }
    const id = window.setTimeout(run, delay);
    return () => window.clearTimeout(id);
  }, [step, round, visible]);

  // Rótulos formatados em pt-BR. Enquanto `now` é null (SSR + 1ª hidratação),
  // mostra o placeholder — assim servidor e cliente batem (sem hydration mismatch).
  const rawDate = now?.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const dateLabel = rawDate
    ? rawDate.charAt(0).toUpperCase() + rawDate.slice(1) // "Terça-feira, 30 de abril"
    : "";
  const timeLabel =
    now?.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) ??
    "";

  return (
    <>
      {/* MOLDURA (corpo do celular). */}
      <div
        ref={rootRef}
        className="relative w-full max-w-70 md:max-w-63 lg:max-w-68
                bg-[linear-gradient(145deg,var(--grey-500),var(--grey-800)_45%,var(--grey-900))]
                md:shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),inset_0_-2px_6px_rgba(0,0,0,0.55),0_30px_45px_-15px_rgba(0,0,0,0.7)]
                h-112 rounded-t-[42px] rounded-b-none px-3 pt-3 pb-0
                md:h-117 lg:h-120 md:aspect-[7/12] md:rounded-[42px] md:p-3"
      >
        {/* TELA — preenche sozinha*/}
        <div
          className="relative flex h-full w-full flex-col overflow-hidden
                  rounded-t-[30px] rounded-b-none md:rounded-[30px]
                  bg-[linear-gradient(160deg,var(--color-primary),var(--color-primary-dark))]
                  shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.4)]"
        >
          {/* barra superior da tela do celular */}
          <div className="absolute top-3 z-10 flex w-full justify-between items-center px-sm">
            {/* texto que fica no top left (CTRL) */}
            <div className="flex">
              <p className="text-mobile-sm! text-components/80! font-light">
                CTRL
              </p>
            </div>

            {/* bolinha camera frontal */}
            <div className="absolute right-1/2 left-1/2 size-2.5 rounded-full bg-black/70 shadow-[inset_0_0_2px_rgba(255,255,255,0.35)]" />

            {/* icones de sinal, wifi e bateria */}
            <div className="flex items-center gap-1.5 text-components/80">
              <Signal className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
              <Wifi className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
              <BatteryFull className="size-4.5" strokeWidth={2} aria-hidden="true" />
            </div>
          </div>

          {/* iluminação frontal */}
          <div
            className="pointer-events-none absolute inset-0 rounded-t-[30px] rounded-b-none md:rounded-[30px]
                    bg-[radial-gradient(115%_75%_at_50%_-10%,rgba(255,255,255,0.30),rgba(255,255,255,0.08)_35%,transparent_65%)]"
          />

          {/* Textos de data e hora da tela) */}
          <div className="absolute left-1/2 top-11 z-9 -translate-x-1/2 w-full flex flex-col justify-center items-center">
            <p className="text-components/80! font-light">{dateLabel}</p>
            <h3 className="text-components!">{timeLabel}</h3>
          </div>

          {/* pilha de notificações (lock screen) — posições dirigidas por `step`.
              Cada card é absoluto e cresce do topo (abaixo do relógio) para baixo.
              Margem lateral vem do `inset-x-3` daqui; o corte do excesso fica com o
              overflow-hidden da tela (não aqui, senão cortaria a entrada no topo). */}
          <ul className="absolute inset-x-3 top-[29%] bottom-0 z-10">
            {ROUNDS[round].map((n, i) => {
              const slot = step - i; // 0 = mais novo (topo); cresce para baixo
              const inWindow = slot >= 0 && slot < VISIBLE;
              // escondido (slot < 0) = pré-entrada E saída: sobe levemente e some
              const y = slot < 0 ? (reduced ? -10 : -22) : slot * SPACING;
              const scale = reduced
                ? 1
                : slot < 0
                  ? 0.94
                  : 1 - Math.min(slot, 3) * 0.02;
              return (
                <li
                  key={n.body}
                  className="notif-card absolute inset-x-0 top-0 flex h-16 items-center rounded-2xl bg-components px-2.5 backdrop-blur-md
                          ring-1 ring-black/5 shadow-[0_6px_14px_rgba(8,33,20,0.15)]"
                  style={{
                    transform: `translateY(${y}px) scale(${scale})`,
                    opacity: inWindow ? 1 : 0,
                    zIndex: 100 - slot,
                  }}
                >
                  <div className="flex w-full items-center gap-2">
                    {/* logo do app */}
                    <Image
                      src={Logo}
                      alt="Logo do Under CTRL"
                      className="w-7 h-auto shrink-0"
                    />

                    {/* texto: título + horário, e o body abaixo */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-mobile-sm! font-bold leading-none whitespace-nowrap text-(--green-900)!">
                          Under CTRL
                        </p>
                        <span className="text-mobile-sm! leading-none whitespace-nowrap shrink-0 text-(--green-900)/50">
                          {n.time}
                        </span>
                      </div>
                      <p className="mt-1 text-mobile-sm! leading-snug text-text! line-clamp-2">
                        {n.body}
                      </p>
                    </div>

                    {/* badge à direita: logo do serviço ou pilha do grupo */}
                    {n.badge.kind === "group" ? (
                      <ServiceStack ids={n.badge.services} />
                    ) : (
                      <ServiceTile id={n.badge.service} />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
