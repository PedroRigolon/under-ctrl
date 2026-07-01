"use client";

import { Wifi, Signal, BatteryFull } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// interface PhoneProps{

// }

/* Badge à direita do card: um serviço único (letra + cor da marca)
   ou um resumo de grupo (pilha de círculos coloridos). */
type Badge =
  | { kind: "single"; letter: string; color: string }
  | { kind: "group"; colors: string[] };

type Notif = { body: string; time: string; badge: Badge };

/* Alertas de renovação da lock screen. A pilha cresce do topo (abaixo do
   relógio) para baixo — o mais novo fica no topo. Cada rodada é um conjunto de
   cards; o loop cicla as rodadas para variar o conteúdo. Dentro da rodada, a
   ordem vai do mais antigo (entra 1º) ao mais novo (entra por último → topo).
   As cores das marcas são valores ilustrativos (não são tokens do design system). */
const ROUNDS: Notif[][] = [
  [
    {
      body: "Netflix renova em 2 dias · R$ 55,90",
      time: "há 1 h",
      badge: { kind: "single", letter: "N", color: "#E50914" },
    },
    {
      body: "Spotify renova amanhã · R$ 21,90",
      time: "há 20 min",
      badge: { kind: "single", letter: "S", color: "#1DB954" },
    },
    {
      body: "HBO Max renova em 4 dias · R$ 34,90",
      time: "há 5 min",
      badge: { kind: "single", letter: "H", color: "#7E22CE" },
    },
    {
      body: "3 renovam em 7 dias · R$ 91,80",
      time: "agora",
      badge: { kind: "group", colors: ["#E50914", "#1DB954", "#3692E8"] },
    },
  ],
  [
    {
      body: "Amazon Prime renova em 5 dias · R$ 19,90",
      time: "há 1 h",
      badge: { kind: "single", letter: "a", color: "#00A8E1" },
    },
    {
      body: "iCloud+ renova hoje · R$ 14,90",
      time: "há 25 min",
      badge: { kind: "single", letter: "i", color: "#3692E8" },
    },
    {
      body: "Google One renova em 6 dias · R$ 8,90",
      time: "há 5 min",
      badge: { kind: "single", letter: "G", color: "#4285F4" },
    },
    {
      body: "5 renovam em 12 dias · R$ 213,40",
      time: "agora",
      badge: {
        kind: "group",
        colors: ["#E50914", "#1DB954", "#3692E8", "#00A8E1", "#FF0000"],
      },
    },
  ],
  [
    {
      body: "YouTube Premium renova em 3 dias · R$ 24,90",
      time: "há 1 h",
      badge: { kind: "single", letter: "Y", color: "#FF0000" },
    },
    {
      body: "Disney+ renova em 9 dias · R$ 33,90",
      time: "há 20 min",
      badge: { kind: "single", letter: "D", color: "#113CCF" },
    },
    {
      body: "Xbox Game Pass renova em 8 dias · R$ 44,90",
      time: "há 5 min",
      badge: { kind: "single", letter: "X", color: "#107C10" },
    },
    {
      body: "4 renovam este mês · R$ 132,60",
      time: "agora",
      badge: {
        kind: "group",
        colors: ["#E50914", "#1DB954", "#3692E8", "#00A8E1"],
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

export default function Phone() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [round, setRound] = useState(0); // rodada atual (conjunto de cards)
  const [step, setStep] = useState(-1); // -1 = limpa; -2 = saindo; senão = quantos entraram
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);

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

  return (
    <>
      {/* MOLDURA (corpo do celular) — o padding É o bezel.
          Mobile: altura fixa, sem borda/raio embaixo (parece "cortado" pela metade).
          Tablet/desktop: volta ao normal (aspect-ratio + moldura completa). */}
      <div
        ref={rootRef}
        className="relative mx-auto w-full max-w-70
                bg-[linear-gradient(145deg,var(--grey-500),var(--grey-800)_45%,var(--grey-900))]
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),inset_0_-2px_6px_rgba(0,0,0,0.55),0_30px_45px_-15px_rgba(0,0,0,0.7)]
                h-120 rounded-t-[42px] rounded-b-none px-3 pt-3 pb-0
                md:h-auto md:aspect-[9/12] md:rounded-[42px] md:p-3"
      >
        {/* TELA — preenche sozinha, raio = 42px − 12px(p-3) ≈ 30px */}
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

          {/* Textos de data e hora da tela (precisam ser ajustados para pegar os valores exatos do dia em que o usuario estiver no site) */}
          <div className="absolute left-1/2 top-12 z-9 -translate-x-1/2 w-full flex flex-col justify-center items-center">
            <p className="text-components/80! font-light">
              terça-feira, 30 de Abril
            </p>
            <h3 className="text-components!">23:12</h3>
          </div>

          {/* pilha de notificações (lock screen) — posições dirigidas por `step`.
              Cada card é absoluto e cresce do topo (abaixo do relógio) para baixo.
              Margem lateral vem do `inset-x-3` daqui; o corte do excesso fica com o
              overflow-hidden da tela (não aqui, senão cortaria a entrada no topo). */}
          <ul className="absolute inset-x-3 top-[32%] bottom-0 z-10">
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
                    {/* logo do app (uc) */}
                    <div className="grid size-8 shrink-0 place-items-center rounded-[10px]
                                bg-[linear-gradient(160deg,var(--green-700),var(--green-900))]
                                shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                      <span className="text-mobile-sm! font-bold leading-none text-components!">
                        uc
                      </span>
                    </div>

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

                    {/* badge à direita: serviço único ou grupo */}
                    {n.badge.kind === "group" ? (
                      <div className="flex shrink-0 items-center">
                        {n.badge.colors.map((c, ci) => (
                          <span
                            key={c}
                            className="size-3.5 rounded-full ring-2 ring-components"
                            style={{ backgroundColor: c, marginLeft: ci ? "-0.4rem" : 0 }}
                          />
                        ))}
                      </div>
                    ) : (
                      <div
                        className="grid size-7 shrink-0 place-items-center rounded-lg"
                        style={{ backgroundColor: n.badge.color }}
                      >
                        <span className="text-mobile-sm! font-bold leading-none text-components!">
                          {n.badge.letter}
                        </span>
                      </div>
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
