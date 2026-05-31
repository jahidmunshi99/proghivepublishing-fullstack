"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const rotateY = useTransform(scrollY, [0, 600], [0, 22]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.94]);
  const y = useTransform(scrollY, [0, 600], [0, -50]);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* BACKGROUND (UNCHANGED) */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-900/20 via-slate-950 to-cyan-900/20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[50px_50px]" />

      {/* 🔥 TIGHTER CONTAINER (FIXED PADDING) */}
      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* GRID BALANCED */}
        <div className="grid lg:grid-cols-[60%_40%] gap-10 lg:gap-14 items-center">
          {/* ================= LEFT SIDE ================= */}
          <div className="w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs sm:text-sm font-medium mb-6">
              ✦ Professional Publishing Services
            </div>

            <h1 className="font-bold leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Transform Your Words Into{" "}
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
                Published Masterpieces
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
              Proghive Publishing delivers premium book formatting, layout
              design, and full-service publishing assistance for authors and
              self-publishers who demand nothing less than excellence.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a
                href="#"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-semibold transition text-sm sm:text-base"
              >
                Get Started
              </a>

              <a
                href="#portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-900 transition text-sm sm:text-base"
              >
                View Portfolio
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 max-w-lg">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-400">
                  4000+
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">Projects</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-400">
                  3500+
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-400">
                  5000+
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Published Books
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE (UNCHANGED SVG) ================= */}
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute w-[720px] h-[420px] bg-indigo-500/20 blur-[180px] rounded-full" />

            <svg
              width="720"
              height="380"
              viewBox="0 0 720 380"
              className="relative z-10"
              fill="none"
            >
              <defs>
                <linearGradient id="teamFlow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>

              {/* FLOW PATH */}
              <motion.path
                d="M100 190 C 200 80, 280 80, 360 190
             C 420 300, 520 300, 620 190"
                stroke="url(#teamFlow)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />

              {/* MANUSCRIPT */}
              <g>
                <rect
                  x="80"
                  y="160"
                  width="70"
                  height="80"
                  rx="8"
                  fill="#0f172a"
                  stroke="#22d3ee"
                  strokeWidth="2"
                />

                <text x="55" y="270" fontSize="12" fill="#cbd5e1">
                  Final Manuscript
                </text>

                <circle cx="115" cy="200" r="10" fill="#22d3ee" opacity="0.6">
                  <animate
                    attributeName="r"
                    values="8;18;8"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* TEAM HUB */}
              <g>
                <circle
                  cx="360"
                  cy="190"
                  r="75"
                  fill="#0f172a"
                  stroke="url(#teamFlow)"
                  strokeWidth="2"
                />

                <circle
                  cx="360"
                  cy="190"
                  r="35"
                  stroke="#6366f1"
                  fill="none"
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    values="30;50;30"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>

                <circle cx="340" cy="175" r="10" fill="#22d3ee" />
                <circle cx="380" cy="175" r="10" fill="#a855f7" />
                <circle cx="360" cy="210" r="10" fill="#6366f1" />

                <text x="285" y="290" fontSize="12" fill="#cbd5e1">
                  Proghive Publishing Team
                </text>
              </g>

              {/* OUTPUT */}
              <g>
                <rect
                  x="600"
                  y="160"
                  width="80"
                  height="90"
                  rx="8"
                  fill="#0f172a"
                  stroke="url(#teamFlow)"
                  strokeWidth="2"
                />

                <line
                  x1="635"
                  y1="160"
                  x2="635"
                  y2="250"
                  stroke="#22d3ee"
                  opacity="0.6"
                />

                <circle
                  cx="640"
                  cy="205"
                  r="20"
                  fill="none"
                  stroke="#a855f7"
                  opacity="0.3"
                >
                  <animate
                    attributeName="r"
                    values="10;35;10"
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                </circle>

                <text x="565" y="290" fontSize="12" fill="#cbd5e1">
                  Publish Ready Book
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
